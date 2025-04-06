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
        display: none;
    }
    .introduction .mobile-hello-text {
        display: block;
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
    .profile-location,
    .profile-email {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 0.75rem;
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
        gap: 0.75rem;
    }
    .header-icons a {
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background-color: #f3f4f6;
        border-radius: 0.5rem;
        transition: all 0.2s ease;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
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
    .introduction .hello-text {
        font-size: 0.875rem;
        line-height: 1.5;
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
    .profile-image {
        width: 128px;
        height: 128px;
        border-radius: 0.5rem;
        object-fit: cover;
        border: 2px solid #f3f4f6;
    }
}
</style>

<section class="w-full">
    <div class="h-64 mb-4 introduction">
        <div class="profile-container">
            <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Emran Poh" class="profile-image">
            <div class="profile-info">
                <div class="profile-text">
                    <div class="profile-name">emran poh</div>
                    <div class="profile-title">smu hai+hci phd student</div>
                    <!-- <div class="profile-location">currently at : 🇸🇬</div> -->
                    <div class="profile-email">emranpoh [at] smu.edu.sg</div>
                </div>
                <div class="header-icons">
                    <a href="https://scholar.google.com/citations?user=wYcrORkAAAAJ&hl=en" target="_blank" title="Google Scholar"><img src="{{ '/assets/icons/scholar.svg' | relative_url }}" alt="Google Scholar" style="width: 1.1rem; height: 1.1rem;"></a>
                    <a href="https://github.com/emranpoh" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/emranpoh/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="mailto:emranpoh@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
        <p class="hello-text"><b>Hi! I'm Emran, a <a href="{{ '/projects' | relative_url }}">UX Researcher</a> <span class="emoji">🧪</span> + Designer <span class="emoji">🎨</span> + Developer <span class="emoji">🧑🏻‍💻</span></b> from <span class="emoji">🇸🇬</span> working on <mark>human-agent and collaborative interactions</mark> advised by <a href="https://jchrisli.github.io/">Li Jiannan</a> along with HCI crew <span class="emoji">🥂</span> at Singapore Management University. Earned my masters <span class="emoji">🎓</span> from NUS, where I also did research at the <a href="https://synteraction.org/">NUS-HCI Lab<sup style="color: #dc2626; font-size: 1rem; position: relative;">†</sup></a>, and spent time at <a href="https://www.immersification.org/">Center for Immersification<sup style="color: #2563eb; font-size: 1rem; position: relative;">‡</sup></a>. I too enjoy building — and occasionally crashing <span class="emoji">💥</span> — interplanetary rockets <span class="emoji">🚀</span> and playing insanely complicated games. Fancy collaborating or just a chat? Let's talk! <span class="emoji">👋🏻</span></p>
        <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            <span style="font-weight: 400; color: #666;">[current + next]</span> i am a HCI research engineer at SMU + incoming phd student at smu hai-lab (sup. <a href="https://jchrisli.github.io/">Li Jiannan</a>)
        </p>
        <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            <span style="font-weight: 400; color: #666;">[research]</span> interested in <mark>how hci, ai, and creativity interact</mark>. i <mark>design computational tools</mark> that help novices develop domain expertise, particularly in creative domains.
        </p>
        <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
        <span style="font-weight: 400; color: #666;">[past]</span> bsc computer science (1st class) at <a href="https://www.gla.ac.uk/schools/computing/">uni. of glasgow</a> (sup. <a href="https://www.singaporetech.edu.sg/directory/faculty/jeannie-lee">Jeannie Lee</a>), master in computing at <a href="https://synteraction.org/">nus-hci lab<sup style="color: #dc2626; position: relative;">†</sup></a> (sup. <a href="https://shengdongzhao.com/">Zhao Shengdong</a>, <a href="https://hcitang.github.io/">Tony Tang</a>), research engineer at <a href="https://www.immersification.org/">Center for Immersification<sup style="color: #2563eb; position: relative;">‡</sup></a> (sup. <a href="https://www.singaporetech.edu.sg/directory/faculty/kyrin-liong-yushan">Kyrin Liong</a>)
        </p>
        <!-- <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            <span style="font-weight: 400; color: #666;">[other]</span> masters at <a href="https://synteraction.org/">nus-hci lab<sup style="color: #dc2626; position: relative;">†</sup></a> and research engineer <a href="https://www.immersification.org/">center for immersification<sup style="color: #2563eb; position: relative;">‡</sup></a>
        </p> -->
    </div>
</section>


{% include news-mobile.html %}

<section class="projects-section">
    {% include projects-selected.html %}
</section>

<div style="display: flex; justify-content: right; margin-bottom: 1rem; gap: 0.5rem; font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">
    <span>⭐ selected</span>
    <span>👥 collaborator</span>
    <span>* SMU-HAI</span>
    <span style="color: #dc2626;">† NUS-HCI</span>
    <span style="color: #2563eb;">‡ Immersification</span>
</div>

<section class="mobile-projects-section">
    {% include projects-mobile.html %}
    {% include publications-mobile.html %}
</section>