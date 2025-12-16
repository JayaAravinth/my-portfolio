import React, { memo, useMemo, lazy, Suspense } from 'react';
import { contact } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Lazy load QRCode component for better performance
const QRCodeSVG = lazy(() =>
  import('qrcode.react').then(module => ({ default: module.QRCodeSVG }))
);

const Contact: React.FC = () => {
  const resumeUrl = useMemo(() => `${window.location.origin}/resume.pdf`, []);
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div
        ref={elementRef}
        className={`contact-content ${isVisible ? 'animate-in' : ''}`}
      >
        <p className="contact-description">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="contact-info-grid">
          <div className="contact-info-item">
            <span className="info-label">Location:</span>
            <span className="info-value">{contact.location}</span>
          </div>
          <div className="contact-info-item">
            <span className="info-label">Availability:</span>
            <span className="info-value">{contact.availability}</span>
          </div>
        </div>

        <div className="contact-links">
          <a href={`mailto:${contact.email}`} className="contact-link">
            Email: {contact.email}
          </a>
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub Profile
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn Profile
            </a>
          )}
        </div>

        <div className="resume-section">
          <h3 className="resume-title">Download Resume</h3>
          <div className="resume-download">
            <Suspense fallback={<div style={{ minHeight: '200px' }}>Loading...</div>}>
              <div className="qr-code-container">
                <QRCodeSVG
                  value={resumeUrl}
                  size={200}
                  level="H"
                />
                <p className="qr-instruction">Scan to download</p>
              </div>
            </Suspense>
            <a
              href="/resume.pdf"
              download="Jayalakshmi_K_Resume.pdf"
              className="download-button"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
