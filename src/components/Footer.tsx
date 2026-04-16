import React from 'react';
import { personalInfo, contact } from '../data/portfolioData';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.42.36.8 1.08.8 2.18v3.23c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isContactRoute = typeof window !== 'undefined' && window.location.hash === '#/contact';

  const goHome = (id: string) => {
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
  };

  const navigateTo = (hash: string) => { window.location.hash = hash; };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <ul className="footer-nav">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); goHome('home'); }}>Home</a></li>
            <li><a href="#/projects" onClick={(e) => { e.preventDefault(); navigateTo('#/projects'); }}>Projects</a></li>
            <li><a href="#/about" onClick={(e) => { e.preventDefault(); navigateTo('#/about'); }}>About</a></li>
            <li>
              <a
                href="#/contact"
                className={isContactRoute ? 'is-active' : ''}
                onClick={(e) => { e.preventDefault(); navigateTo('#/contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="footer-socials">
            {contact.github && (
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            )}
            {contact.linkedin && (
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-cta">
            <h3 className="footer-cta-title">Interested in working together?</h3>
            <div className="footer-cta-actions">
              <button className="btn btn-primary" onClick={() => navigateTo('#/contact')}>Get In Touch</button>
              <button className="btn btn-secondary" onClick={() => navigateTo('#/projects')}>Browse Projects</button>
            </div>
          </div>

          <div className="footer-copy">
            <p>©{currentYear} All Rights Reserved.</p>
            <p>Made with <span className="heart">♥</span> by {personalInfo.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
