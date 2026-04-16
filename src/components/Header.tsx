import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const go = () => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    if (window.location.hash) {
      window.location.hash = '';
      setTimeout(go, 50);
    } else {
      go();
    }
    setIsMenuOpen(false);
  };

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#" className="logo" aria-label={`${personalInfo.name} — Developer`}>
          <span className="logo-mark" aria-hidden="true">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-initial">J</span>
            <span className="logo-bracket">/&gt;</span>
          </span>
          <span className="logo-text">
            Jayalakshmi<span className="logo-cursor">_</span>
          </span>
        </a>

        {/* Navigation Links (center) */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#/projects" onClick={(e) => { e.preventDefault(); navigateTo('#/projects'); }}>Projects</a></li>
          <li><a href="#/about" onClick={(e) => { e.preventDefault(); navigateTo('#/about'); }}>About</a></li>
        </ul>

        {/* Contact icon (end) */}
        <button
          className="contact-icon-btn"
          onClick={() => navigateTo('#/contact')}
          aria-label="Contact"
          title="Contact"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </button>

        {/* Hamburger Menu Button (mobile only) */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
