import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { contact } from '../data/portfolioData';

const Contact: React.FC = () => {
  const resumeUrl = `${window.location.origin}/resume.pdf`;

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-description">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`} className="contact-link">
            Email: {contact.email}
          </a>
          {/* {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
          )} */}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          )}
        </div>

        <div className="resume-section">
          <h3 className="resume-title">Download Resume</h3>
          <div className="resume-download">
            <div className="qr-code-container">
              <QRCodeSVG
                value={resumeUrl}
                size={200}
                level="H"
                includeMargin={true}
              />
              <p className="qr-instruction">Scan to download</p>
            </div>
            <a
              href="/resume.pdf"
              download="Jayalakshmi_K_Resume.pdf"
              className="download-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
