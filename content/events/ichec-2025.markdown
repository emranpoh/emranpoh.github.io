---
layout: masonry
title: "International Conference on Human-Engaged Computing 2025"
id: ichec-2025
slug: ichec-2025
header_label: "ichec"
permalink: /events/ichec-2025/
description: "Attended ICHEC 2025 at Singapore Management University."
---

{% assign event = site.data.events | where: 'slug', page.slug | first %}

{% if event %}
  {% capture event_meta %}{% if event.date %}{{ event.date | date: "%-d %B %Y" }}{% endif %}{% if event.date and event.location %} · {% endif %}{% if event.location %}{{ event.location }}{% endif %}{% endcapture %}
  {% assign event_meta = event_meta | strip %}
  {% include components/detail-page-header.html title=event.title meta=event_meta description=event.description %}
{% endif %}

{% include components/event-strip.html event=event %}

{% include components/gallery-strip-shell.html %}
