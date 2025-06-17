---
layout: masonry
title: projects
permalink: /projects/
id: projs
---

<div class="projects-grid" style="margin:0 auto;">
{% for project in site.data.projects %}
  <div class="project-card" data-year="{{ project.year }}" title="{{ project.description }}">
    <a href="{{ project.url | relative_url }}" class="project-link">
      <div class="selected-project-card-bg-image" 
        {% if project.image contains 'placeholder' %}
          style="background-image: url('https://via.placeholder.com/400x300?text=Project+Image'); background-size: cover; background-position: center;"
        {% else %}
          style="background-image: url('{{ '/assets/images/projects/' | append: project.image | relative_url }}'); background-size: cover; background-position: center;"
        {% endif %}
      >
        <span class="project-type-tag tag-overlay">
          {% if project.projtype == 'pub'%}
            pdf
          {% elsif project.projtype == 'presentation'%}
            🗣️
          {% elsif project.projtype == 'art'%}
            🖼️
          {% elsif project.projtype == 'research'%}
            🧪
          {% elsif project.projtype == 'blog'%}
            <i class="fa fa-pencil"></i>
          {% else %}
            {{ project.projtype }}
          {% endif %}
        </span>
      </div>
      <div class="card-text">
        <div class="selected-project-card-title">
          <h3 class="project-title">{{ project.title }}</h3>
          {% if project.tags %}
            <div class="project-tags">
              {% for tag in project.tags %}
                <a href="{{ tag.url | relative_url }}" class="tag-link">
                  <span class="tag" data-tag="{{ tag.name }}">
                    {% if tag.name == 'pub' or tag.type == 'pub' %}
                      📄
                    {% elsif tag.name == 'web' or tag.type == 'web' %}
                      🌐
                    {% elsif tag.name == 'project' or tag.type == 'project' %}
                      <i class="fa fa-code"></i>
                    {% elsif tag.name == 'workshop' or tag.type == 'workshop' %}
                      <i class="fa fa-users"></i>
                    {% elsif tag.name == 'blog' or tag.type == 'blog' %}
                      <i class="fa fa-pencil"></i>
                    {% else %}
                      {{ tag.name }}
                    {% endif %}
                  </span>
                </a>
              {% endfor %}
            </div>
          {% endif %}
        </div>
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
  var grid = document.querySelector('.projects-grid');
  if (grid) {
    new Masonry(grid, {
      itemSelector: '.project-card',
      columnWidth: '.project-card',
      percentPosition: true,
      gutter: 16,
      transitionDuration: 0
    });
  }
});
</script>