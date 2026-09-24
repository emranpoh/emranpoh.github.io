---
layout: masonry
title: "HCI Research Gathering at NYCU"
id: hci-visit
slug: hci-visit-nycu-2025
header_label: "hci visit"
permalink: /events/hci-visit-nycu-2025/
description: "HCI research gathering with labs from National Yang Ming Chiao Tung University (Taiwan), Seoul National University, Hokkaido University, and SMU."
---

{% assign event = site.data.events | where: 'slug', page.slug | first %}

{% if event %}
  {% capture event_meta %}{% if event.date %}{{ event.date | date: "%-d %B %Y" }}{% endif %}{% if event.date and event.location %} · {% endif %}{% if event.location %}{{ event.location }}{% endif %}{% endcapture %}
  {% assign event_meta = event_meta | strip %}
  {% include components/detail-page-header.html title=event.title meta=event_meta description=event.description %}
{% endif %}

{% include components/event-strip.html event=event %}

{% include components/gallery-strip-shell.html %}
