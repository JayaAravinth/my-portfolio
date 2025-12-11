import React from 'react';
import { experience } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experience.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-position">{exp.position}</h3>
              <span className="experience-duration">{exp.duration}</span>
            </div>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-description">{exp.description}</p>
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

export default Experience;
