import React, { memo } from 'react';
import { projects } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div
        ref={elementRef}
        className={`projects-grid ${isVisible ? 'animate-in' : ''}`}
      >
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            {project.summary && <p className="project-summary">{project.summary}</p>}
            <ul className="project-highlights">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              ) : (
                <span className="project-link-unavailable">Code available on request (NDA)</span>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);
