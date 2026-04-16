import React, { memo } from 'react';
import { experience, personalInfo } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MergedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M5 3.254V3.25v.005a.75.75 0 1 1 0-.005v.004zm.45 1.9a2.25 2.25 0 1 0-1.95.218v5.256a2.25 2.25 0 1 0 1.5 0V7.123A5.735 5.735 0 0 0 9.25 9h1.378a2.251 2.251 0 1 0 0-1.5H9.25a4.25 4.25 0 0 1-3.8-2.346zM12.75 9a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm-8.5 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
  </svg>
);

const GitBranchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
  </svg>
);

const CommitIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5zM8 10a2 2 0 1 0-.001-4.001A2 2 0 0 0 8 10z" />
  </svg>
);

const DotIcon = () => (
  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" aria-hidden="true">
    <circle cx="3" cy="3" r="3" />
  </svg>
);

const makeSha = (id: number, suffix = '') => `${(id * 3533).toString(16).padStart(7, '0').slice(0, 7)}${suffix}`;

const LABEL_COLORS: Record<string, string> = {
  React: '#61dafb',
  TypeScript: '#3178c6',
  GraphQL: '#e535ab',
  Redux: '#764abc',
  'Redux-Saga': '#93cbff',
  GitHub: '#24292f',
  Jira: '#0052cc',
};

interface ExperienceProps {
  compact?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ compact = false }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const authorHandle = personalInfo.name.toLowerCase().split(' ')[0];

  if (compact) {
    return (
      <section className="section" id="experience">
        <h2 className="section-title">Experience</h2>
        <div
          ref={elementRef}
          className={`exp-journey ${isVisible ? 'animate-in' : ''}`}
        >
          {experience.map((exp, i) => (
            <article key={exp.id} className="journey-row" style={{ ['--delay' as string]: `${i * 150}ms` }}>
              <aside className="journey-date">
                <span className="journey-duration">{exp.duration}</span>
                {exp.role && <span className="journey-role">{exp.role}</span>}
              </aside>
              <div className="journey-rail">
                <span className="journey-dot" aria-hidden="true" />
                <span className="journey-line" aria-hidden="true" />
              </div>
              <div className="journey-body">
                <h3 className="journey-position">{exp.position}</h3>
                <p className="journey-company">{exp.company}</p>
                <ul className="journey-points">
                  {exp.highlights.slice(0, 3).map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
                <div className="journey-stack">
                  {exp.technologies.map((t) => (
                    <span key={t} className="journey-tech">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="experience">
      <div className="exp-head">
        <h2 className="section-title">Experience</h2>
      </div>

      <div
        ref={elementRef}
        className={`pr-list ${isVisible ? 'animate-in' : ''}`}
      >
        {experience.map((exp, i) => (
          <article key={exp.id} className="pr-card">
            <header className="pr-header">
              <div className="pr-title-row">
                <span className="pr-badge">
                  <MergedIcon /> Merged
                </span>
                <h3 className="pr-title">
                  {exp.position}
                  <span className="pr-number"> #{String(i + 1).padStart(3, '0')}</span>
                </h3>
              </div>
              <div className="pr-meta-row">
                <span className="pr-meta-item">
                  <span className="pr-avatar">{personalInfo.name.charAt(0)}</span>
                  <span className="pr-handle">@{authorHandle}</span>
                </span>
                <span className="pr-meta-sep"><DotIcon /></span>
                <span className="pr-meta-item pr-duration-text">
                  opened · <strong>{exp.duration}</strong>
                </span>
                <span className="pr-meta-sep"><DotIcon /></span>
                <span className="pr-meta-item">
                  <GitBranchIcon />
                  <code className="pr-branch">main ← {exp.company.toLowerCase().split(' ')[0]}</code>
                </span>
              </div>
            </header>

            <div className="pr-body">
              <div className="pr-description">
                <div className="pr-desc-row">
                  <span className="pr-desc-label">Company</span>
                  <span className="pr-desc-value">{exp.company}</span>
                </div>
                {exp.role && (
                  <div className="pr-desc-row">
                    <span className="pr-desc-label">Role</span>
                    <span className="pr-desc-value">{exp.role}</span>
                  </div>
                )}
              </div>

              <div className="pr-commits">
                <div className="pr-commits-head">
                  <CommitIcon />
                  <span>{exp.highlights.length} commits shipped</span>
                </div>
                <ul className="pr-commit-list">
                  {exp.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="pr-commit"
                      style={{ ['--delay' as string]: `${idx * 90}ms` }}
                    >
                      <code className="pr-sha">{makeSha(exp.id, String.fromCharCode(97 + idx))}</code>
                      <span className="pr-diff">+</span>
                      <span className="pr-commit-msg">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <footer className="pr-footer">
              <span className="pr-labels-head">Labels:</span>
              <div className="pr-labels">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="pr-label"
                    style={{
                      ['--label-color' as string]: LABEL_COLORS[tech] ?? '#6b7280',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(Experience);
