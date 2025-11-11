import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GrProjects } from "react-icons/gr";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Sparkles } from "lucide-react";
import imageProfile from "@/Assets/imageProfile.JPG";
import type { NavLink as NavLinkType } from '@/types';

const NavbarEnhanced: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLinkType[] = [
    { icon: <FaHome size={20} />, path: "/", label: "Home" },
    { icon: <GrProjects size={20} />, path: "/projects", label: "Projects" },
    { icon: <CgProfile size={20} />, path: "/about", label: "About" },
    { icon: <FaPhoneFlip size={20} />, path: "/contact", label: "Contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <img
                src={imageProfile}
                alt="Henry Agukwe"
                className="relative w-12 h-12 rounded-full object-cover border-2 border-emerald-500 group-hover:border-emerald-400 transition-all duration-300"
              />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </motion.div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white group-hover:text-emerald-500 transition-colors duration-300">
                Henry Agukwe
              </h1>
              <p className="text-xs text-gray-400">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative flex items-center space-x-2 px-5 py-2.5 rounded-xl overflow-hidden
                    ${
                      isActive
                        ? "text-emerald-500"
                        : "text-gray-300 hover:text-white"
                    } transition-all duration-300`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Background hover effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl ${
                          isActive
                            ? "bg-emerald-500/20"
                            : "bg-gray-800/50"
                        }`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-emerald-500/20 rounded-xl border-2 border-emerald-500/50"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="relative z-10 font-medium">{link.label}</span>
                      
                      {/* Underline effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-400"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:hidden"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-gray-300 hover:text-emerald-500 focus:outline-none p-2 rounded-lg glass-effect"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="px-2 pt-2 pb-4 space-y-2 glass-effect rounded-2xl mt-4 border border-gray-800"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 relative overflow-hidden group
                        ${
                          isActive
                            ? "text-emerald-500 bg-emerald-500/20 border-2 border-emerald-500/50"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                            {link.icon}
                          </span>
                          <span className="relative z-10">{link.label}</span>
                          {isActive && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto"
                            >
                              <Sparkles className="w-4 h-4 text-emerald-500" />
                            </motion.span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.nav>
  );
};

export default NavbarEnhanced;
