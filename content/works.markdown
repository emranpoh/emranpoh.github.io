---
layout: masonry
title: Works
permalink: /works/
id: works
---

<style>
.works-nav-container {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  padding: 0 0 1rem 0;
  margin-bottom: 1rem;
  /* border-bottom: 1px solid #e5e7eb; */
}

.works-nav-buttons {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
}

.works-nav-button {
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: #4b5563;
  background: #f3f4f6;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.works-nav-button:hover {
  background: #e5e7eb;
  color: #1f2937;
}

.works-nav-button.active {
  background: #2563eb;
  color: white;
}

.pub-item {
  display: block;
}

.pub-image-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.pub-image-link:hover {
  text-decoration: none;
}

.pub-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.pub-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.2s ease;
  border-radius: 16px;
}

.pub-image-link:hover .pub-image::after {
  background: rgba(0, 0, 0, 0.2);
}

.pub-content {
  text-decoration: none !important;
  color: inherit;
  display: block;
  padding: 8px;
}

.pub-content:hover {
  text-decoration: none !important;
}

.pub-header {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-decoration: none !important;
}

.pub-header:hover {
  text-decoration: none !important;
}

  .pub-title {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none !important;
  }
  
  .pub-item[data-type="news"] .pub-title {
    font-weight: 400;
  }
  
  .pub-date {
    font-size: 11px;
    color: #999;
    line-height: 1.2;
    margin-bottom: 4px;
    text-decoration: none !important;
  }

.pub-meta {
  font-size: 12px;
  color: #666;
  line-height: 1.2;
  text-decoration: none !important;
}

.pub-content:hover .pub-title,
.pub-content:hover .pub-meta {
  color: #2563eb;
  text-decoration: none !important;
}

/* Hide scrollbar by default */
* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
  display: none;
}

/* Show scrollbar only when scrolling */
.scrolling::-webkit-scrollbar {
  display: block;
  width: 4px;
}

.scrolling::-webkit-scrollbar-track {
  background: transparent;
}

.scrolling::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 2px;
}

.scrolling::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}

/* Prevent horizontal scroll */
.pubs-list {
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.pub-item {
  width: calc(20% - 13px);
  margin-right: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  background: #fff;
  border-radius: 16px;
}

.pub-item:nth-child(5n) {
  margin-right: 0;
}

.nav-block, .nav-links-section, .nav-buttons {
  margin: 0px !important;
}

.nav-link:hover {
  color: #222 !important;
  background: #f1f3f5;
  text-decoration: none !important;
  transform: none !important;
}

.placeholder-image {
  width: 100%;
  height: 140px;
  background: #f8f8f8;
  border-radius: 16px;
  display: block;
}

@media (max-width: 768px) {
  .pubs-list {
    column-count: 2 !important;
    column-gap: 10px !important;
    display: block !important;
    /* Reset any masonry positioning */
    position: static !important;
    height: auto !important;
  }
  .pub-item {
    display: inline-block !important;
    width: 100% !important;
    margin-bottom: 10px !important;
    break-inside: avoid !important;
    page-break-inside: avoid !important;
    /* Reset any masonry positioning */
    position: static !important;
    left: auto !important;
    top: auto !important;
    transform: none !important;
  }
  .pub-image,
  .pub-image img {
    width: 100%;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    display: block;
  }
  .pub-item:not([data-type="pub"]) .pub-header,
  .pub-item:not([data-type="pub"]) .pub-meta {
    display: none !important;
  }
}
</style>

<div class="works-nav-container">
  <div class="works-nav-buttons">
    <button class="works-nav-button active" data-filter="all">All</button>
    <button class="works-nav-button" data-filter="project">Projects</button>
    <button class="works-nav-button" data-filter="pub">Publications</button>
    <button class="works-nav-button" data-filter="news">News</button>
    <button class="works-nav-button" data-filter="presentation">Presentations</button>
  </div>
</div>

<div class="pubs-list" style="margin:0 auto;">
  {% comment %} Render news items {% endcomment %}
  {% for news_item in site.data.news.news_items limit: 10 %}
    <div class="pub-item" data-type="news">
      {% if news_item.image %}
      <a href="{{ news_item.link | default: '#' }}" class="pub-image-link">
        <div class="pub-image">
          <img src="{{ '/assets/images/projects/' | append: news_item.image | relative_url }}" alt="{{ news_item.title }}">
        </div>
      </a>
      {% endif %}
      <div class="pub-content">
        <div class="pub-header">
          <div class="pub-date">{{ news_item.date | date: '%b %Y' }}</div>
          <div class="pub-title">{{ news_item.title }}</div>
        </div>
      </div>
    </div>
  {% endfor %}
  
  {% comment %} Render publications {% endcomment %}
  {% for pub in site.data.pubs %}
    {% assign author_list = pub.authors | split: ',' %}
    {% assign first_author = author_list[0] | strip %}
    {% if first_author contains 'Emran Poh' %}
      <div class="pub-item" data-type="pub">
        <a href="{{ pub.url | relative_url }}" class="pub-image-link">
          <div class="pub-image">
            {% if pub.image %}
            <img src="{{ '/assets/images/projects/' | append: pub.image | relative_url }}" alt="{{ pub.title }}">
            {% else %}
            <div class="placeholder-image"></div>
            {% endif %}
          </div>
        </a>
        <a href="{{ pub.url | relative_url }}" class="pub-content">
          <div class="pub-header">
            <div class="pub-title">{{ pub.title }}</div>
            <div class="pub-meta">
              {{ pub.venue_short }} {{ pub.year }}
            </div>
          </div>
        </a>
      </div>
    {% endif %}
  {% endfor %}
  
  {% comment %} Render projects {% endcomment %}
  {% for project in site.data.projects %}
    <div class="pub-item" data-type="project">
      <a href="{{ project.url | relative_url }}" class="pub-image-link">
        <div class="pub-image">
          {% if project.image %}
          <img src="{{ '/assets/images/projects/' | append: project.image | relative_url }}" alt="{{ project.title }}">
          {% else %}
          <div class="placeholder-image"></div>
          {% endif %}
        </div>
      </a>
      <a href="{{ project.url | relative_url }}" class="pub-content">
        <div class="pub-header">
          <div class="pub-title">{{ project.title }}</div>
          {% if project.subtitle %}
          <div class="pub-meta">{{ project.subtitle }}</div>
          {% endif %}
          {% if project.role %}
          <div class="pub-meta">{{ project.role }}</div>
          {% endif %}
          {% if project.location %}
          <div class="pub-meta">{{ project.location }}</div>
          {% endif %}
        </div>
      </a>
    </div>
  {% endfor %}
  
  {% comment %} Render presentations {% endcomment %}
  {% for pres in site.data.presentations.presentations %}
    <div class="pub-item" data-type="presentation">
      <a href="{{ pres.link | default: '#' }}" class="pub-image-link">
        <div class="pub-image">
          {% if pres.image %}
            <img src="{{ '/assets/images/projects/' | append: pres.image | relative_url }}" alt="{{ pres.title }}">
          {% else %}
            <div class="placeholder-image"></div>
          {% endif %}
        </div>
      </a>
      <div class="pub-content">
        <div class="pub-header">
          <div class="pub-title">{{ pres.title }}</div>
          <div class="pub-meta">{{ pres.event }}{% if pres.date %}, {{ pres.date | date: '%b %Y' }}{% endif %}</div>
          <div class="pub-meta">{{ pres.description }}</div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.works-nav-button');
  const items = document.querySelectorAll('.pub-item');
  var msnry;

  function getColumnWidth() {
    var containerWidth = grid.offsetWidth;
    var gutter = 16;
    var columns = 5;
    return (containerWidth - gutter * (columns - 1)) / columns;
  }

  var grid = document.querySelector('.pubs-list');
  
  // Only initialize masonry on desktop, and ensure it doesn't interfere on mobile
  function initMasonry() {
    if (window.innerWidth > 768 && grid) {
      // Destroy existing masonry instance if it exists
      if (msnry) {
        msnry.destroy();
        msnry = null;
      }
      
      imagesLoaded(grid, function() {
        msnry = new Masonry(grid, {
          itemSelector: '.pub-item',
          columnWidth: getColumnWidth(),
          percentPosition: false,
          gutter: 16
        });
      });
    } else if (window.innerWidth <= 768 && msnry) {
      // Destroy masonry on mobile to prevent interference with CSS columns
      msnry.destroy();
      msnry = null;
    }
  }
  
  // Initialize masonry
  initMasonry();

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-type') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      // Re-layout masonry after filtering
      if (msnry) {
        msnry.layout();
      }
    });
  });

  window.addEventListener('resize', function() {
    initMasonry();
    if (msnry) {
      msnry.options.columnWidth = getColumnWidth();
      msnry.layout();
    }
  });
});
</script>

<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.pubs-list');
  if (grid && window.innerWidth > 768) {
    function getColumnWidth() {
      var containerWidth = grid.offsetWidth;
      var gutter = 16;
      var columns = 5;
      return (containerWidth - gutter * (columns - 1)) / columns;
    }
    var msnry;
    imagesLoaded(grid, function() {
      msnry = new Masonry(grid, {
        itemSelector: '.pub-item',
        columnWidth: getColumnWidth(),
        percentPosition: false,
        gutter: 16
      });
    });
    window.addEventListener('resize', function() {
      if (msnry) {
        msnry.options.columnWidth = getColumnWidth();
        msnry.layout();
      }
    });
  }
});
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.pubs-list');
  let isScrolling;
  let scrollTimeout;

  container.addEventListener('scroll', function() {
    container.classList.add('scrolling');
    clearTimeout(scrollTimeout);
    
    // Smooth scroll animation
    requestAnimationFrame(() => {
      container.style.scrollBehavior = 'smooth';
    });
    
    scrollTimeout = setTimeout(function() {
      container.classList.remove('scrolling');
      container.style.scrollBehavior = 'auto';
    }, 1000);
  });
});
</script> 