---
layout: masonry
title: Works
permalink: /works/
id: works
---

<div class="works-content-wrapper">
  <div class="works-nav-container" style="display: none;">
    <div class="works-nav-buttons">
      <button class="works-nav-button active" data-filter="all">All</button>
      <button class="works-nav-button" data-filter="project">Projects</button>
      <button class="works-nav-button" data-filter="pub">Publications</button>
      <button class="works-nav-button" data-filter="presentation">Presentations</button>
      <button class="works-nav-button" data-filter="teaching">Teaching</button>
    </div>
  </div>

  <div class="pubs-list" style="margin:0 auto;">
  {% comment %} Grid item for Masonry to measure column width {% endcomment %}
  <div class="grid-sizer"></div>
  
  {% comment %} Render publications {% endcomment %}
  {% for pub in site.data.pubs %}
    {% assign author_list = pub.authors | split: ',' %}
    {% assign first_author = author_list[0] | strip %}
    {% if first_author contains 'Emran Poh' %}
      {% comment %} Determine label type {% endcomment %}
      {% if pub.type contains 'Poster' %}
        {% assign work_label = 'Poster' %}
      {% elsif pub.type contains 'Position' %}
        {% assign work_label = 'Position' %}
      {% else %}
        {% assign work_label = 'Paper' %}
      {% endif %}
      
      {% comment %} Determine location - for publications, show only venue_short without suffixes {% endcomment %}
      {% if pub.venue_short %}
        {% assign work_location = pub.venue_short | split: '-' | first %}
        {% if work_location == 'HCI' %}
          {% assign work_location = 'HCII' %}
        {% endif %}
        {% if pub.year %}
          {% assign year_str = pub.year | append: '' %}
          {% assign year_short = year_str | slice: -2, 2 %}
          {% assign work_location = work_location | append: ' ' | append: year_short %}
        {% endif %}
      {% else %}
        {% assign work_location = '' %}
      {% endif %}
      
      <div class="work-item" data-type="pub">
        <div class="pub-image-link">
          <div class="pub-image">
            {% if pub.image %}
            <img src="{{ '/assets/images/projects/' | append: pub.image | relative_url }}" alt="{{ pub.title }}">
            {% else %}
            <div class="placeholder-image"></div>
            {% endif %}
            {% if work_label != '' or work_location != '' %}
            <div class="work-meta-row">
              {% if work_label != '' %}
              <span class="work-label">{{ work_label }}</span>
              {% endif %}
              {% if work_location != '' %}
              <span class="work-location">{{ work_location }}</span>
              {% endif %}
            </div>
            {% endif %}
            {% assign author_list = pub.authors | split: ',' %}
            {% if author_list.size > 1 %}
              {% assign first_author = author_list[0] | strip %}
              {% assign last_name = first_author | split: ' ' | last %}
              <div class="work-author-label">{{ last_name }} et al.</div>
            {% endif %}
          </div>
        </div>
        <div class="pub-content">
          <div class="pub-header">
            <div class="pub-title">{{ pub.title }}</div>
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
  
  {% comment %} Render projects {% endcomment %}
  {% for project in site.data.projects %}
    {% comment %} Skip teaching-related projects and coursework projects {% endcomment %}
    {% if project.url == '/projects/minecraft-coding' or project.label == 'COURSEWORK' %}
      {% continue %}
    {% endif %}
    
    {% if project.label %}
      {% assign work_label = project.label %}
    {% else %}
      {% assign work_label = '' %}
    {% endif %}
    {% if project.label == 'COURSEWORK' and project.university %}
      {% assign work_location = project.university %}
    {% elsif project.location %}
      {% assign work_location = project.location %}
    {% else %}
      {% assign work_location = '' %}
    {% endif %}
    {% if work_location == 'University Town, NUS' %}
      {% assign work_location = 'UTown, NUS' %}
    {% endif %}
    
    <div class="work-item" data-type="project">
      <div class="pub-image-link">
        <div class="pub-image">
          {% if project.image %}
          <img src="{{ '/assets/images/projects/' | append: project.image | relative_url }}" alt="{{ project.title }}">
          {% else %}
          <div class="placeholder-image"></div>
          {% endif %}
          {% if work_label != '' or work_location != '' %}
          <div class="work-meta-row">
            {% if work_label != '' %}
            <span class="work-label">{{ work_label }}</span>
            {% endif %}
            {% if work_location != '' %}
            <span class="work-location">{{ work_location }}</span>
            {% endif %}
          </div>
          {% endif %}
        </div>
      </div>
      <div class="pub-content">
        <div class="pub-header">
          <div class="pub-title">{{ project.title }}</div>
          {% unless project.label == 'COURSEWORK' %}
          {% if project.subtitle %}
          <div class="pub-meta">{{ project.subtitle }}</div>
          {% endif %}
          {% if project.role %}
          <div class="pub-meta">{{ project.role }}</div>
          {% endif %}
          {% if project.location %}
            {% assign display_location = project.location %}
            {% if display_location == 'University Town, NUS' %}
              {% assign display_location = 'UTown, NUS' %}
            {% endif %}
          <div class="pub-meta">{{ display_location }}</div>
          {% endif %}
          {% endunless %}
        </div>
      </div>
    </div>
  {% endfor %}
  
  {% comment %} Render presentations {% endcomment %}
  {% for pres in site.data.presentations.presentations %}
    {% assign work_label = 'Talk' %}
    
    {% comment %} Determine location {% endcomment %}
    {% if pres.type == 'conference' %}
      {% comment %} For conferences, show event name before location {% endcomment %}
      {% if pres.location %}
        {% assign pres_location = pres.location %}
        {% if pres_location == 'University Town, NUS' %}
          {% assign pres_location = 'UTown, NUS' %}
        {% endif %}
        {% assign work_location = pres.event | append: ', ' | append: pres_location %}
      {% else %}
        {% assign work_location = pres.event %}
      {% endif %}
    {% elsif pres.location %}
      {% assign work_location = pres.location %}
      {% if work_location == 'University Town, NUS' %}
        {% assign work_location = 'UTown, NUS' %}
      {% endif %}
    {% elsif pres.institution == 'nus-hci' %}
      {% assign work_location = 'NUS' %}
    {% else %}
      {% assign work_location = '' %}
    {% endif %}
    
    <div class="work-item" data-type="presentation">
      <div class="pub-image-link">
        <div class="pub-image">
          {% if pres.image %}
            <img src="{{ '/assets/images/projects/' | append: pres.image | relative_url }}" alt="{{ pres.title }}">
          {% else %}
            <div class="placeholder-image"></div>
          {% endif %}
          {% if work_label != '' or work_location != '' %}
          <div class="work-meta-row">
            {% if work_label != '' %}
            <span class="work-label">{{ work_label }}</span>
            {% endif %}
            {% if work_location != '' %}
            <span class="work-location">{{ work_location }}</span>
            {% endif %}
          </div>
          {% endif %}
        </div>
      </div>
      <div class="pub-content">
        <div class="pub-header">
          <div class="pub-title">{{ pres.title }}</div>
          <div class="pub-meta">{{ pres.event }}{% if pres.date %}, {{ pres.date | date: '%b %Y' }}{% endif %}</div>
          <div class="pub-meta">{{ pres.description }}</div>
        </div>
      </div>
    </div>
  {% endfor %}
  
  {% comment %} Render teaching {% endcomment %}
  {% if site.data.cv.teaching %}
    {% assign sorted_teaching = site.data.cv.teaching | sort: 'year' | reverse %}
    {% for teaching in sorted_teaching %}
      {% assign work_label = 'Teaching' %}
      
      {% comment %} Determine location {% endcomment %}
      {% if teaching.organization %}
        {% if teaching.organization == 'School of Computing, NUS, SG' %}
          {% assign work_location = 'SoC, NUS' %}
        {% elsif teaching.organization == 'Center for Immersification, SIT, SG' %}
          {% assign work_location = 'SIT' %}
        {% else %}
          {% assign work_location = teaching.organization %}
        {% endif %}
      {% else %}
        {% assign work_location = '' %}
      {% endif %}
      
      <div class="work-item" data-type="teaching">
        <div class="pub-image-link">
          <div class="pub-image">
            <div class="placeholder-image"></div>
            {% if work_label != '' or work_location != '' %}
            <div class="work-meta-row">
              {% if work_label != '' %}
              <span class="work-label">{{ work_label }}</span>
              {% endif %}
              {% if work_location != '' %}
              <span class="work-location">{{ work_location }}</span>
              {% endif %}
            </div>
            {% endif %}
          </div>
        </div>
        <div class="pub-content">
          <div class="pub-header">
            <div class="pub-title">{{ teaching.course }}</div>
            <div class="pub-meta">{{ teaching.role }}{% if teaching.term %}, {{ teaching.term }} {{ teaching.year }}{% elsif teaching.year %}, {{ teaching.year }}{% endif %}</div>
            {% if teaching.description %}
            <div class="pub-meta">{{ teaching.description }}</div>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  {% endif %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.works-nav-button');
  const items = document.querySelectorAll('.work-item');
  var msnry;

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
        // Use grid-sizer element for consistent column width measurement
        msnry = new Masonry(grid, {
          itemSelector: '.work-item',
          columnWidth: '.grid-sizer',
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
      
      // Step 1: Hide all items immediately
      items.forEach(item => {
        item.style.display = 'none';
        item.style.opacity = '0';
      });
      
      // Step 2: Determine visible items
      const visibleItems = Array.from(items).filter(item => 
        filter === 'all' || item.getAttribute('data-type') === filter
      );
      
      // Step 3: Wait a brief moment, then show all filtered items at once
      setTimeout(() => {
        // Show all filtered items
        visibleItems.forEach(item => {
          item.style.display = 'block';
        });
        
        // Re-layout masonry first
        if (msnry) {
          msnry.layout();
          
          // Wait for masonry to finish, then fade in all items together
          setTimeout(() => {
            visibleItems.forEach(item => {
              item.style.transition = 'opacity 0.3s ease';
              item.style.opacity = '1';
            });
          }, 50);
        } else {
          // If no masonry, just fade in immediately
          visibleItems.forEach(item => {
            item.style.transition = 'opacity 0.3s ease';
            item.style.opacity = '1';
          });
        }
      }, 100);
    });
  });

  window.addEventListener('resize', function() {
    initMasonry();
    if (msnry) {
      msnry.layout();
    }
  });
});
</script>

<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>

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