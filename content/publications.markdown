---
layout: masonry
title: publications
permalink: /publications/
id: pubs
---

<div class="pubs-list" style="margin:0 auto;">
{% if site.data.pubs %}
  {% assign sorted_publications = site.data.pubs | sort: 'year' | reverse %}
  {% for pub in sorted_publications %}
  <div class="pub-item">
     <a href="{{ pub.url | relative_url }}" class="pub-image-link">
        <div class="pub-image">
           {% if pub.images %}
           <div class="pub-image-gallery">
             {% for image in pub.images limit:4 %}
             <img src="{{ '/assets/images/projects/' | append: image | relative_url }}" alt="{{ pub.title }}">
             {% endfor %}
           </div>
           {% elsif pub.image %}
           <img src="{{ '/assets/images/projects/' | append: pub.image | relative_url }}" alt="{{ pub.title }}">
           {% else %}
           <div class="placeholder-image"></div>
           {% endif %}
        </div>
     </a>
     <a href="{{ pub.url | relative_url }}" class="pub-content">
        <div class="pub-header">
           <div class="pub-title">{{ pub.title }}</div>
           <p class="pub-authors">
             {% assign author_list = pub.authors | split: ',' %}
             {% assign first_author = author_list[0] | strip %}
             {% if author_list.size > 1 %}
               {{ first_author | split: ' ' | last }} et al.
             {% else %}
               {{ first_author | split: ' ' | last }}
             {% endif %}
           </p>
           <p class="pub-venue">{{ pub.venue_short }} {{ pub.year }}</p>
        </div>
     </a>
  </div>
  {% endfor %}
{% else %}
  <p>No pubs available.</p>
{% endif %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const copyTriggers = document.querySelectorAll('.copy-trigger');
  
  copyTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const citation = this.getAttribute('data-citation');
      navigator.clipboard.writeText(citation)
        .then(() => {
          // Visual feedback
          this.classList.add('copied');
          setTimeout(() => {
            this.classList.remove('copied');
          }, 1500);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
   const filterButtons = document.querySelectorAll('.filter-btn');
   const pubs = document.querySelectorAll('.pub-item');
   
   filterButtons.forEach(button => {
   button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterButtons.forEach(btn => {
         btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter pubs
      pubs.forEach(project => {
         if (filter === 'all' || project.getAttribute('data-year') === filter) {
         project.style.display = 'flex';
         } else {
         project.style.display = 'none';
         }
      });
   });
   });
});

document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.pubs-list');
  if (grid) {
    new Masonry(grid, {
      itemSelector: '.pub-item',
      columnWidth: '.pub-item',
      percentPosition: true,
      gutter: 16
    });
  }
});
</script>