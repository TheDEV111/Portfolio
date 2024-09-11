import React from "react";
import { NavLink } from "react-router-dom";
import imageProfile from '../Assets/imageProfile.JPG';


const Navbar = () => {
  return (
    <div>
      <div>
          <img
            src={imageProfile} 
            alt="imagePortfolio"
            className="h-28 w-24 rounded-full p-1 object-cover"
            />
          <p className="font-bold">Henry Agukwe</p>
      </div>
      <div>
        <NavLink to="/" className="p-4">Home</NavLink>
        <NavLink to="/about" className="p-4">About</NavLink>
        <NavLink to="/projects" className="p-4">Projects</NavLink>
        <NavLink to="/contact" className="p-4">Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
