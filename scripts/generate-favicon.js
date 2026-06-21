#!/usr/bin/env node

/**
 * Generate favicon sizes from assets/images-source/contact.png
 * Outputs: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT = path.join(__dirname, '../assets/images-source/contact.png');
const OUTPUT_DIR = path.join(__dirname, '../assets/images');

const SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function main() {
  const image = sharp(INPUT);

  for (const { name, size } of SIZES) {
    const outPath = path.join(OUTPUT_DIR, name);
    await image
      .clone()
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(outPath);
    console.log(`Created ${name}`);
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
