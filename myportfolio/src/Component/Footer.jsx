import React from "react";
import linkedinIcon from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-6  border-t-2 border-[#00A8CD] shadow-lg shadow-[#00A8CD]/30 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Section - Contact Info */}
          <div className="text-center md:text-left w-full md:flex-1">
            <h3 className="text-2xl sm:text-2xl font-semibold text-[#00A8CD] mb-1">
              Let's Connect!
            </h3>

            <p className="sm:text-sm md:text-base break-words mb-1">
              📧 
              <a 
                href="mailto:koiralaashok47@gmail.com" 
                className="text-white hover:text-[#00A8CD] transition-colors ml-1"
              >
                koiralaashok47@gmail.com
              </a>
            </p>

            <p className="sm:text-sm md:text-base">
              📞 
              <a 
                href="tel:+9779849626348" 
                className="text-white hover:text-[#00A8CD] transition-colors ml-1"
              >
                +977 9849626348
              </a>
            </p>
          </div>

          {/* Middle Separator - Desktop Only */}
          <div className="hidden md:block border-l-2 border-[#00A8CD] h-16 opacity-50 mx-4" />

          {/* Right Section - Social Links */}
          <div className="hidden md:flex flex-col items-end flex-1">
            <div className="text-right">
              <p className="text-sm text-gray-400 mb-2">Follow me on</p>
              <a
                href="https://www.linkedin.com/in/ashok-koirala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className="h-7 w-7 sm:h-8 sm:w-8" 
                />
              </a>
              <p className="text-xs mt-3 text-gray-500">
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        {/* Gradient Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00A8CD] to-transparent mt-6" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs sm:text-sm mt-4">
          © {new Date().getFullYear()} Ashok Koirala. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
