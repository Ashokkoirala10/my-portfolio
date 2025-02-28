import React from 'react';
import photo from "../assets/self-photo.jpg";
import linkedin from "../assets/linkedin.png";
import save from "../assets/download-icon.png";
import cv from "../assets/your-cv.pdf"; // Replace with your actual CV file
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center px-6 lg:px-20">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-gray-800 to-transparent py-10 lg:py-20 relative">
        
        {/* Gradient Border Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A8CD] to-transparent"></div>

        {/* Right Image Section - Moved to top on small screens */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
          <img src={photo} alt="Ashok Koirala" className="w-60 h-60 lg:w-96 lg:h-96 rounded-full shadow-xl border-4 border-[#00A8CD]" />
        </div>

        {/* Left Content - Centered on small screens */}
        <div className="text-center lg:text-left space-y-4 lg:space-y-6 lg:w-1/2 order-2 lg:order-1 flex flex-col items-center lg:items-start">
          {/* Animated h1 */}
          <h1 className="text-3xl lg:text-5xl font-bold overflow-hidden">
            Hi, I'm <span className="typewriter text-[#00A8CD]">Ashok Koirala</span>
          </h1>
          <h2 className="text-xl lg:text-3xl font-semibold text-[#00A8CD] animate-fadeIn delay-100">FullStack Developer</h2>
          <p className="text-base lg:text-xl animate-fadeIn delay-200 max-w-md">
            I am an aspiring AI student pursuing the BSc Data Science with AI course at Sunway College.
          </p>
          
          {/* Buttons */}
          <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="bg-[#00A8CD] text-white py-2 px-4 lg:py-2 lg:px-6 rounded-md hover:bg-[#0088A8] transition-all text-sm lg:text-base"
          >
            Contact Me
          </a>
            <a href="https://www.linkedin.com/in/ashok-koirala" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
            </a>
          </div>

          {/* Download CV Button (Adjusted Padding and Size) */}
          <div className="flex items-center space-x-2 -mt-1 cursor-pointer"> {/* Reduced margin-top */}
            <a href={cv} download className="flex items-center space-x-2 py-1 lg:py-2 rounded-md text-white">
              <img src={save} alt="Download CV" className="w-4 h-4 lg:w-5 lg:h-5" /> {/* Smaller icon */}
              <span className="text-xs lg:text-sm">Download CV</span> {/* Smaller text */}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;