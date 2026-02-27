// Deterministic SVG selector for placeholder images based on title hash
document.addEventListener('DOMContentLoaded', function() {
  // Placeholder SVGs in assets/images/projects/ (use only those that exist)
  const placeholderSvgs = [
    'placeholder-1.svg',
    'placeholder-2.svg'
  ];
  
  // Get the path to assets (works with or without baseurl)
  const assetsPath = '/assets/images/projects/';
  
  // Simple hash function to convert string to number
  function hashString(str) {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }
  
  // Find all placeholder-image divs
  const placeholderImages = document.querySelectorAll('.placeholder-image');
  
  placeholderImages.forEach(function(placeholder) {
    // Skip if already has an SVG (prevents duplicates)
    if (placeholder.querySelector('.placeholder-svg')) {
      return;
    }
    
    // Try to find the title from various possible locations
    let title = '';
    
    // Look for title in parent pub-item
    const pubItem = placeholder.closest('.pub-item');
    if (pubItem) {
      const titleElement = pubItem.querySelector('.pub-title');
      if (titleElement) {
        title = titleElement.textContent.trim();
      }
    }
    
    // Look for title in work-image parent (selected works)
    const workImage = placeholder.closest('.work-image');
    if (workImage && !title) {
      const titleElement = workImage.querySelector('.work-title-overlay');
      if (titleElement) {
        title = titleElement.textContent.trim();
      }
    }
    
    // Look for title in publication-detail (individual research page hero)
    const publicationDetail = placeholder.closest('.publication-detail');
    if (publicationDetail && !title) {
      const titleElement = publicationDetail.querySelector('.pub-title');
      if (titleElement) {
        title = titleElement.textContent.trim();
      }
    }
    
    // Look for title in nearby elements
    if (!title) {
      const parent = placeholder.parentElement;
      if (parent) {
        const titleElement = parent.querySelector('.pub-title, .work-title-overlay, h3, .pub-compact-title');
        if (titleElement) {
          title = titleElement.textContent.trim();
        }
      }
    }
    
    // Fallback: use a default if no title found
    if (!title) {
      title = 'default';
    }
    
    // Hash the title and map to one of the 5 SVGs
    const hash = hashString(title);
    const svgIndex = hash % placeholderSvgs.length;
    const selectedSvg = placeholderSvgs[svgIndex];
    
    // Create img element for the SVG
    const svgImg = document.createElement('img');
    svgImg.src = assetsPath + selectedSvg;
    svgImg.alt = '';
    svgImg.className = 'placeholder-svg';
    
    // Handle error if SVG doesn't exist (silently fail)
    svgImg.onerror = function() {
      this.style.display = 'none';
    };
    
    // Append SVG to placeholder div
    placeholder.appendChild(svgImg);
  });
});
