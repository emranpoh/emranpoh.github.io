---
layout: default
title: Projects
permalink: /projects/
---

# Projects

<!-- <div class="filter-controls">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="2023">2023</button>
  <button class="filter-btn" data-filter="2022">2022</button>
  <button class="filter-btn" data-filter="2021">2021</button>
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
    ></div>
    <div class="project-tags">
      {% for tag in project.tags %}
      <a href="{{ tag.url | relative_url }}" class="tag-link">
        <span class="tag" data-tag="{{ tag.name }}">{{ tag.name }}</span>
      </a>
      {% endfor %}
    </div>
    <h2 class="project-title">{{ project.title }}</h2>
    {% if project.year %}
    <div class="project-year">{{ project.year }}</div>
    {% endif %}
  </div>
  {% endfor %}
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