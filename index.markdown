---
layout: default
title: emran poh
id: emran
---

<style>
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
        /* margin-bottom: 0.25rem; */
        text-transform: lowercase;
        /* letter-spacing: 0.05em; */
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
        width: 120px;
        height: 120px;
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
        flex-direction: row;
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
        text-transform: lowercase;
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
</style>

<div class="desktop-container">
    <section class="w-full">
        {% include layouts/desktop/profile.html %}
        {% include layouts/mobile/profile.html %}
    </section>

    <!-- Intro Section -->
    {% include layouts/desktop/intro.html %}
    {% include layouts/mobile/intro.html %}

    {% include layouts/desktop/main.html %}
    {% include layouts/mobile/main.html %}
</div>
