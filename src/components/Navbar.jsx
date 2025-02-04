import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleToggle = () => setNav(!nav);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "work" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-opacity-70 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between lg:justify-center items-center">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-100 hover:text-blue-400 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
              {/* Underline effect on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-50" onClick={handleToggle}>
          {nav ? (
            <FaTimes className="text-gray-100 text-3xl" />
          ) : (
            <FaBars className="text-gray-100 text-3xl" />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {nav && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center transition-all duration-300">
          <ul className="space-y-8">
            {navLinks.map((link) => (
              <li key={link.name} className="text-3xl">
                <Link
                  onClick={handleToggle}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-100 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
