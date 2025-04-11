---
layout: default
title: emran poh
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
        /* margin-bottom: 0.5rem; */
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
    .header-icons {
        margin-top: auto;
        display: flex;
        flex-direction: row;
        /* gap: 0.25rem; */
    }
    .header-icons a {
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        /* background-color: #f3f4f6; */
        /* border-radius: 0.5rem; */
        /* transition: all 0.2s ease; */
        /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); */
    }
    .header-icons a:hover {
        color: #666;
        background-color: #e5e7eb;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header-icons i {
        font-size: 1.1rem;
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
        font-size: 0.875rem;
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
        margin-bottom: 4rem;
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
    .desktop-buttons {
        display: flex !important;
        height: 128px;
        align-items: stretch;
        gap: 1rem;
        margin-top: 0;
    }
    .desktop-icons-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 0.5rem;
        width: 140px;
        height: 128px;
    }
    .desktop-icons-grid a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f1f3f5;
        border-radius: 1rem;
        height: 100%;
        color: #666;
        text-decoration: none;
        transition: all 0.2s ease;
    }
    .desktop-icons-grid a:hover {
        background-color: #e5e7eb;
        transform: translateY(-1px);
    }
    .desktop-icons-grid img {
        width: 1.5rem;
        height: 1.5rem;
    }
    .desktop-icons-grid i {
        font-size: 1.5rem;
    }
    .desktop-buttons button {
        flex: 1;
        background: none;
        border: none;
        color: #666;
        font-size: 1rem;
        cursor: pointer;
        padding: 0.75rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        background-color: #f1f3f5;
        border-radius: 1rem;
        height: 128px;
        transition: all 0.2s ease;
    }
    .desktop-buttons button:hover {
        background-color: #e5e7eb;
        transform: translateY(-1px);
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
    .header-icons {
        display: none !important;
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
}
</style>

<section class="w-full">
    <div class="h-64 mb-4 introduction">
        <div class="profile-container">
            <div class="profile-content">
                <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Emran Poh" class="profile-image">
                <div class="profile-info">
                    <div class="profile-text">
                        <div class="profile-name">emran poh</div>
                        <div class="profile-title">smu hai+hci phd student</div>
                        <!-- <div class="profile-location">currently at : 🇸🇬</div> -->
                        <div class="profile-email">emranpoh [at] smu.edu.sg</div>
                    </div>
                    <div class="header-icons mobile-only">
                        <a href="https://scholar.google.com/citations?user=wYcrORkAAAAJ&hl=en" target="_blank" title="Google Scholar"><img src="{{ '/assets/icons/scholar.svg' | relative_url }}" alt="Google Scholar" style="width: 1.1rem; height: 1.1rem;"></a>
                        <a href="https://github.com/emranpoh" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                        <a href="mailto:emranpoh@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div class="desktop-buttons">
                <div class="desktop-icons-grid">
                    <a href="https://scholar.google.com/citations?user=wYcrORkAAAAJ&hl=en" target="_blank" title="Google Scholar">
                        <img src="{{ '/assets/icons/scholar.svg' | relative_url }}" alt="Google Scholar">
                    </a>
                    <a href="https://github.com/emranpoh" target="_blank" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/emranpoh/" target="_blank" title="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:emranpoh@gmail.com" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="mobile-buttons" style="display: flex; gap: 0.75rem; margin-bottom: 1rem;">
            <button onclick="document.getElementById('publications').scrollIntoView({behavior: 'smooth'})" style="flex: 1; background: none; border: none; color: #666; font-size: 1rem; cursor: pointer; padding: 0.5rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center; background-color: #f1f3f5; border-radius: 1rem;">
                <span>publications</span>
            </button>
            <button onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'})" style="flex: 1; background: none; border: none; color: #666; font-size: 1rem; cursor: pointer; padding: 0.5rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center; background-color: #f1f3f5; border-radius: 1rem;">
                <span>projects</span>
            </button>
            <a href="https://www.linkedin.com/in/emranpoh/" target="_blank" style="flex: 1; background: none; border: none; color: #666; font-size: 1rem; cursor: pointer; padding: 0.5rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center; background-color: #f1f3f5; border-radius: 1rem; text-decoration: none;">
                <i class="fab fa-linkedin"></i>
                <span>linkedin</span>
            </a>
        </div>
        <p class="hello-text">
            <span style="font-weight: 400; color: #666;">[current + next]</span> i am a research engineer at <a href="https://smuhci.com/">SMU-HCI</a> + incoming phd student at smu hai-lab (sup. <a href="https://jchrisli.github.io/">Li Jiannan</a>)
        </p>
        <p class="hello-text">
            <span style="font-weight: 400; color: #666;">[research]</span> interested in <mark>how hci, ai, and creativity interact</mark>. i <mark>design computational tools</mark> that help novices develop domain expertise, particularly in creative domains.
        </p>
        <p class="hello-text">
            <span style="font-weight: 400; color: #666;">[past]</span> master in computing at <a href="https://synteraction.org/">synteraction lab (prev: nus-hci lab) <sup style="color: #dc2626; position: relative;">†</sup></a> (sup. <a href="https://shengdongzhao.com/">Zhao Shengdong</a>, <a href="https://hcitang.github.io/">Tony Tang</a>), research engineer at <a href="https://www.immersification.org/">Center for Immersification<sup style="color: #2563eb; position: relative;">‡</sup></a> (sup. <a href="https://www.singaporetech.edu.sg/directory/faculty/kyrin-liong-yushan">Kyrin Liong</a>), bsc computer science (1st class) at <a href="https://www.gla.ac.uk/schools/computing/">uni. of glasgow</a> (sup. <a href="https://www.singaporetech.edu.sg/directory/faculty/jeannie-lee">Jeannie Lee</a>)
        </p>
        <p class="hello-text">
            <span style="font-weight: 400; color: #666;">[others]</span> enjoy building and occasionally crashing interplanetary rockets in Kerbal Space Program 🚀
        </p>
        <!-- <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            <span style="font-weight: 400; color: #666;">[other]</span> masters at <a href="https://synteraction.org/">synteraction lab (prev: nus-hci lab) <sup style="color: #dc2626; position: relative;">†</sup></a> and research engineer <a href="https://www.immersification.org/">center for immersification<sup style="color: #2563eb; position: relative;">‡</sup></a>
        </p> -->
    </div>
</section>

{% include news-desktop.html %}
{% include news-mobile.html %}

<section class="projects-section">
    {% include projects-desktop.html %}
</section>

<section class="publications-section">
    {% include publications-desktop.html %}
</section>

<section class="mobile-projects-section">
    {% include projects-mobile.html %}
    <div style="margin-top: 2rem;"></div>
    {% include publications-mobile.html %}
</section>