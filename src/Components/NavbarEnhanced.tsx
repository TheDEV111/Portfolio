import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const NavbarEnhanced: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/about", label: "ABOUT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14 bg-zinc-900/80 rounded-full px-6 border border-zinc-800 backdrop-blur-lg">
          
          {/* Left: Menu Toggle & Socials */}
          <div className="flex items-center space-x-6 flex-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 text-white hover:text-brand transition-colors font-sans text-sm tracking-widest font-semibold uppercase"
            >
              <span>MENU</span>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="hidden lg:flex items-center space-x-4 text-zinc-400">
              <a href="https://github.com/TheDEV111" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub size={18}/></a>
              <a href="https://linkedin.com/in/henry-agukwe" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={18}/></a>
            </div>
          </div>

          {/* Center: Logo Initials */}
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="text-white font-display text-4xl tracking-wider select-none shrink-0"
            >
              HA
            </motion.div>
          </Link>

          {/* Right: CTA */}
          <div className="flex items-center justify-end flex-1">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-black font-sans font-bold text-sm tracking-widest uppercase px-6 py-2.5 rounded-full hover:bg-brand-light transition-colors"
              >
                Let's Talk
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-6 right-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-display text-4xl uppercase transition-colors ${
                        isActive ? "text-brand" : "text-white hover:text-brand-light"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavbarEnhanced;
