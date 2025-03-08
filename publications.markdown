---
layout: default
title: publications
permalink: /publications/
---

<div class="content-block">

   <h1>publications</h1>

   <!-- <div class="filter-controls">
   <button class="filter-btn active" data-filter="all">All</button>
   <button class="filter-btn" data-filter="2023">2023</button>
   <button class="filter-btn" data-filter="2022">2022</button>
   <button class="filter-btn" data-filter="2021">2021</button>
   </div> -->

   <div class="pubs-list">
   {% if site.data.pubs %}
      {% assign sorted_publications = site.data.pubs | sort: 'year' | reverse %}
      {% for pub in sorted_publications %}
      <div class="pub-item">
         <div class="pub-image">
            {% if pub.image %}
            <img src="{{ '/assets/images/projects/' | append: pub.image | relative_url }}" alt="{{ pub.title }}">
            {% else %}
            <div class="placeholder-image"></div>
            {% endif %}
         </div>
         <div class="pub-content">
            <div class="pub-header">
            <p class="pub-title-flair">{{ pub.mentioned }}</p>
            <h2 class="pub-title">{{ pub.title }}</h2>
            <p>{{pub.venue}}</p>
               <!-- <p class="pub-citation">{{ pub.authors }}, "{{ pub.title }}"{% if pub.venue %}, {{ pub.venue }}{% endif %}{% if pub.location %}, {{ pub.location }}{% endif %}, {{ pub.year }}</p> -->
            </div>
            <div class="pub-footer">
               <p class="pub-authors">{{pub.authors}}</p>
               <div class="pub-tags">
                  {% for tag in pub.tags %}
                  <a href="{{ tag.url | relative_url }}" class="tag-link">
                     <span class="tag" data-tag="{{ tag.name }}">{{ tag.name }}
                     </span>
                  </a>
                  {% endfor %}
               </div>
            </div>
         </div>
      </div>
      {% endfor %}
   {% else %}
      <p>No pubs available.</p>
   {% endif %}
   </div>

</div>

<div class="content-block" style="margin-top:56px;">
   
   <h1>research acknowledgements</h1>

   <div class="pubs-list">
   {% if site.data.pubs-ack %}
      {% assign sorted_publications = site.data.pubs-ack | sort: 'year' | reverse %}
      {% for pub in sorted_publications %}
      <div class="pub-item">
         <div class="pub-image">
            {% if pub.image %}
            <img src="{{ '/assets/images/projects/' | append: pub.image | relative_url }}" alt="{{ pub.title }}">
            {% else %}
            <div class="placeholder-image"></div>
            {% endif %}
         </div>
         <div class="pub-content">
            <div class="pub-header">
            <p class="pub-title-flair">{{ pub.mentioned }}</p>
            <h2 class="pub-title">{{ pub.title }}</h2>
            <p>{{pub.venue}}</p>
               <!-- <p class="pub-citation">{{ pub.authors }}, "{{ pub.title }}"{% if pub.venue %}, {{ pub.venue }}{% endif %}{% if pub.location %}, {{ pub.location }}{% endif %}, {{ pub.year }}</p> -->
            </div>
            <div class="pub-footer">
               <p class="pub-authors">{{pub.authors}}</p>
               <div class="pub-tags">
                  {% for tag in pub.tags %}
                  <a href="{{ tag.url | relative_url }}" class="tag-link">
                     <span class="tag" data-tag="{{ tag.name }}">{{ tag.name }}
                     </span>
                  </a>
                  {% endfor %}
               </div>
            </div>
         </div>
      </div>
      {% endfor %}
   {% else %}
      <p>No pubs available.</p>
   {% endif %}
   </div>
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
</script>