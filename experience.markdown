---
layout: pages/experience
title: Experience
permalink: /experience/
id: experience
---

# Research Interests

{{ site.data.cv.research_interests }}

## Education

<table class="experience-table">
    {% for edu in site.data.cv.education %}
    <tr>
        <td class="experience-year {% if edu.current == false and edu.end_year != '2025' %}past-year{% endif %} {% if edu.current %}current-year{% endif %}">
            {%- if edu.end_year == '' -%}
                {{ edu.start_month }} {{ edu.start_year | slice: -2, 2 }} - Now
            {%- else -%}
                {{ edu.start_month }} {{ edu.start_year | slice: -2, 2 }} - {{ edu.end_month }} {{ edu.end_year | slice: -2, 2 }}
            {%- endif -%}
        </td>
        <td class="experience-content">
            <div class="experience-year-mobile {% if edu.current == false and edu.end_year != '2025' %}past-year{% endif %} {% if edu.current %}current-year{% endif %}">
                {%- if edu.end_year == '' -%}
                    {{ edu.start_month }} {{ edu.start_year | slice: -2, 2 }} - Now
                {%- else -%}
                    {{ edu.start_month }} {{ edu.start_year | slice: -2, 2 }} - {{ edu.end_month }} {{ edu.end_year | slice: -2, 2 }}
                {%- endif -%}
            </div>
            <strong>{{ edu.title }}</strong>{% if edu.organization %}{{ edu.organization }}{% endif %}{% if edu.location %}, {{ edu.location }}{% endif %}<br>
            {% if edu.thesis %}<span class="edu-label">Thesis</span> {{ edu.thesis }}<br>{% endif %}
            {% if edu.advisor %}<span class="edu-label">Adv:</span> <em>{{ edu.advisor }}</em><br>{% endif %}
            {% if edu.courses %}<span class="edu-label">Courses</span> {{ edu.courses }}<br>{% endif %}
        </td>
    </tr>
    {% endfor %}
</table>

<hr class="section-divider">

# Professional Experience

<table class="experience-table">
    {% assign sorted_professional = site.data.cv.professional | sort: 'start_year' | reverse %}
    {% for exp in sorted_professional %}
    <tr>
        <td class="experience-year {% if exp.current == false and exp.end_year != '2025' %}past-year{% endif %} {% if exp.current %}current-year{% endif %}">
            {%- if exp.end_year == '' -%}
                {{ exp.start_month }} {{ exp.start_year | slice: -2, 2 }} - Now
            {%- else -%}
                {{ exp.start_month }} {{ exp.start_year | slice: -2, 2 }} - {{ exp.end_month }} {{ exp.end_year | slice: -2, 2 }}
            {%- endif -%}
        </td>
        <td class="experience-content">
            <div class="experience-year-mobile {% if exp.current == false and exp.end_year != '2025' %}past-year{% endif %} {% if exp.current %}current-year{% endif %}">
                {%- if exp.end_year == '' -%}
                    {{ exp.start_month }} {{ exp.start_year | slice: -2, 2 }} - Now
                {%- else -%}
                    {{ exp.start_month }} {{ exp.start_year | slice: -2, 2 }} - {{ exp.end_month }} {{ exp.end_year | slice: -2, 2 }}
                {%- endif -%}
            </div>
            <strong>{{ exp.title }}</strong>
            {% if exp.link %}
            <a href="{{ exp.link }}" target="_blank">{{ exp.organization }}</a><br>
            {% else %}
            {{ exp.organization }}<br>
            {% endif %}
            {{ exp.description | markdownify }}
            {% if exp.notable_presentations %}
            <div class="notable-list-label">Notable Presentations:</div>
            <ul class="notable-list">
                {% for item in exp.notable_presentations %}
                <li><span class="notable-date">{{ item.date }}</span> {{ item.title }}{% if item.title contains "How to use XR for Physical Assault" %} <a href="/" class="presentation-link-btn" target="_blank">Link</a>{% endif %}</li>
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
        </td>
    </tr>
    {% endfor %}
</table>

<hr class="section-divider">

## Teaching Experience

<table class="experience-table">
    {% assign sorted_teaching = site.data.cv.teaching | sort: 'year' | reverse %}
    {% for teach in sorted_teaching %}
    <tr>
        <td class="experience-year">
            {{ teach.term }}
        </td>
        <td class="experience-content">
            <strong><span class="course-term-inline">{{ teach.term }}</span>{{ teach.course }}</strong>
            <span style="font-size:0.95em; color:#444;">{{ teach.role }}</span>{% if teach.organization %}, {{ teach.organization }}{% endif %}{% if teach.instructor %}, <em>Instructor: {{ teach.instructor }}</em>{% endif %}<br>
            {% if teach.description %}<span style="display: block; margin-top: 0.5em; color: #444; font-size: 0.97em;">{{ teach.description }}</span>{% endif %}
        </td>
    </tr>
    {% endfor %}
</table>

<hr class="section-divider">

## Scholarships + Awards

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

<hr class="section-divider">

## Languages

<ul class="skills-list">
    {% for lang in site.data.cv.languages %}
    {% assign fluency = lang.writing_fluency %}
    {% if lang.speaking_fluency == 'Fluent' %}
      {% assign fluency = 'Fluent' %}
    {% elsif lang.speaking_fluency == 'Beginner' and lang.writing_fluency != 'Fluent' %}
      {% assign fluency = lang.speaking_fluency %}
    {% endif %}
    <li>{{ lang.language }} {{ fluency }}</li>
    {% endfor %}
</ul>

<style>
.experience-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
}


.experience-table tr:last-child {
    border-bottom: none;
}

.experience-year {
    width: 70px;
    padding: 0.5rem;
    color: #9ca3af;
    font-weight: 500;
    vertical-align: top;
    text-align: right;
    box-sizing: border-box;
}

.experience-year-mobile {
    display: none;
    color: #9ca3af;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.experience-year.current-year {
    color: #3b82f6;
}

.experience-year-mobile.current-year {
    color: #3b82f6;
}

.experience-content {
    padding: 0.5rem;
    line-height: 1.6;
}

.experience-content strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #333;
}

.experience-content a {
    color: #666;
    text-decoration: none;
}

.experience-content a:hover {
    text-decoration: underline;
}

.edu-label {
    font-size: 0.85em;
    font-weight: 400;
    margin-right: 0.25em;
    color: #888;
    font-variant: normal;
}

.notable-list-label {
    font-size: 0.95em;
    font-weight: 600;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    color: #444;
}

.notable-list {
    margin: 0 0 0.5em 0;
    padding-left: 1.2em;
}

.notable-list li {
    margin-bottom: 0.15em;
    font-size: 0.97em;
    color: #444;
}

.notable-date {
    color: #3b82f6;
    font-weight: 500;
    margin-right: 0.5em;
    font-variant-numeric: tabular-nums;
}

.skills-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-left: 0px !important; 
}

.skills-list li {
    background: #f3f4f6;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #666;
}

.course-term {
    font-variant: small-caps;
    font-size: 0.95em;
    color: #444;
    margin-right: 0.5em;
    display: inline;
}

.course-term-inline {
    font-size: 0.95em;
    color: #888;
    font-weight: 600;
    margin-right: 0.5em;
    display: none;
}

@media (max-width: 768px) {
    .experience-year {
        display: none;
    }
    
    .experience-year-mobile {
        display: block;
    }
    
    .experience-content {
        padding: 0.75rem 0.25rem 0.75rem 0.5rem;
    }
    
    .skills-list {
        flex-direction: column;
    }
    
    .skills-list li {
        width: 100%;
    }
    
    .course-term {
        display: block;
        margin-bottom: 0.1em;
        margin-right: 0;
    }
    
    .course-term-inline {
        display: inline;
        margin-right: 0.3em;
    }
}

.section-divider {
    border: none;
    border-top: 2px solid #e5e7eb;
    margin: 2.5rem 0 2rem 0;
    width: 100%;
}

.presentation-link-btn {
    display: inline-block;
    margin-left: 0.5em;
    padding: 0.15em 0.7em;
    font-size: 0.85em;
    background: #3b82f6;
    color: #fff !important;
    border-radius: 0.3em;
    text-decoration: none;
    transition: background 0.2s;
}

.presentation-link-btn:hover {
    background: #2563eb;
}
</style> 