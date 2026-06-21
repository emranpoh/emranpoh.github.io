#!/usr/bin/env node

/**
 * Build runtime WebP images from assets/images-source/ → assets/images/
 *
 * Originals live in images-source/ (excluded from Jekyll). Only WebP + SVG +
 * generated favicon PNGs are deployed under assets/images/.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../assets/images-source');
const OUTPUT_DIR = path.join(__dirname, '../assets/images');
const RASTER_EXT = new Set(['.png', '.jpg', '.jpeg']);
const WEBP_QUALITY = 85;

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Math.round((bytes / Math.pow(k, i)) * 10) / 10} ${sizes[i]}`;
}

function walkFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, files);
    else files.push(full);
  }
  return files;
}

async function convertToWebp(sourcePath) {
  const ext = path.extname(sourcePath).toLowerCase();
  if (!RASTER_EXT.has(ext)) return null;

  const relative = path.relative(SOURCE_DIR, sourcePath);
  const outRelative = relative.replace(/\.(png|jpe?g)$/i, '.webp');
  const outPath = path.join(OUTPUT_DIR, outRelative);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const originalSize = fs.statSync(sourcePath).size;
  await sharp(sourcePath).webp({ quality: WEBP_QUALITY }).toFile(outPath);
  const newSize = fs.statSync(outPath).size;
  const saved = originalSize - newSize;
  const pct = originalSize > 0 ? ((saved / originalSize) * 100).toFixed(0) : 0;

  console.log(
    `  ${relative} → ${outRelative}  ${formatBytes(originalSize)} → ${formatBytes(newSize)} (−${pct}%)`
  );

  return { originalSize, newSize };
}

async function generateFavicons() {
  const contactPath = path.join(SOURCE_DIR, 'contact.png');
  if (!fs.existsSync(contactPath)) {
    console.log('\n⏭️  Skipping favicons (no contact.png in images-source)');
    return;
  }

  console.log('\n🔖 Generating favicon PNGs from contact.png…');
  const image = sharp(contactPath);
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    await image
      .clone()
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUTPUT_DIR, name));
    console.log(`  ${name}`);
  }
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  console.log('🖼️  Building WebP images for site…\n');
  console.log(`   Source: ${SOURCE_DIR}`);
  console.log(`   Output: ${OUTPUT_DIR}\n`);

  const sources = walkFiles(SOURCE_DIR);
  let converted = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of sources) {
    const result = await convertToWebp(file);
    if (result) {
      converted++;
      totalBefore += result.originalSize;
      totalAfter += result.newSize;
    }
  }

  await generateFavicons();

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Converted ${converted} image(s)`);
  if (converted > 0) {
    const saved = totalBefore - totalAfter;
    console.log(
      `   ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (saved ${formatBytes(saved)})`
    );
  }
  console.log('='.repeat(50));
}

main().catch((err) => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
