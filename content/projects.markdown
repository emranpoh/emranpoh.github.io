---
layout: masonry
title: projects
permalink: /projects/
id: projs
---

<div class="pubs-list" style="margin:0 auto;">
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
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var homeLink = document.querySelector('a.nav-link[href="/"]');
  var container = document.getElementById('main-container');
  var mainContent = document.getElementById('main-content');
  if (homeLink && container && mainContent) {
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      container.style.transition = 'all 0.3s ease';
      mainContent.style.transition = 'opacity 0.3s ease';
      container.style.pointerEvents = 'none';
      mainContent.style.opacity = '0';
      setTimeout(function() {
        window.location = homeLink.href;
      }, 300);
    });
  }
});
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.pubs-list');
  if (grid) {
    new Masonry(grid, {
      itemSelector: '.pub-item',
      columnWidth: '.pub-item',
      percentPosition: true,
      gutter: 16,
      transitionDuration: 0
    });
  }
});
</script>