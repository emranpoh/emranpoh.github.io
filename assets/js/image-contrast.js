/**
 * Dynamically adjusts text color based on image background for maximum contrast
 * Analyzes the image pixels where text overlays are positioned and sets appropriate text color
 */

(function() {
  'use strict';

  /**
   * Calculate the relative luminance of an RGB color
   * Formula from WCAG 2.0: https://www.w3.org/WAI/GL/wiki/Relative_luminance
   */
  function getLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(val => {
      val = val / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  /**
   * Sample pixels from an image at specific coordinates
   * Returns average luminance of sampled pixels
   */
  function sampleImagePixels(img, x, y, width, height, sampleSize = 5) {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Use natural dimensions for accurate pixel sampling
      const naturalWidth = img.naturalWidth || img.width;
      const naturalHeight = img.naturalHeight || img.height;
      const displayedWidth = img.width || img.clientWidth;
      const displayedHeight = img.height || img.clientHeight;
      
      if (!naturalWidth || !naturalHeight || !displayedWidth || !displayedHeight) {
        return 0.5; // Default to medium brightness if dimensions are invalid
      }
      
      canvas.width = naturalWidth;
      canvas.height = naturalHeight;
      
      ctx.drawImage(img, 0, 0);
      
      // Convert displayed coordinates to natural image coordinates
      const scaleX = naturalWidth / displayedWidth;
      const scaleY = naturalHeight / displayedHeight;
      
      const startX = Math.max(0, Math.floor(x * scaleX));
      const startY = Math.max(0, Math.floor(y * scaleY));
      const endX = Math.min(naturalWidth, Math.floor((x + width) * scaleX));
      const endY = Math.min(naturalHeight, Math.floor((y + height) * scaleY));
      
      // Ensure we have a valid sampling area
      if (endX <= startX || endY <= startY) {
        // Fallback: sample from top-left corner
        return sampleImagePixels(img, 0, 0, Math.min(50, displayedWidth), Math.min(50, displayedHeight), sampleSize);
      }
      
      // Sample pixels in a grid pattern
      const stepX = Math.max(1, Math.floor((endX - startX) / sampleSize));
      const stepY = Math.max(1, Math.floor((endY - startY) / sampleSize));
      
      let totalLuminance = 0;
      let pixelCount = 0;
      
      for (let py = startY; py < endY; py += stepY) {
        for (let px = startX; px < endX; px += stepX) {
          try {
            const imageData = ctx.getImageData(px, py, 1, 1);
            const [r, g, b] = imageData.data;
            totalLuminance += getLuminance(r, g, b);
            pixelCount++;
          } catch (e) {
            // Handle CORS or other errors gracefully - skip this pixel
            continue;
          }
        }
      }
      
      return pixelCount > 0 ? totalLuminance / pixelCount : 0.5;
    } catch (e) {
      // If CORS or other errors prevent pixel sampling, return default
      console.warn('Could not sample image pixels (possibly CORS restricted):', e.message);
      return 0.5; // Default to medium brightness
    }
  }

  /**
   * Analyze image and set text color for work-meta-row
   */
  function adjustTextColorForImage(workItem) {
    const img = workItem.querySelector('.work-image img, .pub-image img');
    const metaRow = workItem.querySelector('.work-meta-row');
    const imageContainer = workItem.querySelector('.work-image, .pub-image');
    
    if (!img) return;
    
    // Wait for image to load
    if (!img.complete || img.naturalWidth === 0) {
      img.addEventListener('load', () => adjustTextColorForImage(workItem), { once: true });
      return;
    }
    
    // Only process text colors if meta row exists
    if (!metaRow) return;
    
    // Get the position and size of the overlay relative to the image
    const imgRect = img.getBoundingClientRect();
    const metaRect = metaRow.getBoundingClientRect();
    
    // Calculate overlay position relative to image
    // Handle both cases: overlay directly on image or on image container
    let overlayX = metaRect.left - imgRect.left;
    let overlayY = metaRect.top - imgRect.top;
    
    // If overlay is positioned absolutely, it might be relative to a container
    // Check if it's positioned over the image container instead
    if (imageContainer) {
      const containerRect = imageContainer.getBoundingClientRect();
      // If meta row is positioned relative to container, adjust coordinates
      if (Math.abs(metaRect.top - containerRect.top) < Math.abs(metaRect.top - imgRect.top)) {
        overlayX = metaRect.left - containerRect.left;
        overlayY = metaRect.top - containerRect.top;
        // Adjust to image coordinates within container
        overlayX = overlayX - (imgRect.left - containerRect.left);
        overlayY = overlayY - (imgRect.top - containerRect.top);
      }
    }
    
    const overlayWidth = metaRect.width;
    const overlayHeight = metaRect.height;
    
    // Ensure coordinates are within image bounds
    overlayX = Math.max(0, overlayX);
    overlayY = Math.max(0, overlayY);
    
    // Sample the image at the overlay position
    const avgLuminance = sampleImagePixels(
      img,
      overlayX,
      overlayY,
      overlayWidth,
      overlayHeight,
      8 // Sample 8x8 grid
    );
    
    // Determine text color based on luminance
    // Threshold of 0.5: darker backgrounds (< 0.5) get white text, lighter get black
    const textColor = avgLuminance < 0.5 ? '#ffffff' : '#000000';
    
    // Apply color to text elements
    // Use inline styles which will override CSS
    const label = metaRow.querySelector('.work-label');
    const location = metaRow.querySelector('.work-location');
    const titleOverlay = workItem.querySelector('.work-title-overlay');
    const authorLabel = workItem.querySelector('.work-author-label');
    const dateLabel = workItem.querySelector('.work-date-label');
    
    if (label) {
      label.style.color = textColor;
    }
    if (location) {
      location.style.color = textColor;
    }
    
    let titleTextColor = null;
    if (titleOverlay) {
      // For title overlay at bottom, sample from bottom area of image
      const imgRect = img.getBoundingClientRect();
      const titleRect = titleOverlay.getBoundingClientRect();
      
      const overlayX = titleRect.left - imgRect.left;
      const overlayY = titleRect.top - imgRect.top;
      const overlayWidth = titleRect.width;
      const overlayHeight = titleRect.height;
      
      const titleLuminance = sampleImagePixels(
        img,
        Math.max(0, overlayX),
        Math.max(0, overlayY),
        overlayWidth,
        overlayHeight,
        8
      );
      
      titleTextColor = titleLuminance < 0.5 ? '#ffffff' : '#000000';
      titleOverlay.style.color = titleTextColor;
    }
    
    // Set author label color based on bottom right area of image
    if (authorLabel) {
      const imgRect = img.getBoundingClientRect();
      const authorRect = authorLabel.getBoundingClientRect();
      
      const overlayX = authorRect.left - imgRect.left;
      const overlayY = authorRect.top - imgRect.top;
      const overlayWidth = authorRect.width;
      const overlayHeight = authorRect.height;
      
      const authorLuminance = sampleImagePixels(
        img,
        Math.max(0, overlayX),
        Math.max(0, overlayY),
        overlayWidth,
        overlayHeight,
        8
      );
      
      const authorTextColor = authorLuminance < 0.5 ? '#ffffff' : '#000000';
      authorLabel.style.color = authorTextColor;
    }
    
    // Set date label color based on bottom right area of image
    if (dateLabel) {
      const imgRect = img.getBoundingClientRect();
      const dateRect = dateLabel.getBoundingClientRect();
      
      const overlayX = dateRect.left - imgRect.left;
      const overlayY = dateRect.top - imgRect.top;
      const overlayWidth = dateRect.width;
      const overlayHeight = dateRect.height;
      
      const dateLuminance = sampleImagePixels(
        img,
        Math.max(0, overlayX),
        Math.max(0, overlayY),
        overlayWidth,
        overlayHeight,
        8
      );
      
      const dateTextColor = dateLuminance < 0.5 ? '#ffffff' : '#000000';
      dateLabel.style.color = dateTextColor;
    }
    
    // Determine overlay type based on work-label text color
    // White text = dark image = needs to darken further (dark overlay)
    // Black text = light image = needs to lighten further (white overlay)
    workItem.classList.remove('has-white-text', 'has-black-text');
    if (textColor === '#ffffff') {
      workItem.classList.add('has-black-text'); // Dark image, needs dark overlay
    } else {
      workItem.classList.add('has-white-text'); // Light image, needs white overlay
    }
  }

  /**
   * Process all work items with images
   */
  function processAllWorkItems() {
    // Find all work items that have images and meta rows
    const workItems = document.querySelectorAll(
      '.work-grid-item, .work-item, [data-type="project"], [data-type="pub"], [data-type="presentation"]'
    );
    
    workItems.forEach(item => {
      const hasImage = item.querySelector('.work-image img, .pub-image img');
      const hasMetaRow = item.querySelector('.work-meta-row');
      
      if (hasImage && hasMetaRow) {
        // Small delay to ensure layout is complete
        setTimeout(() => {
          adjustTextColorForImage(item);
        }, 50);
      }
    });
  }

  /**
   * Initialize when DOM is ready
   */
  function init() {
    // Process immediately if images are already loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', processAllWorkItems);
    } else {
      processAllWorkItems();
    }
    
    // Also handle dynamically loaded content (e.g., filtered results)
    let mutationTimeout;
    const observer = new MutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(processAllWorkItems, 100);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Re-process on window resize (in case layout changes affect positioning)
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(processAllWorkItems, 250);
    });
  }

  // Start the script
  init();
})();

