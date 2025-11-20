import React from 'react';
import photo from "../assets/self-photo.jpg";
import linkedin from "../assets/linkedin.png";
import save from "../assets/download-icon.png";
import cv from "../assets/your-cv.pdf"; 
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Home = () => {
  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="max-w-6xl pt-24 md:pt-24 mx-auto w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-gray-800 to-transparent py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">


          <div className="absolute bottom-0 left-4 w-full h-1 bg-gradient-to-r from-[#00A8CD] to-transparent"></div>


        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
          <img 
            src={photo} 
            alt="Ashok Koirala" 
            className="w-48 h-48 sm:w-60 sm:h-60 lg:w-96 lg:h-96 rounded-full shadow-xl border-4 border-[#00A8CD]" 
          />
        </div>

        {/* Left Content */}
        <div className="text-center lg:text-left space-y-3 lg:space-y-6 lg:w-1/2 order-2 lg:order-1 flex flex-col items-center lg:items-start">
          <h1 className="text-3xl lg:text-5xl font-bold overflow-hidden">
            Hi, I'm <span className="typewriter text-[#00A8CD]">Ashok Koirala</span>
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold text-[#00A8CD] animate-fadeIn delay-100">
            Full-Stack Developer | Machine Learning & AI Practitioner
          </h2>
          <p className="text-sm sm:text-base lg:text-lg animate-fadeIn delay-200 max-w-md">
            I build intelligent full-stack applications using modern web technologies and machine learning.
            Passionate about AI-powered solutions, automation and data-driven systems.
          </p>
          
          {/* Buttons */}
          <div className="flex items-center space-x-3">
            <a
              href="mailto:koiralaashok47@gmail.com"
              className="bg-[#00A8CD] text-white py-2 px-4 lg:py-2 lg:px-6 rounded-md hover:bg-[#0088A8] transition-all text-sm lg:text-base"
            >
              Contact Me
            </a>
            
            <a href="https://www.linkedin.com/in/ashok-koirala" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
            </a>

            {/* GitHub Icon */}
            <a href="https://github.com/Ashokkoirala10" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer text-white " />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="flex items-center space-x-2 -mt-1 cursor-pointer ">
            <a href={cv} download className="flex items-center space-x-2 py-1 lg:py-2 rounded-md text-white ">
              <img src={save} alt="Download CV" className="w-4 h-4 lg:w-5 lg:h-5 " />
              <span className="text-xs lg:text-sm ">Download CV</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
