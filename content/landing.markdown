---
layout: pages/default
title: Emran Poh
permalink: /
id: landing
description: "CS PhD student at SMU-HAI Lab. Learning, creative tools, and what AI should leave to people."
---

<div class="landing-wrapper">
<div class="landing-container">
  <div class="landing-name">{{ site.title }}</div>
  <div class="landing-subtitle">cs phd @ smu-hai lab</div>
  <div class="landing-tagline">learning, creative tools, and what AI should leave to people</div>
  <div class="landing-email">emran.poh.2025[at]smu.edu.sg</div>
  <div class="landing-buttons-wrap">
  <a href="{{ '/research' | relative_url }}" class="landing-btn landing-btn-research" aria-label="Research">
    <span class="landing-btn-num">1</span>
    <img src="{{ '/assets/images/book.png' | relative_url }}" alt="Research" class="landing-btn-img">
  </a>
  <a href="{{ '/research/show-it-software-guidance' | relative_url }}" class="landing-btn landing-btn-showit" aria-label="Showit CHI 26">
    <span class="landing-btn-num">2</span>
    <img src="{{ '/assets/images/show-it-manuscript.png' | relative_url }}" alt="Showit Manuscript" class="landing-btn-img">
  </a>
  <a href="{{ '/cv' | relative_url }}" class="landing-btn landing-btn-cv" aria-label="CV">
    <span class="landing-btn-num">3</span>
    <img src="{{ '/assets/images/cv.png' | relative_url }}" alt="CV" class="landing-btn-img">
  </a>
  <a href="{{ '/works' | relative_url }}" class="landing-btn landing-btn-works" aria-label="Other works">
    <span class="landing-btn-num">4</span>
    <img src="{{ '/assets/images/laptop.png' | relative_url }}" alt="Other works" class="landing-btn-img">
  </a>
  <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" class="landing-btn landing-btn-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <span class="landing-btn-num">5</span>
    <img src="{{ '/assets/images/contact.png' | relative_url }}" alt="LinkedIn" class="landing-btn-img">
  </a>
  </div>
  <div class="landing-legend">(1) research (2) showit-dontjustsayit (3) cv (4) other works (5) linkedin</div>
</div>
</div>

<style>
.landing-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 1.5rem;
}

@media (min-width: 769px) {
  .landing-wrapper {
    align-items: center;
    justify-content: center;
    padding-top: 0;
  }
}

.landing-container {
  position: relative;
  min-height: 24rem;
  width: 20rem;
  font-family: 'Geist Mono', monospace;
}

.landing-buttons-wrap {
  position: relative;
  width: 20rem;
  height: 29rem;
  display: block;
}

.landing-name {
  font-size: 1.125rem;
  font-weight: 500;
  color: #333;
  text-transform: lowercase;
  margin-bottom: 0.25rem;
}

.landing-subtitle {
  font-size: 0.875rem;
  font-weight: 400;
  color: #666;
  text-transform: lowercase;
  margin-bottom: 0.25rem;
}

.landing-tagline {
  font-size: 0.8125rem;
  font-weight: 400;
  color: #888;
  text-transform: lowercase;
  margin-bottom: 0.25rem;
}

.landing-email {
  font-size: 0.875rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 2rem;
}

.landing-btn {
  position: absolute;
  display: block;
  width: 8rem;
  height: 8rem;
  text-decoration: none;
  cursor: crosshair;
}

.landing-btn-research { top: 0; left: 50%; transform: translateX(-50%); }
.landing-btn-showit { top: 6rem; left: 0; }
.landing-btn-cv { top: 7rem; right: 0; }
.landing-btn-works {
  top: 12rem;
  left: 11rem;
  transform: translateX(-50%);
  width: 12rem;
  height: 12rem;
}

.landing-btn-linkedin {
  top: 14rem;
  left: 3rem;
  transform: translateX(-50%);
  width: 4rem;
  height: 4rem;
}

.landing-btn-num {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #666;
  z-index: 1;
}

.landing-btn-works .landing-btn-num {
  top: 3rem;
  left: 2.5rem;
}

.landing-btn-linkedin .landing-btn-num {
  top: 2rem;
  left: 0rem;
}

.landing-btn-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.landing-legend {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: #666;
  text-transform: lowercase;
}

@media (max-width: 768px) {
  .landing-wrapper {
    align-items: center;
    /* Constrain to viewport so the div doesn’t exceed screen height (desktop-wrapper has 32px top + 40px bottom padding) */
    height: 100%;
    min-height: 0;
    overflow: hidden;
    padding: 0.5rem 0 1rem;
    box-sizing: border-box;
  }
}

/* Prevent scroll on landing page (mobile/tablet) - body and wrapper must fit viewport */
@media (max-width: 768px) {
  body.page-landing {
    overflow: hidden;
    height: 100dvh;
  }
  body.page-landing .desktop-wrapper {
    height: 100dvh;
    min-height: 100dvh;
    max-height: 100dvh;
    overflow: hidden;
    padding: 1rem;
  }
  body.page-landing main.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  body.page-landing .content-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
}
</style>
