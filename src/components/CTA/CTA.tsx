// src/components/CTA/CTA.tsx
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section id="signup" className="cta" aria-label="Call to action">
      <div className="cta__content">
        <h2 className="cta__title">
          Ready to take off?
        </h2>
        <p className="cta__subtitle">
          Start your journey with biui today.
        </p>
        <button type="button" className="cta__button">
          Start Here
        </button>
      </div>
    </section>
  );
};

export default CTA;
