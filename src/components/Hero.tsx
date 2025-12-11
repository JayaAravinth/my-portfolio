import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">{personalInfo.name}</span>
        </h1>
        <h2 className="hero-subtitle">{personalInfo.title}</h2>
        <p className="hero-bio">{personalInfo.bio}</p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
