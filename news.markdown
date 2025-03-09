---
layout: page
title: news
permalink: /news/
---

{% for item in site.data.news.news limit:5 %}
<div class="news-text">
    <div class="news-header">
        <h3>{{ item.title }}</h3>
    </div>
    <div>
        <p class="news-text-content"><span class="news-date">[{{ item.date | date: "%b %Y" }}]</span> {{ item.summary }}</p>
    </div>
</div>

<hr class="news-divider">
{% endfor %}

<h1>upcoming events</h1>

{% for event in site.data.upcoming_events %}
<div class="news-text">
    <div class="news-header">
        <h3>{{ event.title }}</h3>
    </div>
    <div>
        <p class="news-text-content"><span class="news-date">[{{ event.date | date: "%b %Y" }}]</span> {{ event.summary }}</p>
    </div>
</div>

{% endfor %}

{% if site.data.settings.archive_enabled %}
<div class="archive-link">
  <a href="/news-archive">View All News</a>
</div>
{% endif %}

<style>
.date {
  font-size: 0.9em;
  font-style: italic;
  color: #666;
  margin-bottom: 1em;
  display: block;
}

.featured-badge {
  background-color: #FFC107;
  color: #333;
  padding: 0.2em 0.5em;
  border-radius: 3px;
  font-size: 0.8em;
  margin-left: 1em;
}

.tags {
  margin-top: 1em;
}

.tag {
  background-color: #eee;
  padding: 0.2em 0.5em;
  border-radius: 3px;
  font-size: 0.8em;
  margin-right: 0.5em;
}

hr {
  margin: 2em 0;
  border: none;
  border-top: 1px solid #eee;
}

.archive-link {
  margin-top: 2em;
  text-align: center;
}

.archive-link a {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 3px;
}
</style>