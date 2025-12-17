import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { CodeIcon, RocketIcon, SparkleIcon } from './DecorativeIcons';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="about">
      {/* Floating decorative icons */}
      <div className="hero-decoration hero-decoration-1">
        <CodeIcon />
      </div>
      <div className="hero-decoration hero-decoration-2">
        <RocketIcon />
      </div>
      <div className="hero-decoration hero-decoration-3">
        <SparkleIcon />
      </div>
      <div className="hero-decoration hero-decoration-4">
        <SparkleIcon />
      </div>

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
            View Projects
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
