import React from 'react';
import { personalInfo } from '../data/portfolioData';

type Tech = {
  name: string;
  bg: string;
  mark: React.ReactNode;
};

// Real brand marks rendered as inline SVG, each fits within a 38px-radius badge.
const TECHS: Tech[] = [
  {
    name: 'react',
    bg: '#20232a',
    mark: (
      <g>
        <circle cx="0" cy="0" r="3" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1.6">
          <ellipse rx="19" ry="7" />
          <ellipse rx="19" ry="7" transform="rotate(60)" />
          <ellipse rx="19" ry="7" transform="rotate(120)" />
        </g>
      </g>
    ),
  },
  {
    name: 'js',
    bg: '#F7DF1E',
    mark: (
      <text
        textAnchor="middle"
        y="8"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#1a1a1a"
      >
        JS
      </text>
    ),
  },
  {
    name: 'ts',
    bg: '#3178C6',
    mark: (
      <text
        textAnchor="middle"
        y="8"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#ffffff"
      >
        TS
      </text>
    ),
  },
  {
    name: 'graphql',
    bg: '#ffffff',
    mark: (
      <g transform="scale(1.15)" stroke="#E10098" strokeWidth="1.6" fill="#E10098">
        <g fill="none">
          <polygon points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8" />
          <line x1="0" y1="-16" x2="14" y2="8" />
          <line x1="14" y1="8" x2="-14" y2="8" />
          <line x1="-14" y1="8" x2="0" y2="-16" />
        </g>
        <circle cx="0" cy="-16" r="2.5" />
        <circle cx="14" cy="-8" r="2.5" />
        <circle cx="14" cy="8" r="2.5" />
        <circle cx="0" cy="16" r="2.5" />
        <circle cx="-14" cy="8" r="2.5" />
        <circle cx="-14" cy="-8" r="2.5" />
      </g>
    ),
  },
  {
    name: 'github',
    bg: '#ffffff',
    mark: (
      <g transform="translate(-14 -14) scale(1.17)">
        <path
          fill="#181717"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </g>
    ),
  },
  {
    name: 'postman',
    bg: '#ffffff',
    mark: (
      <g transform="translate(-14 -14) scale(1.17)">
        <path
          fill="#FF6C37"
          d="M23.919 12.81a11.949 11.949 0 0 0-4.21-7.966 11.947 11.947 0 0 0-8.648-2.83A11.935 11.935 0 0 0 .075 13.14a11.94 11.94 0 0 0 2.969 8.57 11.94 11.94 0 0 0 8.102 4.17q.468.046.94.046a11.944 11.944 0 0 0 11.833-13.116zM17.053 8.227a.647.647 0 0 1 .915.914l-3.126 3.126-.914-.914zm-4.732 4.73l-.914-.914.356-.355a.647.647 0 1 1 .915.914zM9.477 15.8l4.176-4.176.914.914-4.176 4.176zm-1.43 1.431L7.133 16.32l.914-.914.914.914zM4.86 16.92l3.187-3.187 1.83 1.83L6.69 18.75l-1.83-1.83z"
        />
      </g>
    ),
  },
];

const ORBIT_RADIUS = 140;
const ORBIT_DURATION = '22s';

const Hero: React.FC = () => {
  const firstName = personalInfo.name.split(' ')[0];

  return (
    <section className="hero" id="about">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">Hey, I'm {firstName} 👋</p>
          <h1 className="hero-title">
            <span className="highlight">Front</span>end
            <br />
            Developer
          </h1>
          <p className="hero-bio">{personalInfo.bio}</p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => { window.location.hash = '#/contact'; }}
            >
              Get In Touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => { window.location.hash = '#/projects'; }}
            >
              Browse Projects
            </button>
          </div>
        </div>

        <div className="hero-illustration">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="200" cy="200" r="180" fill="#fbf3df" />
            <circle
              cx="200"
              cy="200"
              r={ORBIT_RADIUS}
              fill="none"
              stroke="#e1d3b5"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />

            {/* Rotating orbit group */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 200 200"
                to="360 200 200"
                dur={ORBIT_DURATION}
                repeatCount="indefinite"
              />
              {TECHS.map((tech, i) => {
                const angle = (i / TECHS.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const cx = 200 + Math.cos(rad) * ORBIT_RADIUS;
                const cy = 200 + Math.sin(rad) * ORBIT_RADIUS;
                return (
                  <g key={tech.name} transform={`translate(${cx} ${cy})`}>
                    {/* Counter-rotate so the logo stays upright */}
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0"
                        to="-360"
                        dur={ORBIT_DURATION}
                        repeatCount="indefinite"
                      />
                      <circle r="28" fill={tech.bg} stroke="#1a1a1a" strokeOpacity="0.12" strokeWidth="1.5" />
                      {tech.mark}
                    </g>
                  </g>
                );
              })}
            </g>

            {/* Center hub */}
            <circle cx="200" cy="200" r="58" fill="#1a1a1a" />
            <text
              x="200"
              y="208"
              textAnchor="middle"
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight="800"
              fontSize="22"
              fill="#fbf3df"
              letterSpacing="2"
            >
              DEV
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
