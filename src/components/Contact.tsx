import React from 'react';
import { contact } from '../data/portfolioData';

const Contact: React.FC = () => {
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
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
