#!/usr/bin/env node

/**
 * Crop an image to 5:2 aspect ratio (wide banner, matches show-it hero).
 * Anchors to bottom to preserve ground/STOP sign.
 */

const sharp = require('sharp');
const path = require('path');

const fs = require('fs');
const TARGET_ASPECT = 5 / 2; // 5:2 wide banner
const INPUT = path.join(__dirname, '../assets/images-source/projects/when-not-to-help.png');
const TEMP = INPUT + '.cropped.png';

async function main() {
  const image = sharp(INPUT);
  const { width, height } = await image.metadata();
  const currentAspect = width / height;

  let extract;
  if (currentAspect > TARGET_ASPECT) {
    // Image is wider than 5:2 — crop sides
    const newWidth = Math.round(height * TARGET_ASPECT);
    const left = Math.round((width - newWidth) / 2);
    extract = { left, top: 0, width: newWidth, height };
  } else {
    // Image is taller than 5:2 — crop top (keep STOP sign and ground)
    const newHeight = Math.round(width / TARGET_ASPECT);
    const top = height - newHeight; // anchor to bottom to preserve STOP sign
    extract = { left: 0, top, width, height: newHeight };
  }

  await image
    .extract(extract)
    .png({ compressionLevel: 9 })
    .toFile(TEMP);

  fs.renameSync(TEMP, INPUT);
  console.log(`Cropped to 5:2 (${extract.width}x${extract.height})`);
  console.log('Run `npm run build:images` to regenerate WebP for the site.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
