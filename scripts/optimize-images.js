#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images in assets/images/projects directory
 * Reduces file size while maintaining visual quality
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../assets/images/projects');
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];

// Optimization settings
const OPTIMIZATION_SETTINGS = {
  png: {
    compressionLevel: 9,
    quality: 90,
    effort: 7
  },
  jpg: {
    quality: 85,
    mozjpeg: true
  },
  jpeg: {
    quality: 85,
    mozjpeg: true
  }
};

/**
 * Get file size in human-readable format
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Optimize a single image file
 */
async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stats = fs.statSync(filePath);
  const originalSize = stats.size;
  
  try {
    let image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Skip if image is already small (< 100KB)
    if (originalSize < 100 * 1024) {
      console.log(`⏭️  Skipping ${path.basename(filePath)} (already small: ${formatBytes(originalSize)})`);
      return { optimized: false, saved: 0 };
    }
    
    // Apply optimization based on format
    if (ext === '.png') {
      image = image.png({
        compressionLevel: OPTIMIZATION_SETTINGS.png.compressionLevel,
        quality: OPTIMIZATION_SETTINGS.png.quality,
        effort: OPTIMIZATION_SETTINGS.png.effort
      });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      image = image.jpeg({
        quality: OPTIMIZATION_SETTINGS.jpg.quality,
        mozjpeg: OPTIMIZATION_SETTINGS.jpg.mozjpeg
      });
    }
    
    // Write optimized image to temporary file first
    const tempPath = filePath + '.tmp';
    await image.toFile(tempPath);
    
    // Check if optimization actually reduced size
    const newStats = fs.statSync(tempPath);
    const newSize = newStats.size;
    
    if (newSize < originalSize) {
      // Replace original with optimized version
      fs.renameSync(tempPath, filePath);
      const saved = originalSize - newSize;
      const percentSaved = ((saved / originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${path.basename(filePath)}`);
      console.log(`   ${formatBytes(originalSize)} → ${formatBytes(newSize)} (saved ${formatBytes(saved)}, ${percentSaved}%)`);
      
      return { optimized: true, saved, originalSize, newSize };
    } else {
      // Optimization didn't help, remove temp file
      fs.unlinkSync(tempPath);
      console.log(`⏭️  ${path.basename(filePath)} (optimization didn't reduce size)`);
      return { optimized: false, saved: 0 };
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${path.basename(filePath)}:`, error.message);
    return { optimized: false, saved: 0, error: error.message };
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Starting image optimization...\n');
  console.log(`📁 Processing images in: ${IMAGES_DIR}\n`);
  
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }
  
  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file);
    return SUPPORTED_FORMATS.includes(ext);
  });
  
  if (imageFiles.length === 0) {
    console.log('ℹ️  No images found to optimize.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} image(s) to process...\n`);
  
  let totalSaved = 0;
  let optimizedCount = 0;
  const results = [];
  
  for (const file of imageFiles) {
    const filePath = path.join(IMAGES_DIR, file);
    const result = await optimizeImage(filePath);
    results.push({ file, ...result });
    
    if (result.optimized) {
      optimizedCount++;
      totalSaved += result.saved;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Total images processed: ${imageFiles.length}`);
  console.log(`   Images optimized: ${optimizedCount}`);
  console.log(`   Total space saved: ${formatBytes(totalSaved)}`);
  console.log('='.repeat(50));
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
