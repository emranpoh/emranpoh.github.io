---
layout: default
title: projects
permalink: /projects/
---

<div class="content-gallery">

  <!-- <div class="filter-controls">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="2025">2025</button>
    <button class="filter-btn" data-filter="2024">2024</button>
  </div> -->

  <div class="projects-grid">
    {% assign sorted_projects = site.data.projects | sort: 'year' | reverse %}
    {% for project in sorted_projects %}
    <div class="project-card" data-year="{{ project.year }}" title="{{ project.description }}">
      <div class="project-image" 
        {% if project.image contains 'placeholder' %}
          style="background-image: url('https://via.placeholder.com/400x300?text=Project+Image'); background-size: cover; background-position: center;"
        {% else %}
          style="background-image: url('{{ '/assets/images/projects/' | append: project.image | relative_url }}'); background-size: cover; background-position: center;"
        {% endif %}
      >
        <span class="projtype-tag tag-overlay">
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
      {% if project.tags %}
        <div class="project-tags">
          {% for tag in project.tags %}
            {% unless tag.name == 'talk' or tag.type == 'talk' %}
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
            {% endunless %}
          {% endfor %}
        </div>
      {% else %}
      <div style="height:16px;"></div>
      {% endif %}
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-subtitle">{{ project.subtitle }}</p>
      <!-- {% if project.year %}
      <div class="project-year">{{ project.year }}</div>
      {% endif %} -->
    </div>
    {% endfor %}
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter projects
        projects.forEach(project => {
          if (filter === 'all' || project.getAttribute('data-year') === filter) {
            project.style.display = 'flex';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  });
</script>