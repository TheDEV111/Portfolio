import React from "react";
import { NavLink } from "react-router-dom";
import imageProfile from '../Assets/imageProfile.JPG';
import { GrProjects } from "react-icons/gr";
import { FaPhoneFlip } from "react-icons/fa6";
import { IconBase } from "react-icons";
import { FaHome } from "react-icons/fa";



const Navbar = () => {

    const navLinks = [
      {icon: <GrProjects />, path: "/projects"},
      {icon: <FaHome />, path: "/projects"},
      {icon: <IconBase />, path: "/projects"},
      {icon: <FaPhoneFlip />, path: "/projects"},
    ]
  return (
    <div>
      <div>
        <img
          src={imageProfile} 
          alt="imagePortfolio"
          className="h-[3%] w-[3%] rounded-full p-1 object-contain"
        />
        <p className="font-bold">Henry Agukwe</p>
      </div>
      <ul className="flex flex-row gap-20" >
          {navLinks.map((link, index) => (
              <li key={index}>
                  <NavLink to={link.path} activeClassName="text-blue-500" className="text-green-600">
                      {link.icon}
                  </NavLink>
              </li>
          ))}
      </ul>
    </div>
  )
}

export default Navbar
