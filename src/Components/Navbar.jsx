import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IconBase } from "react-icons";
import { FaTimes } from "react-icons/fa";
import imageProfile from "../Assets/imageProfile.JPG";


const profile = imageProfile

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { icon: <FaHome size={20} />, path: "/", label: "Home" },
    { icon: <GrProjects size={20} />, path: "/projects", label: "Projects" },
    { icon: <IconBase size={20} />, path: "/about", label: "About" },
    { icon: <FaPhoneFlip size={20} />, path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Profile Section */}
          <div className="flex items-center space-x-3">
            <img
              src={profile}
              alt="Henry Agukwe"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
            />
            <h1 className="text-lg font-bold text-gray-800 hidden sm:block">
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
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium text-sm">{link.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-2 border-t">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 transition-colors duration-200
                  ${isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;