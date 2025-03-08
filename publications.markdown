---
layout: default
title: Publications
permalink: /publications/
---

# Publications

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
               <span class="pub-citation copy-trigger tag" 
                     data-citation="{{ pub.authors }}, &quot;{{ pub.title }}&quot;{% if pub.venue %}, {{ pub.venue }}{% endif %}{% if pub.location %}, {{ pub.location }}{% endif %}, {{ pub.year }}"
                     title="Click to copy citation">
                     cite
                  <!-- <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> -->
               </span>
               {% for tag in pub.tags %}
               <a href="{{ tag.url | relative_url }}" class="tag-link">
                  <span class="tag" data-tag="{{ tag.name }}">{{ tag.name }}</span>
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

# Research Acknowledgements

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
               <span class="pub-citation copy-trigger tag" 
                     data-citation="{{ pub.authors }}, &quot;{{ pub.title }}&quot;{% if pub.venue %}, {{ pub.venue }}{% endif %}{% if pub.location %}, {{ pub.location }}{% endif %}, {{ pub.year }}"
                     title="Click to copy citation">
                     cite
                  <!-- <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> -->
               </span>
               {% for tag in pub.tags %}
               <a href="{{ tag.url | relative_url }}" class="tag-link">
                  <span class="tag" data-tag="{{ tag.name }}">{{ tag.name }}</span>
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
</script>