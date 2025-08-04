// src/App/App.tsx
import { Hero } from '../components/Hero/Hero';
import { Features } from '../components/Feature/Features';
import { CTA } from '../components/CTA/CTA';
import { Footer } from '../components/Footer/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
