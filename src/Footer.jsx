import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-6 px-6 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row justify-between gap-6 text-center md:text-left">
        
        {/* 👤 Developer Info */}
        <div>
          <h2 className="text-lg font-semibold tracking-wider">
            👨‍💻 Pranav Kumar • AI & Web Developer
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* 🔗 Social Icons */}
        <div className="flex gap-6 text-xl justify-center">
          <FooterIcon
            href="https://www.linkedin.com/in/pranav-kumar-27723a295/"
            icon={<FaLinkedinIn />}
            hoverColor="hover:text-blue-400"
          />
          <FooterIcon
            href="https://github.com/Pranavkumar2025"
            icon={<FaGithub />}
            hoverColor="hover:text-gray-300"
          />
          <FooterIcon
            href="https://www.instagram.com/pranav_kumar519/"
            icon={<FaInstagram />}
            hoverColor="hover:text-pink-400"
          />
          <FooterIcon
            href="https://x.com/Pranav_kumar019"
            icon={<FaXTwitter />}
            hoverColor="hover:text-blue-300"
          />
        </div>
      </div>
    </footer>
  );
};

// ✨ Reusable Footer Icon Component
const FooterIcon = ({ href, icon, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`transition duration-300 transform hover:scale-125 ${hoverColor}`}
  >
    {icon}
  </a>
);

export default Footer;
