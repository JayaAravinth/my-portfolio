import type { Project, Experience, Skill, Contact } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "HR Management System (Internal Project)",
    description: "Developed a web-based HR application to manage employee profiles, work status, and salary information, significantly improving administrative efficiency. Designed and implemented user-friendly interfaces using React.js, Redux, and Material-UI, resulting in improved usability and user engagement. Implemented secure data handling practices and Role-Based Access Control (RBAC) to ensure data privacy and compliance with organizational standards.",
    technologies: ["React", "Redux", "Material-UI",],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com"
  },
  {
    id: 2,
    title: 'Resilient+ (Client Project – US Automotive Sector)',
    description: 'Developed interactive dashboards to monitor supplier and part data, including risk metrics, enabling proactive supply chain risk management. Utilized GraphQL and Apollo Client for efficient data fetching and state management to ensure seamless performance and scalability across modules. Designed intuitive data visualizations and implemented real-time alerts, improving visibility, responsiveness, and decision-making in supply chain operations.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Redux-Saga'],
    githubUrl: 'https://github.com/yourusername/project2',
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    company: 'Inforios Softwares Technology Pvt Ltd',
    position: 'Software Developer',
    duration: 'Sep 2022 - Present',
    description: 'Developing and maintaining scalable web applications using React, TypeScript, GraphQL, and Redux-Saga. Collaborated closely with cross-functional teams to implement new features, improve UI performance, and enhance overall user experience. Played a key role in optimizing state management, reducing API load, and building reusable components that improved development efficiency. Actively participated in daily scrum meetings, sprint planning, and retrospective sessions to ensure smooth delivery and alignment across teams. Contributed to code reviews, best practices, and agile processes to deliver high-quality releases on time.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Redux', 'Redux-Saga', 'GitHub', 'Jira'],
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React.js', 'Redux', 'Redux-Saga', 'TanStack Query (React Query)', 'REST APIs', 'GraphQL',],
  },
  {
    category: 'UI Libraries / Styling Tools',
    items: ['Material-UI (MUI)', 'PrimeReact', 'Bootstrap', 'Styled Components', 'Responsive Web Design', 'UI/UX Best Practices'],
  },
  {
    category: 'Tools & Practices',
    items: ['GitHub', 'Jest', 'Jira', 'Agile / Scrum', 'Component-Driven Development'],
  },
];

export const contact: Contact = {
  email: 'jayaaravinth1001@gmail.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/jayalakshmi27011998',
};

export const personalInfo = {
  name: 'Jayalakshmi K',
  title: 'React Web Developer',
  bio: 'Passionate developer with hands-on experience building scalable, user-focused web applications. I enjoy turning complex requirements into clean, efficient, and elegant solutions while continuously learning and improving my craft.',
};
