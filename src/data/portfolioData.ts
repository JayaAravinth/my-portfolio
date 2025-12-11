import type { Project, Experience, Skill, Contact } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name 1',
    description: 'A brief description of your project and what problem it solves.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.com',
  },
  {
    id: 2,
    title: 'Project Name 2',
    description: 'Another project showcasing your skills and expertise.',
    technologies: ['React', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project2',
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Software Developer',
    duration: 'Jan 2023 - Present',
    description: 'Describe your role and key achievements here.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    id: 2,
    company: 'Previous Company',
    position: 'Junior Developer',
    duration: 'Jun 2021 - Dec 2022',
    description: 'Describe your previous role and accomplishments.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'REST APIs'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack'],
  },
];

export const contact: Contact = {
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
};

export const personalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with experience in building web applications. I love creating elegant solutions to complex problems.',
};
