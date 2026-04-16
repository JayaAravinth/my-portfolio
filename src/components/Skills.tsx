import React, { memo } from 'react';
import { skills } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CATEGORY_META: Record<string, { icon: string; accent: string; span: string }> = {
  'Languages':                 { icon: '◈', accent: 'from-indigo',  span: 'span-1' },
  'Frameworks & Libraries':    { icon: '⚛', accent: 'from-sky',     span: 'span-2' },
  'Tools & Platforms':         { icon: '⚙', accent: 'from-emerald', span: 'span-1' },
  'Methodologies & Practices': { icon: '△', accent: 'from-fuchsia', span: 'span-2' },
};

interface SkillsProps {
  compact?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ compact = false }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  if (compact) {
    const allItems = skills.flatMap((cat) => cat.items);
    const loop = [...allItems, ...allItems];
    return (
      <section className="section" id="skills">
        <h2 className="section-title">Skills</h2>
        <p className="skills-tagline">The tools in my daily kit — drag to explore, hover to pause.</p>
        <div
          ref={elementRef}
          className={`skills-marquee ${isVisible ? 'animate-in' : ''}`}
          aria-label="Skills carousel"
        >
          <div className="marquee-track">
            {loop.map((item, idx) => (
              <span key={`${item}-${idx}`} className="marquee-chip">
                <span className="marquee-dot" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="skills-marquee skills-marquee-reverse" aria-hidden="true">
          <div className="marquee-track">
            {loop.slice().reverse().map((item, idx) => (
              <span key={`${item}-r-${idx}`} className="marquee-chip marquee-chip-outline">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="skills">
      <div className="skills-header">
        <h2 className="section-title">Skills</h2>
      </div>

      <div
        ref={elementRef}
        className={`bento-grid ${isVisible ? 'animate-in' : ''}`}
      >
        {skills.map((cat, cIdx) => {
          const meta = CATEGORY_META[cat.category] ?? { icon: '•', accent: 'from-indigo', span: 'span-1' };
          return (
            <div
              key={cat.category}
              className={`bento-card ${meta.accent} ${meta.span}`}
              style={{ ['--card-delay' as string]: `${cIdx * 120}ms` }}
            >
              <div className="bento-card-inner">
                <div className="bento-head">
                  <span className="bento-icon" aria-hidden="true">{meta.icon}</span>
                  <h3 className="bento-title">{cat.category}</h3>
                </div>
                <ul className="bento-chips">
                  {cat.items.map((item, iIdx) => (
                    <li
                      key={item}
                      className="bento-chip"
                      style={{ ['--chip-delay' as string]: `${cIdx * 120 + iIdx * 60 + 220}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="bento-count">{cat.items.length.toString().padStart(2, '0')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(Skills);
