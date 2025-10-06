import { ComponentType, ReactNode } from 'react';
import { LucideProps } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  icon?: ComponentType<LucideProps>;
  category: string;
  features: string[];
  challenges: string;
  outcome: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  icon: ComponentType<LucideProps>;
  href: string;
  label: string;
}

export interface NavLink {
  icon: ReactNode;
  path: string;
  label: string;
}

export interface ContactInfo {
  icon: ComponentType<LucideProps>;
  title: string;
  content: string;
}
