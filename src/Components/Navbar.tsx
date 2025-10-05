import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import imageProfile from "@/Assets/imageProfile.JPG";
import { CgProfile } from "react-icons/cg";
import type { NavLink as NavLinkType } from '@/types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLinkType[] = [
    { icon: <FaHome size={20} />, path: "/", label: "Home" },
    { icon: <GrProjects size={20} />, path: "/projects", label: "Projects" },
    { icon: <CgProfile size={20} />, path: "/about", label: "About" },
    { icon: <FaPhoneFlip size={20} />, path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Profile Section */}
          <div className="flex items-center space-x-3">
            <img
              src={imageProfile}
              alt="Henry Agukwe"
              className="w-10 h-15 rounded-full object-cover border-2 border-gray-200"
            />
            <h1 className="text-lg font-bold text-gray-600 hidden sm:block">
              Henry Agukwe
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `group flex items-center space-x-2 px-3 py-2 rounded-lg relative overflow-hidden
                  ${isActive 
                    ? 'text-emerald-500 bg-emerald-500/10' 
                    : 'text-gray-300 hover:text-emerald-500 hover:bg-gray-800'
                  } transition-all duration-300`
                }
              >
                <span className="relative z-10">{link.icon}</span>
                <span className="relative z-10 font-medium">{link.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-emerald-500 focus:outline-none focus:text-emerald-500 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
                    ${isActive 
                      ? 'text-emerald-500 bg-emerald-500/10' 
                      : 'text-gray-300 hover:text-emerald-500 hover:bg-gray-700'
                    }`
                  }
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
