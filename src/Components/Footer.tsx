import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-zinc-900">
      
      {/* Pre-Footer CTA */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-24">
        <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
          YOUR TURN TO <span className="text-brand">SPEAK</span>
        </h2>
        <p className="font-sans text-zinc-400 text-sm md:text-base uppercase tracking-widest font-semibold mb-10 max-w-lg mx-auto leading-relaxed">
          GET IN TOUCH FOR FULL STACK DEVELOPMENT, SMART CONTRACT AUDITS, OR TO DISCUSS YOUR NEXT BIG IDEA.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-black font-sans font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-white transition-colors"
          >
            Let's Talk
          </motion.button>
        </Link>
      </div>

      {/* Massive Typographic Footer Logo */}
      <div className="w-full overflow-hidden flex justify-center border-b border-zinc-900 pb-12 mb-12 select-none">
        <h1 className="font-display text-[25vw] leading-[0.75] text-white tracking-tighter text-center">
          HENRY
        </h1>
      </div>

      {/* Footer Links & Copyright */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Left Column (Nav) */}
        <div className="flex flex-col space-y-4 font-sans text-xs uppercase tracking-widest font-bold text-zinc-500">
          <Link to="/about" className="hover:text-brand transition-colors">About</Link>
          <Link to="/projects" className="hover:text-brand transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
        </div>

        {/* Center Column (Copyright & Legal placeholder) */}
        <div className="flex flex-col items-center justify-center space-y-4 font-sans text-xs uppercase tracking-widest font-bold text-zinc-500">
          <p>© {new Date().getFullYear()} Henry Agukwe. All Rights Reserved.</p>
        </div>

        {/* Right Column (Socials) */}
        <div className="flex flex-col space-y-4 font-sans text-xs uppercase tracking-widest font-bold text-zinc-500 md:items-end">
          <a href="https://github.com/TheDEV111" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/henry-agukwe" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">Twitter</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
