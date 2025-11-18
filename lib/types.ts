export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages' | 'environnement';
  icon?: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: 'fulltime' | 'freelance' | 'internship' | 'volunteer' | 'parttime';
  startDate: string;
  endDate: string | 'present';
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Recommendation {
  id: string;
  author: string;
  position: string;
  company: string;
  relationship: string; 
  date: string; // Format: YYYY-MM
  text: string;
  linkedinUrl?: string;
  avatar?: string;
}