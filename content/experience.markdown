---
layout: pages/experience
title: Experience
permalink: /experience/
id: experience
---

<div class="intro-block">
  <p id="education-heading">education</p>
</div>
<table class="experience-table">
    {% for edu in site.data.cv.education %}
    <tr>
        <td class="experience-year {% if edu.current == false and edu.end_year != '2025' %}past-year{% endif %} {% if edu.current %}current-year{% endif %}">
            {%- if edu.end_year == '' -%}
                {% if edu.start_month != '' %}{{ edu.start_month }}{% endif %}{{ edu.start_year | slice: -2, 2 }} - Now
            {%- else -%}
                {% if edu.start_month != '' %}{{ edu.start_month }}{% endif %}{{ edu.start_year | slice: -2, 2 }} - {% if edu.end_month != '' %}{{ edu.end_month }}{% endif %}{{ edu.end_year | slice: -2, 2 }}
            {%- endif -%}
        </td>
        <td class="experience-content">
            <div class="experience-year-mobile {% if edu.current == false and edu.end_year != '2025' %}past-year{% endif %} {% if edu.current %}current-year{% endif %}">
                {%- if edu.end_year == '' -%}
                    {% if edu.start_month != '' %}{{ edu.start_month }}{% endif %}{{ edu.start_year | slice: -2, 2 }} - Now
                {%- else -%}
                    {% if edu.start_month != '' %}{{ edu.start_month }}{% endif %}{{ edu.start_year | slice: -2, 2 }} - {% if edu.end_month != '' %}{{ edu.end_month }}{% endif %}{{ edu.end_year | slice: -2, 2 }}
                {%- endif -%}
            </div>
            <strong>{{ edu.title }}</strong>{% if edu.organization or edu.location %}<span class="experience-org-location">{% if edu.organization %} {{ edu.organization }}{% endif %}{% if edu.location %}, {{ edu.location }}{% endif %}</span>{% endif %}<br>
            {% if edu.thesis %}<span class="edu-label">Thesis</span> {{ edu.thesis }}<br>{% endif %}
            {% if edu.advisor %}<span class="edu-label">Adv:</span> <em>{{ edu.advisor }}</em><br>{% endif %}
            {% if edu.courses %}<span class="edu-label">Courses</span> {{ edu.courses }}<br>{% endif %}
        </td>
    </tr>
    {% endfor %}
</table>

<div class="intro-block">
  <p id="professional-heading">professional experience</p>
</div>
<table class="experience-table">
    {% assign sorted_professional = site.data.cv.professional | sort: 'start_year' | reverse %}
    {% for exp in sorted_professional %}
    <tr>
        <td class="experience-year {% if exp.current == false and exp.end_year != '2025' %}past-year{% endif %} {% if exp.current %}current-year{% endif %}">
            {%- if exp.end_year == '' -%}
                {% if exp.start_month != '' %}{{ exp.start_month }}{% endif %}{{ exp.start_year | slice: -2, 2 }} - Now
            {%- else -%}
                {% if exp.start_month != '' %}{{ exp.start_month }}{% endif %}{{ exp.start_year | slice: -2, 2 }} - {% if exp.end_month != '' %}{{ exp.end_month }}{% endif %}{{ exp.end_year | slice: -2, 2 }}
            {%- endif -%}
        </td>
        <td class="experience-content">
            <div class="experience-year-mobile {% if exp.current == false and exp.end_year != '2025' %}past-year{% endif %} {% if exp.current %}current-year{% endif %}">
                {%- if exp.end_year == '' -%}
                    {% if exp.start_month != '' %}{{ exp.start_month }}{% endif %}{{ exp.start_year | slice: -2, 2 }} - Now
                {%- else -%}
                    {% if exp.start_month != '' %}{{ exp.start_month }}{% endif %}{{ exp.start_year | slice: -2, 2 }} - {% if exp.end_month != '' %}{{ exp.end_month }}{% endif %}{{ exp.end_year | slice: -2, 2 }}
                {%- endif -%}
            </div>
            <strong>{{ exp.title }}</strong>
            <span class="experience-org-location">{% if exp.link %}<a href="{{ exp.link }}" target="_blank">{{ exp.organization }}</a>{% else %}{{ exp.organization }}{% endif %}{% if exp.location %}, {{ exp.location }}{% endif %}</span><br>
            {{ exp.description | markdownify }}
            {% if exp.notable_presentations %}
            <div class="notable-list-label">Notable Presentations:</div>
            <ul class="notable-list">
                {% for item in exp.notable_presentations %}
                <li><span class="notable-date">{{ item.date }}</span> {{ item.title }}</li>
                {% endfor %}
            </ul>
            {% endif %}
            {% if exp.notable_projects %}
            <div class="notable-list-label">Notable Project Showcases:</div>
            <ul class="notable-list">
                {% for item in exp.notable_projects %}
                <li><span class="notable-date">{{ item.date }}</span> {{ item.title }}</li>
                {% endfor %}
            </ul>
            {% endif %}
            {% if exp.title == "Research Project Manager" %}
            <div class="citations">
                <span class="citation-label">Related Publication:</span>
                <a href="/publications/art01" class="citation-link">Supporting Artefact Awareness for Partially-Replicated Workspaces (ISMAR-Adjunct 2023)</a>
            </div>
            {% endif %}
            {% if exp.title == "UX Research Engineer" and exp.organization == "Center for Immersification" %}
            <div class="citations">
                <span class="citation-label">Related Publications:</span>
                <ul class="citation-list">
                    <li><a href="/publications/mr01" class="citation-link">Mixed Reality for Engineering Design Review Using Finite Element Analysis (ISMAR-Adjunct 2022)</a></li>
                    <li><a href="/publications/mr02" class="citation-link">Mixed Reality for Mechanical Design and Assembly Planning (HCI-International 2022)</a></li>
                    <li><a href="/publications/mr03" class="citation-link">Mixed Reality Interface for Load Application in Finite Element Analysis (HCI-International 2021)</a></li>
                    <li><a href="/publications/hol01" class="citation-link">Designing with Holograms (NewRIIS 2021)</a></li>
                </ul>
            </div>
            {% endif %}
        </td>
    </tr>
    {% endfor %}
</table>

<div class="intro-block">
  <p id="service-heading">service</p>
</div>
<table class="experience-table">
    {% assign sorted_service = site.data.cv.service | sort: 'start_year' | reverse %}
    {% for item in sorted_service %}
    <tr>
        <td class="experience-year {% if item.end_year != '' %}past-year{% endif %}">
            {%- if item.end_year == '' -%}
                {% if item.start_month != '' %}{{ item.start_month }}{% endif %}{{ item.start_year | slice: -2, 2 }} - Now
            {%- elsif item.start_year == item.end_year and item.start_month == '' and item.end_month == '' -%}
                {{ item.start_year | slice: -2, 2 }}
            {%- else -%}
                {% if item.start_month != '' %}{{ item.start_month }}{% endif %}{{ item.start_year | slice: -2, 2 }} - {% if item.end_month != '' %}{{ item.end_month }}{% endif %}{{ item.end_year | slice: -2, 2 }}
            {%- endif -%}
        </td>
        <td class="experience-content">
            <div class="experience-year-mobile">
                {%- if item.end_year == '' -%}
                    {% if item.start_month != '' %}{{ item.start_month }}{% endif %}{{ item.start_year | slice: -2, 2 }} - Now
                {%- elsif item.start_year == item.end_year and item.start_month == '' and item.end_month == '' -%}
                    {{ item.start_year | slice: -2, 2 }}
                {%- else -%}
                    {% if item.start_month != '' %}{{ item.start_month }}{% endif %}{{ item.start_year | slice: -2, 2 }} - {% if item.end_month != '' %}{{ item.end_month }}{% endif %}{{ item.end_year | slice: -2, 2 }}
                {%- endif -%}
            </div>
            <strong>{{ item.title }}</strong><span class="experience-org-location"> {{ item.organization }}{% if item.location %}, {{ item.location }}{% endif %}</span>{% if item.description %}<br>
            {{ item.description | markdownify }}{% endif %}
        </td>
    </tr>
    {% endfor %}
</table>

<div class="intro-block">
  <p id="publications-heading">publications</p>
</div>
<table class="experience-table">
    {% assign sorted_pubs = site.data.pubs | sort: 'year' | reverse %}
    {% assign current_year = 0 %}
    {% for pub in sorted_pubs %}
        {% assign author_list = pub.authors | split: ',' %}
        {% assign first_author = author_list[0] | strip %}
        {% if first_author contains 'Emran Poh' %}
    <tr>
        <td class="experience-year">
            {% if pub.year != current_year %}
            {{ pub.year }}
            {% assign current_year = pub.year %}
            {% endif %}
        </td>
        <td class="experience-content">
            <div class="experience-year-mobile">{{ pub.year }}</div>
            <strong><a href="{{ pub.url }}" class="pub-link">{{ pub.title }}</a></strong>
            <div class="pub-authors">{{ pub.authors }}</div>
            <div class="pub-venue">{{ pub.venue }}{% if pub.location %}, {{ pub.location }}{% endif %}</div>
            {% if pub.tags %}
            <div class="pub-tags">
                {% for tag in pub.tags %}
                <a href="{{ tag.url }}" class="pub-tag" target="_blank">{{ tag.name }}</a>
                {% endfor %}
            </div>
            {% endif %}
        </td>
    </tr>
        {% endif %}
    {% endfor %}
</table>

<div class="intro-block">
  <p id="teaching-heading">teaching experience</p>
</div>
<table class="experience-table">
    {% assign sorted_teaching = site.data.cv.teaching | sort: 'year' | reverse %}
    {% for teach in sorted_teaching %}
    <tr>
        <td class="experience-year">
            {{ teach.term }}
        </td>
        <td class="experience-content">
            <strong><span class="course-term-inline">{{ teach.term }}</span>{{ teach.course }}</strong><span class="experience-org-location"> {{ teach.role }}{% if teach.organization %}, {{ teach.organization }}{% endif %}{% if teach.location %}, {{ teach.location }}{% endif %}{% if teach.instructor %}, <em>Instructor: {{ teach.instructor }}</em>{% endif %}</span><br>
            {% if teach.description %}<span style="display: block; margin-top: 0.5em; color: #444; font-size: 0.97em;">{{ teach.description }}</span>{% endif %}
        </td>
    </tr>
    {% endfor %}
</table>

<div class="intro-block">
  <p id="awards-heading">scholarships + awards</p>
</div>
<table class="experience-table">
    {% assign sorted_awards = site.data.cv.scholarships | sort: 'year' | reverse %}
    {% for award in sorted_awards %}
    <tr>
        <td class="experience-year">
            {{ award.year }}
        </td>
        <td class="experience-content">
            <div class="experience-year-mobile">{{ award.year }}</div>
            <strong>{{ award.name }}</strong>{% if award.amount %} [{{ award.amount }}]{% endif %}: {{ award.description }}
        </td>
    </tr>
    {% endfor %}
</table>
