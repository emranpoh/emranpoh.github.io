---
layout: pages/default
title: Emran Poh
id: emran
---

<style>
.main-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

@media (max-width: 768px) {
    .navbar {
        display: none;
    }
    .introduction .hello-text {
        display: block;
        margin-bottom: 1rem;
    }
    .introduction .mobile-hello-text {
        display: none;
    }
    .introduction .mobile-title {
        display: block;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    .projects-section {
        display: none;
    }
    .mobile-projects-section,
    .mobile-publications-section,
    .mobile-experience-section,
    .mobile-sections{
        display: block;
        width: 100%;
    }
    .introduction {
        width: 100%;
        overflow: hidden;
        margin-bottom: 1rem;
    }
    .mobile-projects-section h2,
    .mobile-publications-section h2,
    .mobile-experience-section h2 {
        margin-bottom: 0.5rem;
    }
    .profile-container {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    .profile-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .profile-text {
        margin-bottom: auto;
    }
    .profile-name {
        font-size: 1.5rem;
        font-weight: 700;
    }
    .profile-title {
        font-size: 0.875rem;
        color: #666;
    }
    .profile-location{
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 0.75rem;
    }
    .profile-email {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 0.25rem;
    }
    .profile-image {
        width: 100%;
        aspect-ratio: 1;
        border-radius: 0.5rem;
        object-fit: cover;
        border: 2px solid #f3f4f6;
    }
    .icon-link {
        border-radius: 8px;
        color: #666;
        text-decoration: none;
        transition: none;
    }
    .desktop-buttons {
        display: none !important;
    }
    .mobile-buttons {
        display: flex !important;
    }
    .profile-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        width: 100%;
    }
    .publications-desktop {
        display: none !important;
    }
    .publications-section {
        display: none !important;
    }
    footer {
        margin-top: 2rem;
        padding: 1rem 0;
        border-top: 1px solid #eee;
        width: 100%;
    }
    .footer-links {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    .footer-links a {
        color: #666;
        text-decoration: none;
        transition: all 0.2s ease;
    }
    .footer-links a:hover {
        color: #333;
    }
    .powered-by-text {
        font-size: 0.875rem;
        color: #666;
        margin: 0;
    }
    .desktop-profile {
        display: none !important;
    }
    .mobile-profile {
        display: flex !important;
    }
    .main-content {
        flex-direction: column;
        padding: 1rem;
    }
}

@media (min-width: 769px) {
    .mobile-projects-section,
    .mobile-publications-section,
    .mobile-experience-section {
        display: none;
    }
    .introduction .mobile-hello-text,
    .introduction .mobile-title {
        display: none;
    }
    .introduction {
        padding-top: 2rem;
        margin-top: 0.5rem;
        height: auto;
        min-height: 0;
    }
    .profile-name {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
    }
    .profile-title {
        font-size: 1rem;
        color: #666;
        margin-bottom: 0.5rem;
    }
    .profile-email {
        font-size: 1rem;
        color: #666;
        margin-bottom: 0.5rem;
    }
    .introduction .hello-text {
        font-size: 0.875rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }
    .profile-container {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin: 2rem 0 0 0;
    }
    .profile-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .profile-text {
        margin-bottom: auto;
    }
    .profile-image {
        width: 128px;
        height: 128px;
        border-radius: 0.5rem;
        object-fit: cover;
        border: 2px solid #f3f4f6;
    }
    .icon-link {
        border-radius: 8px;
        color: #666;
        text-decoration: none;
        transition: none;
    }
    .desktop-buttons {
        display: none !important;
    }
    .mobile-buttons {
        display: none !important;
    }
    .profile-content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 1.5rem;
        width: 100%;
    }
    .mobile-only {
        display: none !important;
    }
    footer {
        position: static;
        width: 100%;
        background-color: #f8f9fa;
        padding: 1rem 0;
        border-top: 1px solid #eee;
        text-align: center;
    }
    .footer-links {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    .footer-links a {
        color: #666;
        text-decoration: none;
        transition: all 0.2s ease;
    }
    .footer-links a:hover {
        color: #333;
    }
    .powered-by-text {
        font-size: 0.875rem;
        color: #666;
        margin: 0;
    }
    .mobile-profile {
        display: none !important;
    }
    .desktop-profile {
        display: flex !important;
    }
}

/* Article Gallery Styles */
.article-gallery {
    margin: 3rem 0;
    width: 100%;
}

.section-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #1d1d1d;
    text-align: left;
}

.articles-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.article-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.2s ease;
}

.article-card:hover {
    border-color: #d1d5db;
}

.article-title {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
}

.article-title a {
    color: #1d1d1d;
    text-decoration: none;
    transition: color 0.2s ease;
}

.article-title a:hover {
    color: #2563eb;
}

.article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1rem;
    align-items: center;
}

.article-date {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
}

.article-categories {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
}

.category-tag {
    background: #f3f4f6;
    color: #374151;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 500;
    flex-shrink: 0;
}

.venue-full {
    color: #888;
    font-size: 0.75rem;
    font-style: italic;
    flex: 1;
}

.article-excerpt {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.75rem;
}

.article-links {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
}

.read-more {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid #2563eb;
    border-radius: 4px;
    transition: all 0.2s ease;
    display: inline-block;
}

.read-more:hover {
    background-color: #2563eb;
    color: white;
    text-decoration: none;
}

.view-all-articles {
    text-align: center;
    margin-top: 2rem;
}

.view-all-link {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background: #f8fafc;
    color: #374151;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid #e2e8f0;
}

.view-all-link:hover {
    background: #e2e8f0;
    color: #1f2937;
}

/* Mobile styles for article gallery */
@media (max-width: 768px) {
    .article-gallery {
        margin: 2rem 0;
    }
    
    .section-title {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
    
    .articles-list {
        gap: 1rem;
    }
    
    .article-card {
        padding: 1.25rem;
    }
    
    .article-title {
        font-size: 1.125rem;
    }
    
    .article-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}
</style>

<div class="main-content">
    {% include layouts/profile.html %}
    {% include components/intro.html %}
    
    <!-- Publications Gallery Section -->
    <section class="article-gallery">
        <h2 class="section-title">Publications</h2>
        <div class="articles-list">
            {% assign sorted_pubs = site.data.pubs | sort: 'year' | reverse %}
            {% for pub in sorted_pubs %}
            <article class="article-card">
                <div class="article-content">
                    <h3 class="article-title">
                        {{ pub.title }}
                    </h3>
                    <div class="article-meta">
                        {% if pub.venue_short %}
                        <span class="article-categories">
                            <span class="category-tag">{{ pub.venue_short }} {{ pub.year }}</span>
                            <span class="venue-full">{{ pub.venue | remove: pub.year | remove: pub.venue_short | remove: '(' | remove: ')' | remove: 'Innovations in Social Computing and Digital Transformation, ' | strip }}</span>
                        </span>
                        {% else %}
                        <time class="article-date">{{ pub.year }}</time>
                        {% endif %}
                    </div>
                    <p class="article-excerpt">
                        {% assign author_list = pub.authors | replace: ', and ', ', ' | split: ', ' %}
                        {% for author in author_list %}
                            {% assign author_name = author | strip %}
                            {% assign author_found = false %}
                            {% for author_data in site.data.authors %}
                                {% if author_data.name == author_name %}
                                    {% assign author_found = true %}
                                    {% if author_data.url %}
                                        {% if author_name contains 'Emran Poh' %}
                                            <strong style="color: #000;"><a href="{{ author_data.url }}" target="_blank" style="color: #000; text-decoration: none;">{{ author_name }}</a></strong>
                                        {% else %}
                                            <a href="{{ author_data.url }}" target="_blank" style="color: #2563eb; text-decoration: none;">{{ author_name }}</a>
                                        {% endif %}
                                    {% else %}
                                        {% if author_name contains 'Emran Poh' %}
                                            <strong style="color: #000;">{{ author_name }}</strong>
                                        {% else %}
                                            {{ author_name }}
                                        {% endif %}
                                    {% endif %}
                                    {% break %}
                                {% endif %}
                            {% endfor %}
                            {% unless author_found %}
                                {% if author_name contains 'Emran Poh' %}
                                    <strong style="color: #000;">{{ author_name }}</strong>
                                {% else %}
                                    {{ author_name }}
                                {% endif %}
                            {% endunless %}
                            {% unless forloop.last %}, {% endunless %}
                        {% endfor %}
                    </p>
                    <div class="article-links">
                        {% if pub.pdf %}
                        <a href="{{ pub.pdf | relative_url }}" class="read-more" target="_blank">PDF</a>
                        {% endif %}
                        {% for tag in pub.tags %}
                            {% if tag.name == "pdf" and tag.url %}
                            <a href="{{ tag.url }}" class="read-more" target="_blank">DOI</a>
                            {% elsif tag.name == "doi" and tag.url %}
                            <a href="{{ tag.url }}" class="read-more" target="_blank">DOI</a>
                            {% endif %}
                        {% endfor %}
                        {% if pub.citation %}
                        <button class="read-more cite-button" onclick="copyCitation('{{ pub.citation | escape }}')">Cite</button>
                        {% endif %}
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>
    </section>
    
    <!-- Theses Section -->
    <section class="article-gallery">
        <h2 class="section-title">Theses</h2>
        <div class="articles-list">
            {% assign sorted_theses = site.data.theses | sort: 'year' | reverse %}
            {% for thesis in sorted_theses %}
            <article class="article-card">
                <div class="article-content">
                    <h3 class="article-title">
                        {{ thesis.title }}
                    </h3>
                    <div class="article-meta">
                        {% if thesis.venue_short %}
                        <span class="article-categories">
                            <span class="category-tag">{{ thesis.venue_short }} {{ thesis.year }}</span>
                            <span class="venue-full">{{ thesis.venue | remove: thesis.year | remove: thesis.venue_short | remove: '(' | remove: ')' | remove: 'Innovations in Social Computing and Digital Transformation, ' | strip }}</span>
                        </span>
                        {% else %}
                        <time class="article-date">{{ thesis.year }}</time>
                        {% endif %}
                    </div>
                    <p class="article-excerpt">
                        {% assign author_list = thesis.authors | replace: ', and ', ', ' | split: ', ' %}
                        {% for author in author_list %}
                            {% assign author_name = author | strip %}
                            {% assign author_found = false %}
                            {% for author_data in site.data.authors %}
                                {% if author_data.name == author_name %}
                                    {% assign author_found = true %}
                                    {% if author_data.url %}
                                        {% if author_name contains 'Emran Poh' %}
                                            <strong style="color: #000;"><a href="{{ author_data.url }}" target="_blank" style="color: #000; text-decoration: none;">{{ author_name }}</a></strong>
                                        {% else %}
                                            <a href="{{ author_data.url }}" target="_blank" style="color: #2563eb; text-decoration: none;">{{ author_name }}</a>
                                        {% endif %}
                                    {% else %}
                                        {% if author_name contains 'Emran Poh' %}
                                            <strong style="color: #000;">{{ author_name }}</strong>
                                        {% else %}
                                            {{ author_name }}
                                        {% endif %}
                                    {% endif %}
                                    {% break %}
                                {% endif %}
                            {% endfor %}
                            {% unless author_found %}
                                {% if author_name contains 'Emran Poh' %}
                                    <strong style="color: #000;">{{ author_name }}</strong>
                                {% else %}
                                    {{ author_name }}
                                {% endif %}
                            {% endunless %}
                            {% unless forloop.last %}, {% endunless %}
                        {% endfor %}
                    </p>
                    <div class="article-links">
                        {% if thesis.pdf %}
                        <a href="{{ thesis.pdf | relative_url }}" class="read-more" target="_blank">PDF</a>
                        {% endif %}
                        {% for tag in thesis.tags %}
                            {% if tag.name == "pdf" and tag.url %}
                            <a href="{{ tag.url }}" class="read-more" target="_blank">DOI</a>
                            {% endif %}
                        {% endfor %}
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>
    </section>
    
    {% include layouts/desktop/news.html %}
    {% include layouts/mobile/news.html %}
</div>

<script>
function copyCitation(citation) {
    // Replace escaped newlines with actual newlines
    const formattedCitation = citation.replace(/\\n/g, '\n');
    
    // Copy to clipboard
    navigator.clipboard.writeText(formattedCitation).then(function() {
        // Show feedback
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.backgroundColor = '#059669';
        button.style.borderColor = '#059669';
        
        // Reset after 2 seconds
        setTimeout(function() {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.style.borderColor = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy citation: ', err);
        alert('Failed to copy citation to clipboard');
    });
}
</script>
