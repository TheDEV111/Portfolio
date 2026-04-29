import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '@/constants/social';

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" }
];

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Henry Agukwe</h3>
          <p className="text-gray-400 text-sm">
            Full Stack Developer passionate about creating innovative digital solutions
            and exploring the possibilities of blockchain technology.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
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
                aria-label={social.label}
                className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:bg-zinc-700 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Henry Agukwe. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
