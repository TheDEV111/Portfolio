import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import type { SocialLink } from '@/types';

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/Henryno111", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/@boy_gene_us", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/agukwe-henry", label: "LinkedIn" },
    { icon: Mail, href: "mailto:Henryagukwe01@gmail.com", label: "Email" }
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Henry Agukwe</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer passionate about creating innovative digital solutions 
              and exploring the possibilities of blockchain technology.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Henry Agukwe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
