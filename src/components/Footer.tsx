import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
