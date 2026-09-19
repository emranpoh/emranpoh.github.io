#!/usr/bin/env node

/**
 * Generate a gallery thumbnail from a PDF's first two pages, side by side.
 * Used for publications that only have a PDF (no dedicated hero image).
 * The output keeps its natural (rectangular) aspect ratio — the gallery grid
 * crops it to fit the tile, same as any other photo.
 *
 * Usage: node scripts/pdf-thumbnails.js <pdf-path> <output-source-png> [pages]
 * Requires poppler's pdftoppm on PATH.
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const sharp = require('sharp');

const RENDER_DPI = 200;

async function makeThumbnail(pdfPath, outPath, pageCount = 2) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pdf-thumb-'));
  const prefix = path.join(tmpDir, 'page');

  execFileSync('pdftoppm', ['-png', '-r', String(RENDER_DPI), '-f', '1', '-l', String(pageCount), pdfPath, prefix]);

  const pageFiles = fs
    .readdirSync(tmpDir)
    .filter((f) => f.startsWith('page'))
    .sort()
    .map((f) => path.join(tmpDir, f));

  if (pageFiles.length === 0) {
    throw new Error(`No pages rendered from ${pdfPath}`);
  }

  // Composite full, uncropped pages side by side at their native aspect ratio.
  const metas = await Promise.all(pageFiles.map((f) => sharp(f).metadata()));
  const pageHeight = Math.max(...metas.map((m) => m.height));
  const scaledWidths = metas.map((m) => Math.round((m.width / m.height) * pageHeight));
  const stripWidth = scaledWidths.reduce((a, b) => a + b, 0);

  const resized = await Promise.all(
    pageFiles.map((f, i) => sharp(f).resize({ height: pageHeight, width: scaledWidths[i] }).toBuffer())
  );

  let left = 0;
  const composites = resized.map((buf, i) => {
    const c = { input: buf, left, top: 0 };
    left += scaledWidths[i];
    return c;
  });

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp({
    create: { width: stripWidth, height: pageHeight, channels: 3, background: '#ffffff' },
  })
    .composite(composites)
    .png()
    .toFile(outPath);

  fs.rmSync(tmpDir, { recursive: true, force: true });
  console.log(`  ${pdfPath} → ${outPath}`);
}

async function main() {
  const [pdfPath, outPath, pageCount] = process.argv.slice(2);
  if (!pdfPath || !outPath) {
    console.error('Usage: node scripts/pdf-thumbnails.js <pdf-path> <output-source-png> [pages]');
    process.exit(1);
  }
  await makeThumbnail(pdfPath, outPath, pageCount ? Number(pageCount) : 2);
}

main().catch((err) => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
