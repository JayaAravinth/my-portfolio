export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Contact {
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}
