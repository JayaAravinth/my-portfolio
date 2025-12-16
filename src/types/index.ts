export interface Project {
  id: number;
  title: string;
  summary?: string;
  description?: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  role?: string;
  duration: string;
  description?: string;
  highlights: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Contact {
  email: string;
  location: string;
  availability: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}
