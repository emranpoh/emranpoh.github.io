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
        /* padding-left: 0.5rem; */
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
        /* margin-bottom: 1rem; */
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
        margin-top: 1rem;
    }
}
</style>

<section class="w-full">
    <div class="h-64 mb-4 introduction">
        <p class="hello-text"><b>Hi! I'm Emran, a <a href="{{ '/projects' | relative_url }}">UX Researcher</a> <span class="emoji">🧪</span> + Designer <span class="emoji">🎨</span> + Developer <span class="emoji">🧑🏻‍💻</span></b> from <span class="emoji">🇸🇬</span> working on <mark>human-agent and collaborative interactions</mark> under <a href="https://jchrisli.github.io/">Li Jiannan</a> along with HCI crew <span class="emoji">🥂</span> at Singapore Management University. Earned my masters <span class="emoji">🎓</span> from NUS, where I also did research at the <a href="https://synteraction.org/">NUS-HCI Lab<sup style="color: #dc2626; font-size: 1rem; position: relative;">†</sup></a>, and spent time at <a href="https://www.immersification.org/">Center for Immersification<sup style="color: #2563eb; font-size: 1rem; position: relative;">‡</sup></a>. I too enjoy building — and occasionally crashing <span class="emoji">💥</span> — interplanetary rockets <span class="emoji">🚀</span> and playing insanely complicated games. Fancy collaborating or just a chat? Let's talk! <span class="emoji">👋🏻</span></p>
        <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            working on <mark>human-agent interaction</mark> and <mark>creativity-centric research</mark>. phd student at smu hai-lab<sup style="cursor: pointer;" onclick="this.textContent = this.textContent === '*' ? 'SMU' : '*'">*</sup> under <a href="https://jchrisli.github.io/">Li Jiannan</a>
        </p>
        <p class="mobile-hello-text" style="font-size: 1rem; font-weight: 500;">
            prev: @ <a href="https://synteraction.org/">nus-hci lab<sup style="color: #dc2626; position: relative;">†</sup></a> and <a href="https://www.immersification.org/">center for immersification<sup style="color: #2563eb; position: relative;">‡</sup></a>
        </p>
    </div>
</section>

<section class="projects-section">
    {% include projects-selected.html %}
</section>

<section class="mobile-experience-section">
    {% include experience-mobile.html %}
</section>

<section class="mobile-projects-section">
    {% include projects-mobile.html %}
</section>

<section class="mobile-publications-section">
    {% include publications-mobile.html %}
</section>