---
layout: pages/default
title: Teach
permalink: /teach/
id: teach
---

<div class="teaching-content">
  {% if site.data.cv.teaching %}
    {% assign sorted_teaching = site.data.cv.teaching | sort: 'year' | reverse %}
    <div class="teaching-grid">
      {% for teaching in sorted_teaching %}
        <div class="teaching-item">
          <div class="teaching-header">
            <h2 class="teaching-course">{{ teaching.course }}</h2>
            <div class="teaching-meta">
              {% if teaching.term %}
                <span class="teaching-term">{{ teaching.term }} {{ teaching.year }}</span>
              {% else %}
                <span class="teaching-term">{{ teaching.year }}</span>
              {% endif %}
              {% if teaching.organization %}
                <span class="teaching-org">{{ teaching.organization }}</span>
              {% endif %}
            </div>
          </div>
          <div class="teaching-details">
            <p class="teaching-role"><strong>{{ teaching.role }}</strong>{% if teaching.instructor %}, under {{ teaching.instructor }}{% endif %}</p>
            {% if teaching.description %}
              <p class="teaching-description">{{ teaching.description }}</p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  {% else %}
    <p>No teaching information available.</p>
  {% endif %}
</div>

