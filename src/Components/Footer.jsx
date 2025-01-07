import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/username", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/username", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/username", label: "LinkedIn" },
    { icon: Mail, href: "mailto:email@example.com", label: "Email" }
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              Developer<span className="text-emerald-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Building innovative web solutions with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Agukwe Henry Chukwuebuka. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;