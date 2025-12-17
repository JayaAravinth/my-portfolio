import { memo } from 'react';

export const CodeIcon = memo(() => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#glow)">
      <path d="M20 15L8 30L20 45" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 15L52 30L40 45" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 10L28 50" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round"/>
    </g>
    <defs>
      <linearGradient id="gradient1" x1="8" y1="15" x2="52" y2="45" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#84cc16"/>
      </linearGradient>
      <linearGradient id="gradient2" x1="28" y1="10" x2="32" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#84cc16"/>
        <stop offset="1" stopColor="#10b981"/>
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
));

export const RocketIcon = memo(() => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#glow-rocket)">
      <path d="M30 10C30 10 40 15 45 25C50 35 50 40 50 40L40 50C40 50 35 50 25 45C15 40 10 30 10 30L20 20C20 20 25 15 30 10Z" stroke="url(#gradient-rocket)" strokeWidth="2.5" fill="rgba(16, 185, 129, 0.1)"/>
      <circle cx="35" cy="25" r="5" fill="url(#gradient-rocket)"/>
      <path d="M20 50L10 60M25 45L15 55M30 40L20 50" stroke="url(#gradient-rocket)" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <linearGradient id="gradient-rocket" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10b981"/>
        <stop offset="1" stopColor="#84cc16"/>
      </linearGradient>
      <filter id="glow-rocket" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
));

export const LightbulbIcon = memo(() => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#glow-bulb)">
      <path d="M30 10C22 10 16 16 16 24C16 29 19 33 22 36V42C22 44 24 46 26 46H34C36 46 38 44 38 42V36C41 33 44 29 44 24C44 16 38 10 30 10Z" stroke="url(#gradient-bulb)" strokeWidth="2.5" fill="rgba(132, 204, 22, 0.1)"/>
      <path d="M26 50H34M30 46V50" stroke="url(#gradient-bulb)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M30 18V22M20 24H16M44 24H40M22 15L19 12M38 15L41 12" stroke="url(#gradient-bulb)" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <linearGradient id="gradient-bulb" x1="16" y1="10" x2="44" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#84cc16"/>
        <stop offset="1" stopColor="#10b981"/>
      </linearGradient>
      <filter id="glow-bulb" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
));

export const SparkleIcon = memo(() => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#glow-sparkle)">
      <path d="M20 5L22 18L20 35L18 18L20 5Z" fill="url(#gradient-sparkle)"/>
      <path d="M5 20L18 22L35 20L18 18L5 20Z" fill="url(#gradient-sparkle)"/>
      <path d="M10 10L15 20L10 30L5 20L10 10Z" fill="url(#gradient-sparkle)" opacity="0.6"/>
      <path d="M30 10L35 20L30 30L25 20L30 10Z" fill="url(#gradient-sparkle)" opacity="0.6"/>
    </g>
    <defs>
      <linearGradient id="gradient-sparkle" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#84cc16"/>
        <stop offset="0.5" stopColor="#10b981"/>
        <stop offset="1" stopColor="#059669"/>
      </linearGradient>
      <filter id="glow-sparkle" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
));

CodeIcon.displayName = 'CodeIcon';
RocketIcon.displayName = 'RocketIcon';
LightbulbIcon.displayName = 'LightbulbIcon';
SparkleIcon.displayName = 'SparkleIcon';
