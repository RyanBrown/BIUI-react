// src/components/Feature/Features.tsx
import React from 'react';

const features = [
  { title: 'Instant search', desc: 'Search your docs with natural language.' },
  { title: 'Rich embeddings', desc: 'Vector-based retrieval at scale.' },
  { title: 'Customizable UI', desc: 'Style to match your brand.' },
];

export const Features: React.FC = () => (
  <section className="features">
    <div className="features__container">
      <div className="features__grid">
        {features.map((feature, index) => (
          <div key={feature.title} className="features__card">
            <h3 className="features__card-title">{feature.title}</h3>
            <p className="features__card-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
