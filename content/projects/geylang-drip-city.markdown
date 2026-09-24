---
layout: masonry
title: "Geylang Drip City Brand Development"
id: geylang-drip-city
header_label: "geylang drip city"
permalink: /projects/geylang-drip-city/
description: "Freelance creative consultant work for Got Drip? Coffee Company — brand identity, packaging, and menu design."
---

{% assign project = site.data.projects | where: 'title', 'Geylang Drip City Brand Development' | first %}

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
