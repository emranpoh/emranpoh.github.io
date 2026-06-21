---
layout: masonry
title: Emran Poh
permalink: /
id: landing
description: "CS PhD student at SMU-HAI Lab. Research publications and projects in human-AI interaction, HCI, and AI tutoring by Emran Poh."
---

{% include components/intro.html research_page=true %}

{% include components/recent-highlights.html limit=5 %}

<div class="publications-section-wrapper publications-page selected-pubs-block">
  {% include components/publications-section.html selected_only=true %}
</div>

<hr class="intro-publications-divider" aria-hidden="true">

{% include components/research-in-progress.html %}

<div class="publications-section-wrapper publications-page">
  {% include components/publications-section.html exclude_institution="immersification" %}
</div>
