---
layout: default
title: projects
permalink: /projects/
id: projs
---

<div class="content-gallery">
  <div class="projects-grid">
    {% for project in site.data.projects %}
    <div class="project-card" data-year="{{ project.year }}" title="{{ project.description }}">
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
      <div>
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
        {% endif %}
        <div style="display: flex; flex-direction: column; align-items: flex-start;">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-subtitle">{{ project.subtitle }}</p>
        </div>
      </div>
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