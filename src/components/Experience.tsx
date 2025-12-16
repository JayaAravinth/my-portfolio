import React, { memo } from 'react';
import { experience } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div
        ref={elementRef}
        className={`experience-list ${isVisible ? 'animate-in' : ''}`}
      >
        {experience.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-position">{exp.position}</h3>
              <span className="experience-duration">{exp.duration}</span>
            </div>
            <h4 className="experience-company">{exp.company}</h4>
            {exp.role && <p className="experience-role">{exp.role}</p>}
            <ul className="experience-highlights">
              {exp.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <div className="tech-tags">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Experience);
