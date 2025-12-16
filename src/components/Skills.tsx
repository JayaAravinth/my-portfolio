import React, { memo } from 'react';
import { skills } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div
        ref={elementRef}
        className={`skills-grid ${isVisible ? 'animate-in' : ''}`}
      >
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{skillCategory.category}</h3>
            <div className="skill-items">
              {skillCategory.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Skills);
