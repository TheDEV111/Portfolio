import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import type { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: "https://github.com/TheDEV111", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/henry-agukwe", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/@boy_gene_us", label: "Twitter" },
  { icon: Mail, href: "mailto:Henryagukwe01@gmail.com", label: "Email" }
];

export const socialLinksNoEmail = socialLinks.slice(0, 3);
