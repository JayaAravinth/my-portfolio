import React, { memo, lazy, Suspense } from 'react';
import { projects, skills, experience } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = lazy(() => import('./Experience'));
const Skills = lazy(() => import('./Skills'));

const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const stats = [
    { value: '3+', label: 'Years of Experience' },
    { value: String(projects.length).padStart(2, '0'), label: 'Major Projects Shipped' },
    { value: `${skills.reduce((n, s) => n + s.items.length, 0)}+`, label: 'Technologies Mastered' },
    { value: String(experience.length).padStart(2, '0'), label: 'Companies' },
  ];

  return (
    <>
      <section className="section about-section">
        <div
          ref={elementRef}
          className={`about-layout ${isVisible ? 'animate-in' : ''}`}
        >
          <div className="about-intro">
            <span className="about-eyebrow">// hello world</span>
            <h2 className="contact-heading">
              About Me<span className="accent-dot">.</span>
            </h2>
            <p className="contact-description">
              I turn ideas into fast, scalable, pixel-perfect interfaces.
              Here's what I look like in code.
            </p>
          </div>

          <div className="code-card" aria-label="About me code snippet">
            <div className="code-card-header">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-tab">about.ts</span>
            </div>
            <pre className="code-body">
{renderLine(1, <><span className="c-key">const</span> <span className="c-var">developer</span> <span className="c-op">=</span> <span className="c-brace">{'{'}</span></>)}
{renderLine(2, <><span className="c-indent"/><span className="c-prop">name</span><span className="c-op">:</span> <span className="c-str">'Jayalakshmi K'</span><span className="c-op">,</span></>)}
{renderLine(3, <><span className="c-indent"/><span className="c-prop">role</span><span className="c-op">:</span> <span className="c-str">'Frontend Developer'</span><span className="c-op">,</span></>)}
{renderLine(4, <><span className="c-indent"/><span className="c-prop">location</span><span className="c-op">:</span> <span className="c-str">'India'</span><span className="c-op">,</span></>)}
{renderLine(5, <><span className="c-indent"/><span className="c-prop">stack</span><span className="c-op">:</span> <span className="c-brace">[</span><span className="c-str">'React'</span><span className="c-op">,</span> <span className="c-str">'TypeScript'</span><span className="c-op">,</span> <span className="c-str">'Redux'</span><span className="c-op">,</span> <span className="c-str">'GraphQL'</span><span className="c-brace">]</span><span className="c-op">,</span></>)}
{renderLine(6, <><span className="c-indent"/><span className="c-prop">experience</span><span className="c-op">:</span> <span className="c-str">'3+ years'</span><span className="c-op">,</span></>)}
{renderLine(7, <><span className="c-indent"/><span className="c-prop">loves</span><span className="c-op">:</span> <span className="c-brace">[</span><span className="c-str">'clean UI'</span><span className="c-op">,</span> <span className="c-str">'performance'</span><span className="c-op">,</span> <span className="c-str">'scalable systems'</span><span className="c-brace">]</span><span className="c-op">,</span></>)}
{renderLine(8, <><span className="c-indent"/><span className="c-prop">currentFocus</span><span className="c-op">:</span> <span className="c-str">'Enterprise dashboards & data viz'</span><span className="c-op">,</span></>)}
{renderLine(9, <><span className="c-indent"/><span className="c-prop">mantra</span><span className="c-op">:</span> <span className="c-fn">() {'=>'}</span> <span className="c-str">'ship clean, ship fast, ship scalable'</span><span className="c-op">,</span></>)}
{renderLine(10, <><span className="c-brace">{'}'}</span> <span className="c-key">as</span> <span className="c-type">const</span><span className="c-op">;</span></>)}
{renderLine(11, <>&nbsp;</>)}
{renderLine(12, <><span className="c-comment">{'// '}open to remote / hybrid — let's build something great.</span></>)}
            </pre>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-card">
              <span className="stat-index">{String(i + 1).padStart(2, '0')} /</span>
              <span className="stat-corner stat-corner-tr" aria-hidden="true" />
              <span className="stat-corner stat-corner-bl" aria-hidden="true" />
              <div className="stat-value" data-value={s.value}>{s.value}</div>
              <div className="stat-label">
                <span className="stat-dash">—</span> {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <Experience />
        <Skills />
      </Suspense>
    </>
  );
};

function renderLine(n: number, content: React.ReactNode) {
  return (
    <div
      className="code-line"
      key={n}
      style={{ ['--type-delay' as string]: `${(n - 1) * 420}ms` }}
    >
      <span className="code-ln">{n}</span>
      <span className="code-text">{content}</span>
    </div>
  );
}

export default memo(About);
