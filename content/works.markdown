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
    column-count: 2;
    column-gap: 10px;
    display: block !important;
  }
  .pub-item {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
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
  </div>
</div>

<div class="pubs-list" style="margin:0 auto;">
  {% comment %} Create a combined list and sort by date {% endcomment %}
  {% assign all_items = '' | split: '' %}
  
  {% comment %} Add news items {% endcomment %}
  {% for news_item in site.data.news.news_items limit: 10 %}
    {% assign item = news_item %}
    {% assign item = item | merge: hash: 'item_type', 'news' %}
    {% assign item = item | merge: hash: 'sort_date', news_item.date %}
    {% assign all_items = all_items | push: item %}
  {% endfor %}
  
  {% comment %} Add publications {% endcomment %}
  {% for pub in site.data.pubs %}
    {% assign author_list = pub.authors | split: ',' %}
    {% assign first_author = author_list[0] | strip %}
    {% if first_author contains 'Emran Poh' %}
      {% assign item = pub %}
      {% assign item = item | merge: hash: 'item_type', 'pub' %}
      {% assign item = item | merge: hash: 'sort_date', pub.year | append: '-12-31' %}
      {% assign all_items = all_items | push: item %}
    {% endif %}
  {% endfor %}
  
  {% comment %} Add projects {% endcomment %}
  {% for project in site.data.projects %}
    {% assign item = project %}
    {% assign item = item | merge: hash: 'item_type', 'project' %}
    {% assign item = item | merge: hash: 'sort_date', project.year | append: '-12-31' %}
    {% assign all_items = all_items | push: item %}
  {% endfor %}
  
  {% comment %} Add presentations {% endcomment %}
  {% for pres in site.data.others.presentations %}
    {% assign item = pres %}
    {% assign item = item | merge: hash: 'item_type', 'presentation' %}
    {% assign item = item | merge: hash: 'sort_date', pres.date %}
    {% assign all_items = all_items | push: item %}
  {% endfor %}
  
  {% comment %} Sort all items by date (newest first) {% endcomment %}
  {% assign sorted_items = all_items | sort: 'sort_date' | reverse %}
  
  {% comment %} Render all items in chronological order {% endcomment %}
  {% for item in sorted_items %}
    {% if item.item_type == 'news' %}
      <div class="pub-item" data-type="news">
        {% if item.image %}
        <a href="{{ item.link | default: '#' }}" class="pub-image-link">
          <div class="pub-image">
            <img src="{{ '/assets/images/projects/' | append: item.image | relative_url }}" alt="{{ item.title }}">
          </div>
        </a>
        {% endif %}
        <div class="pub-content">
          <div class="pub-header">
            <div class="pub-title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    {% elsif item.item_type == 'pub' %}
      <div class="pub-item" data-type="pub">
        <a href="{{ item.url | relative_url }}" class="pub-image-link">
          <div class="pub-image">
            {% if item.image %}
            <img src="{{ '/assets/images/projects/' | append: item.image | relative_url }}" alt="{{ item.title }}">
            {% else %}
            <div class="placeholder-image"></div>
            {% endif %}
          </div>
        </a>
        <a href="{{ item.url | relative_url }}" class="pub-content">
          <div class="pub-header">
            <div class="pub-meta">
              {{ item.venue_short }} {{ item.year }}
            </div>
          </div>
        </a>
      </div>
    {% elsif item.item_type == 'project' %}
      <div class="pub-item" data-type="project">
        <a href="{{ item.url | relative_url }}" class="pub-image-link">
          <div class="pub-image">
            {% if item.image %}
            <img src="{{ '/assets/images/projects/' | append: item.image | relative_url }}" alt="{{ item.title }}">
            {% else %}
            <div class="placeholder-image"></div>
            {% endif %}
          </div>
        </a>
        <a href="{{ item.url | relative_url }}" class="pub-content">
          <div class="pub-header">
            <div class="pub-title">{{ item.title }}</div>
            {% if item.subtitle %}
            <div class="pub-meta">{{ item.subtitle }}</div>
            {% endif %}
            {% if item.role %}
            <div class="pub-meta">{{ item.role }}</div>
            {% endif %}
            {% if item.location %}
            <div class="pub-meta">{{ item.location }}</div>
            {% endif %}
          </div>
        </a>
      </div>
    {% elsif item.item_type == 'presentation' %}
      <div class="pub-item" data-type="presentation">
        <a href="{{ item.link | default: '#' }}" class="pub-image-link">
          <div class="pub-image">
            {% if item.image %}
              <img src="{{ '/assets/images/projects/' | append: item.image | relative_url }}" alt="{{ item.title }}">
            {% else %}
              <div class="placeholder-image"></div>
            {% endif %}
          </div>
        </a>
        <div class="pub-content">
          <div class="pub-header">
            <div class="pub-title">{{ item.title }}</div>
            <div class="pub-meta">{{ item.event }}{% if item.date %}, {{ item.date | date: '%b %Y' }}{% endif %}</div>
            <div class="pub-meta">{{ item.description }}</div>
          </div>
        </div>
      </div>
    {% endif %}
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
  if (grid && window.innerWidth > 768) {
    imagesLoaded(grid, function() {
      msnry = new Masonry(grid, {
        itemSelector: '.pub-item',
        columnWidth: getColumnWidth(),
        percentPosition: false,
        gutter: 16
      });
    });
  }

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