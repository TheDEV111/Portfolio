import { ComponentType, ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  icon?: ComponentType<{ className?: string }>;
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
  icon: ComponentType<{ className?: string; size?: number }>;
  href: string;
  label: string;
}

export interface NavLink {
  icon: ReactNode;
  path: string;
  label: string;
}

export interface ContactInfo {
  icon: ComponentType<{ className?: string }>;
  title: string;
  content: string;
}
