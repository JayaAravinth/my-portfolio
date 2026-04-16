import React, { memo } from 'react';
import { projects } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsProps {
  detailed?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ detailed = false }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  if (detailed) {
    return (
      <section className="section" id="projects">
        <div className="projects-intro">
          <h2 className="contact-heading">
            Projects<span className="accent-dot">.</span>
          </h2>
          <p className="contact-description">
            A deeper look at the work I've built — the problem, the stack, and the impact.
          </p>
        </div>

        <div
          ref={elementRef}
          className={`projects-grid ${isVisible ? 'animate-in' : ''}`}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card project-card-detailed">
              <h3 className="project-title">{project.title}</h3>
              {project.summary && <p className="project-summary">{project.summary}</p>}
              {project.description && <p className="project-description">{project.description}</p>}

              <h4 className="project-subhead">Key Highlights</h4>
              <ul className="project-highlights">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>

              <h4 className="project-subhead">Tech Stack</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                ) : (
                  <span className="project-link-unavailable">Code available on request (NDA)</span>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div
        ref={elementRef}
        className={`feature-list ${isVisible ? 'animate-in' : ''}`}
      >
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="feature-card"
            style={{ ['--delay' as string]: `${i * 140}ms` }}
          >
            <div className="feature-meta">
              <span className="feature-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="feature-status">
                <span className="feature-status-dot" /> {project.githubUrl ? 'open source' : 'client project'}
              </span>
            </div>

            <div className="feature-body">
              <h3 className="feature-title">{project.title}</h3>
              <div className="feature-rule" />
              {project.summary && <p className="feature-summary">{project.summary}</p>}

              <div className="feature-stack">
                {project.technologies.map((t, idx) => (
                  <React.Fragment key={t}>
                    {idx > 0 && <span className="feature-stack-sep">·</span>}
                    <span className="feature-stack-item">{t}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="feature-cta" aria-hidden="true">
              <span className="feature-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);
