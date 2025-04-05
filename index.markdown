---
layout: default
title: emran poh
---

<style>
@media (max-width: 768px) {
    .introduction .hello-text {
        display: none;
    }
    .introduction .mobile-hello-text {
        display: block;
        padding-left: 1rem;
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
    .mobile-projects-section {
        display: block;
    }
}

@media (min-width: 769px) {
    .mobile-projects-section {
        display: none;
    }
    .introduction .mobile-hello-text,
    .introduction .mobile-title {
        display: none;
    }
    .introduction {
        margin-top: 1rem;
    }
}
</style>

<section class="w-full">
    <div class="h-64 mb-4 introduction">
        <p class="hello-text"><b>Hi! I'm Emran, a <a href="{{ '/projects' | relative_url }}">UX Researcher</a> <span class="emoji">🧪</span> + Designer <span class="emoji">🎨</span> + Developer <span class="emoji">🧑🏻‍💻</span></b> from <span class="emoji">🇸🇬</span> working on <mark>human-agent and collaborative interactions</mark> under <a href="https://jchrisli.github.io/">Li Jiannan</a> along with HCI crew <span class="emoji">🥂</span> at Singapore Management University. Earned my masters <span class="emoji">🎓</span> from NUS, where I also did research at the <a href="https://synteraction.org/">NUS-HCI Lab</a>, and spent time at <a href="https://www.immersification.org/">Center for Immersification</a>. I too enjoy building — and occasionally crashing <span class="emoji">💥</span> — interplanetary rockets <span class="emoji">🚀</span> and playing insanely complicated games. Fancy collaborating or just a chat? Let's talk! <span class="emoji">👋🏻</span></p>
        <p class="mobile-title">emran poh</p>
        <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            ux researcher, designer, developer
        </p>
        <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            phd student at smu<sup style="cursor: pointer;" onclick="this.textContent = this.textContent === '*' ? 'SMU' : '*'">*</sup> under <a href="https://jchrisli.github.io/">Li Jiannan</a>
        </p>
        <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            previously at <a href="https://synteraction.org/">nus-hci lab</a> and <a href="https://www.immersification.org/">center for immersification</a>
        </p>
    </div>
</section>

<section class="projects-section">
    {% include projects-selected.html %}
</section>

<section class="mobile-projects-section">
    {% include projects-mobile.html %}
</section> 