import React, { memo, useMemo, lazy, Suspense } from 'react';
import { contact } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const QRCodeSVG = lazy(() =>
  import('qrcode.react').then(module => ({ default: module.QRCodeSVG }))
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Contact: React.FC = () => {
  const resumeUrl = useMemo(() => `${window.location.origin}/resume.pdf`, []);
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="section contact-section" id="contact">
      <div
        ref={elementRef}
        className={`contact-layout ${isVisible ? 'animate-in' : ''}`}
      >
        <div className="contact-left">
          <h2 className="contact-heading">
            Get In Touch<span className="accent-dot">.</span>
          </h2>
          <p className="contact-description">
            Looking to partner or work together? Reach out through the links below
            and I'll get back to you in the next 48 hours.
          </p>

          <div className="contact-rows">
            <a href={`mailto:${contact.email}`} className="contact-row">
              <span className="contact-icon-circle"><MailIcon /></span>
              <span className="contact-row-text">{contact.email}</span>
            </a>

            <a href={`tel:+91${contact.phone}`} className="contact-row">
              <span className="contact-icon-circle"><PhoneIcon /></span>
              <span className="contact-row-text">+91 {String(contact.phone).replace(/(\d{5})(\d{5})/, '$1 $2')}</span>
            </a>
          </div>

        </div>

        <div className="contact-right">
          <div className="profile-ring">
            <img src="/portfolio-image.jpg" alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="resume-block">
        <h3 className="resume-title">Download Resume</h3>
        <p className="resume-subtitle">Scan the QR or click the button below</p>
        <div className="resume-row">
          <Suspense fallback={<div className="qr-loading">Loading...</div>}>
            <div className="qr-box">
              <QRCodeSVG value={resumeUrl} size={140} level="H" />
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
    </section>
  );
};

export default memo(Contact);
