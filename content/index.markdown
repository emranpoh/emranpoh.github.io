---
layout: pages/default
title: Emran Poh
id: emran
---

<div class="main-content">
    {% include layouts/profile.html %}
    {% include components/intro.html %}
    
    <!-- Publications Gallery Section -->
    <hr class="section-divider">
    <section class="article-gallery">
        <h2 class="section-title">here are some publications</h2>
        <div class="articles-list">
            {% assign sorted_pubs = site.data.pubs | sort: 'year' | reverse %}
            {% assign cite_counter = 0 %}
            {% for pub in sorted_pubs %}
                {% assign author_list = pub.authors | split: ',' %}
                {% assign first_author = author_list[0] | strip %}
                {% if first_author contains 'Emran Poh' %}
                    {% assign cite_counter = cite_counter | plus: 1 %}
            <article class="article-card">
                <div class="article-content">
                    {% if pub.venue_short %}
                    <div class="article-tags">
                        <div class="article-shape-tag" data-type="{{ pub.type | default: 'default' }}">
                            {% if cite_counter == 1 %}
                                <!-- First publication (MComp) - use rectangle -->
                                <img src="/assets/images/rectangle.svg" class="citation-shape" alt="Citation">
                            {% elsif cite_counter >= 2 and cite_counter <= 5 %}
                                <!-- Publications 2-5 (B.Sc.) - use single circle -->
                                <img src="/assets/images/circle.svg" class="citation-shape" alt="Citation">
                            {% else %}
                                <!-- Other publications - use rectangle -->
                                <img src="/assets/images/rectangle.svg" class="citation-shape" alt="Citation">
                            {% endif %}
                        </div>
                        <div class="article-cite-tag">
                            {{ cite_counter }}
                        </div>
                        <div class="article-venue-tag">{{ pub.venue_short }} {{ pub.year }}</div>
                        {% if pub.type %}
                        <div class="article-type-tag" data-type="{{ pub.type }}">
                            {{ pub.type }}
                        </div>
                        {% endif %}
                    </div>
                    {% endif %}
                    <h3 class="article-title">
                        {{ pub.title }}
                    </h3>
                    <div class="article-meta">
                        {% if pub.venue_short %}
                        <span class="article-categories">
                            <span class="venue-full">{{ pub.venue }}</span>
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
                                    {% if author_name contains 'Emran Poh' %}
                                        <strong style="color: #000;">{{ author_name }}</strong>
                                    {% else %}
                                        {% if author_data.url %}
                                            <a href="{{ author_data.url }}" target="_blank" style="color: #2563eb; text-decoration: none;">{{ author_name }}</a>
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
                        <a href="{{ pub.pdf | relative_url }}" class="read-more" target="_blank"><img src="{{ '/assets/images/document-icon.svg' | relative_url }}" alt="PDF" style="width: 1.125rem; height: 1.125rem; filter: brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a>
                        {% endif %}
                        {% for tag in pub.tags %}
                            {% if tag.name == "pdf" and tag.url %}
                            <a href="{{ tag.url }}" class="read-more" target="_blank">DOI</a>
                            {% elsif tag.name == "doi" and tag.url %}
                            <a href="{{ tag.url }}" class="read-more" target="_blank">DOI</a>
                            {% endif %}
                        {% endfor %}
                        {% if pub.citation %}
                            <button class="read-more cite-button" onclick="copyCitation('{{ pub.citation | escape }}')"><i class="fas fa-quote-left" style="font-size: 1rem; color: #666;"></i></button>
                            {% endif %}
                        </div>
                    </div>
                </article>
                {% endif %}
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
                    {% if thesis.venue_short %}
                    <div class="article-tags">
                        <div class="article-venue-tag">{{ thesis.year }}</div>
                        {% if thesis.type %}
                        <div class="article-type-tag" data-type="{{ thesis.type }}">{{ thesis.type }}</div>
                        {% endif %}
                    </div>
                    {% endif %}
                    <h3 class="article-title">
                        {{ thesis.title }}
                    </h3>
                    <div class="article-meta">
                        {% if thesis.venue_short %}
                        <span class="article-categories">
                            <span class="venue-full">{{ thesis.degree }} • {{ thesis.venue | remove: thesis.year | remove: thesis.venue_short | remove: '(' | remove: ')' | remove: 'Innovations in Social Computing and Digital Transformation, ' | strip }}</span>
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
                                    {% if author_name contains 'Emran Poh' %}
                                        <strong style="color: #000;">{{ author_name }}</strong>
                                    {% else %}
                                        {% if author_data.url %}
                                            <a href="{{ author_data.url }}" target="_blank" style="color: #2563eb; text-decoration: none;">{{ author_name }}</a>
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
                        <a href="{{ thesis.pdf | relative_url }}" class="read-more" target="_blank"><img src="{{ '/assets/images/document-icon.svg' | relative_url }}" alt="PDF" style="width: 1.125rem; height: 1.125rem; filter: brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a>
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
        const button = event.target.closest('button');
        const icon = button.querySelector('i');
        const originalClass = icon.className;
        const originalColor = icon.style.color;
        
        // Change icon to checkmark and color
        icon.className = 'fas fa-check';
        icon.style.color = '#059669';
        button.style.backgroundColor = '#d1fae5';
        button.style.borderColor = '#059669';
        
        // Reset after 2 seconds
        setTimeout(function() {
            icon.className = originalClass;
            icon.style.color = originalColor;
            button.style.backgroundColor = '';
            button.style.borderColor = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy citation: ', err);
        alert('Failed to copy citation to clipboard');
    });
}
</script>
