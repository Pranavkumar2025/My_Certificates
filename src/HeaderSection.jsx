import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header_Section = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Specialization", to: "#Specialization" },
    { name: "Machine Learning", to: "#ML_Certificate" },
    { name: "Web Development", to: "#Web_Development" },
    { name: "Others", to: "#Other" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo/Title */}
        <h2 className="text-white text-xl font-extrabold tracking-wide">
          🎓 My Credentials Dashboard
        </h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              smooth
              className="text-white bg-gray-700/30 hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full transition duration-300"
            >
              {link.name}
            </Link>
          ))}

          {/* View Portfolio Button */}
          <a
            href="https://pranavxdev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2 border-2 border-purple-400 text-purple-300 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
          >
            🚀 View Portfolio
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleDrawer}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm w-full py-4 px-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  smooth
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:bg-white hover:text-black px-4 py-2 rounded-full transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://pranavxdev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border-2 border-purple-400 text-purple-300 font-semibold px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
              >
                🚀 View Portfolio
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header_Section;
