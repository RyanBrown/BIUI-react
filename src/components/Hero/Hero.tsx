// src/components/Hero/Hero.tsx
import React from 'react';

export const Hero: React.FC = () => (
  <section className="hero" aria-label="Hero section">
    {/* Background SVG */}
    <div className="hero__background">
      <svg viewBox="0 0 600 600" role="img" aria-label="Background decoration">
        <path
          d="M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50 Z"
          fill="white"
        />
      </svg>
    </div>

    {/* Content */}
    <div className="hero__content">
      <h1 className="hero__title">
        Build AI-powered apps in minutes
      </h1>
      <p className="hero__subtitle">
        Launch with our SDK, embed advanced search, Q&A, and summarization, all powered by state-of-the-art LLMs.
      </p>
      <a href="#signup" className="hero__cta">
        Get Started for Free
      </a>
    </div>
  </section>
);
