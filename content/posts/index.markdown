---
layout: pages/default
title: Blog Posts
permalink: /content/posts/
---

<div class="posts-container">
    {% assign posts = site.posts | sort: 'date' | reverse %}
    <div class="posts-grid">
        {% for post in posts %}
        <article class="post-card">
            <a href="{{ post.url | relative_url }}" class="post-card-link">
                <div class="post-card-content">
                    <h2 class="post-card-title">{{ post.title }}</h2>
                    <time class="post-card-date">{{ post.date | date: "%B %d, %Y" }}</time>
                    {% if post.excerpt %}
                    <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                    {% endif %}
                </div>
            </a>
        </article>
        {% endfor %}
    </div>
</div>

<style>
.posts-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.post-card {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.post-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
}

.post-card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.post-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: #111827;
    line-height: 1.4;
}

.post-card-date {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.75rem;
}

.post-card-excerpt {
    font-size: 0.875rem;
    color: #4b5563;
    margin: 0;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .posts-grid {
        grid-template-columns: 1fr;
    }
    
    .post-card {
        margin-bottom: 1rem;
    }
}
</style> 