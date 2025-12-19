import type { Project, Experience, Skill, Contact } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "HR Management System",
    summary: "Internal web application for managing employee profiles, work status, and salary information",
    highlights: [
      "Built comprehensive HR dashboard to manage 500+ employee profiles with real-time updates",
      "Implemented Role-Based Access Control (RBAC) for secure data access across departments",
      "Designed responsive UI using Material-UI, improving user satisfaction by 40%",
      "Integrated Redux for centralized state management, reducing data inconsistencies",
      "Achieved 95% test coverage using Jest and React Testing Library",
    ],
    technologies: ["React", "Redux", "Material-UI"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    id: 2,
    title: 'Resilient+ Supply Chain Monitoring',
    summary: 'Enterprise dashboard for US Automotive client to monitor supplier and parts risk metrics',
    highlights: [
      "Developed interactive dashboards to monitor 1000+ suppliers and parts with real-time risk metrics",
      "Implemented GraphQL + Apollo Client for efficient data fetching, reducing load times by 50%",
      "Built data visualization components using D3.js for supply chain insights",
      "Created real-time alert system for supply chain disruptions, improving response time",
      "Optimized Redux-Saga workflows for complex async operations and side effects",
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Redux-Saga', 'Apollo Client'],
    githubUrl: '',
    liveUrl: '',
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    company: 'Inforios Softwares Technology Pvt Ltd',
    position: 'Software Developer',
    role: 'Frontend (React.js)',
    duration: 'Sep 2022 - Present',
    highlights: [
      'Developed scalable React applications using TypeScript, Redux-Saga, and GraphQL for global clients',
      'Built reusable UI components and design systems, improving development speed by 30%',
      'Optimized state management and data fetching strategies, reducing API calls and improving performance',
      'Implemented complex data visualizations and interactive dashboards for supply chain monitoring',
      'Collaborated with cross-functional teams in Agile/Scrum environment, participating in daily standups and sprint planning',
      'Conducted code reviews and mentored junior developers on React best practices and TypeScript patterns',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Redux', 'Redux-Saga', 'GitHub', 'Jira'],
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend Core',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React.js', 'Redux', 'Redux-Saga', 'TanStack Query'],
  },
  {
    category: 'State Management',
    items: ['Redux', 'Redux-Saga', 'Redux Toolkit', 'Context API'],
  },
  {
    category: 'APIs & Data Integration',
    items: ['REST APIs', 'GraphQL',],
  },
  {
    category: 'UI & Styling',
    items: ['Material-UI (MUI)', 'PrimeReact', 'Bootstrap', 'Styled Components', 'CSS Modules', 'Sass/SCSS'],
  },
  {
    category: 'Testing & Quality',
    items: ['Jest', 'React Testing Library', 'Unit Testing'],
  },
  {
    category: 'Tools & Practices',
    items: ['GitHub', 'Jira', 'VS Code', 'npm/yarn'],
  },
  {
    category: 'Development Practices',
    items: ['Agile/Scrum', 'Component-Driven Development', 'Performance Optimization'],
  },
];

export const contact: Contact = {
  email: 'jayaaravinth1001@gmail.com',
  location: 'India (Open to Remote)',
  availability: 'Immediate',
  github: 'https://github.com/JayaAravinth',
  linkedin: 'https://www.linkedin.com/in/jayalakshmi27011998',
};

export const personalInfo = {
  name: 'Jayalakshmi. K',
  title: 'Frontend Developer | React.js • TypeScript • Redux',
  bio: 'Frontend Developer with 3+ years of experience building scalable, high-performance web applications using React, TypeScript, and Redux. Specialized in dashboards, data visualization, and enterprise UI solutions for global clients.',
};
