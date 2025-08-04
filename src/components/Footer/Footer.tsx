// src/components/Footer/Footer.tsx
import React from 'react';

interface FooterProps {
  year?: number;
}

export const Footer: React.FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copy">
          &copy; {year} Brown Industries, LLC. All rights reserved.
        </p>
        <nav className="footer__links">
          <a href="/privacy" className="footer__link">Privacy Policy</a>
          <a href="/terms" className="footer__link">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
