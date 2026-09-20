---
layout: masonry
title: "Professional Certificate in User Interface and Interaction Design"
id: professional-certificate-ui-interaction-design
header_label: "professional certificate: ui/interaction design"
permalink: /projects/professional-certificate-ui-interaction-design/
description: "Graduate Teaching Assistant for a six-day NUS professional certification course in user interface and interaction design, with Zhao Shengdong."
---

{% assign project = site.data.projects | where: 'title', 'Professional Certificate in User Interface and Interaction Design' | first %}

{% if project %}
  {% include components/detail-page-header.html title=project.title meta=project.subtitle %}
{% endif %}

<section class="gallery-strip" aria-label="{{ project.title }}">
  <div class="gallery-strip-grid">
    {% for item in project.images %}
      {% assign item_image = '/assets/images/projects/' | append: item.image | relative_url %}
      {% include components/gallery-strip-tile.html image=item_image image_caption=item.caption title=project.title title_short=item.caption %}
    {% endfor %}
  </div>
</section>

{% include components/gallery-strip-shell.html %}
