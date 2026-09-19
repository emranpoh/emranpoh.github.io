#!/usr/bin/env node
/**
 * Re-crop specific author avatar photos to a consistent, face-centered square
 * before the generic WebP pipeline (scripts/build-images.js) resizes them.
 * Most author photos are already reasonably centered headshots, so only the
 * ones with an off-center or zoomed-out face get an explicit crop rectangle
 * here (in source pixel coordinates: left, top, size).
 *
 * Usage: node scripts/crop-avatars.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = path.join(__dirname, '../assets/images-source/authors');

const CROPS = {
  'anthony-tang.png': { left: 90, top: 0, size: 390 },
  'shengdong-zhao.png': { left: 80, top: 0, size: 175 },
  'jiannan-li.jpg': { left: 0, top: 0, size: 100 },
  'renwen-zhang.jpg': { left: 190, top: 0, size: 900 },
  'tianyi-zhang.jpg': { left: 217, top: 111, size: 893 },
};

async function main() {
  for (const [file, rect] of Object.entries(CROPS)) {
    const srcPath = path.join(SOURCE_DIR, file);
    if (!fs.existsSync(srcPath)) {
      console.warn(`  skip (not found): ${file}`);
      continue;
    }
    const buf = await sharp(srcPath)
      .extract({ left: rect.left, top: rect.top, width: rect.size, height: rect.size })
      .toBuffer();
    await sharp(buf).toFile(srcPath);
    console.log(`  cropped ${file} → ${rect.size}x${rect.size}`);
  }
}

main().catch((err) => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
