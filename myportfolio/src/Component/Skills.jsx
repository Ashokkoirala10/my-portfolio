import React from "react";
import django from "../assets/django.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import powerbi from "../assets/powerbi.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import php from "../assets/php.png";
const Skills = () => {
  return (
    <div className="bg-gray-800 text-white w-full">

      <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-4 w-full h-1 bg-gradient-to-r from-[#00A8CD] to-transparent"></div>
        {/* Skills Title at Top Center */}
        <h1 className="text-4xl font-bold text-center mb-4 lg:text-4xl">
          My <span className="text-[#00A8CD]">Skills</span>
        </h1>

        {/* Text Below the Title */}
        <p className="text-lg lg:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-8">
          I specialize in a variety of technologies and tools that enable me to
          build efficient, scalable and user-friendly applications. Below are
          some of the key skills I have developed over time.
        </p>

        {/* Images in a Blurry and Transparent Div */}
        <div className="bg-opacity-30 backdrop-blur-md rounded-lg p-4 lg:p-6 w-full border border-[#00A8CD] shadow-lg shadow-[#00A8CD]/30">
          {/* Responsive Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-12">
            {/* Skill Card - Django */}
            <div className="flex flex-col items-center">
              <img
                src={django}
                alt="Django"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-2"
              />
              <p className="text-gray-300 text-sm lg:text-base">Django</p>
            </div>

            {/* Skill Card - java */}
            <div className="flex flex-col items-center">
              <img
                src={java}
                alt="java"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-2"
              />
              <p className="text-gray-300 text-sm lg:text-base">Java</p>
            </div>

            {/* Skill Card - JavaScript */}
            <div className="flex flex-col items-center">
              <img
                src={js}
                alt="JavaScript"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-2"
              />
              <p className="text-gray-300 text-sm lg:text-base">JavaScript</p>
            </div>

            {/* Skill Card - Power BI */}
            <div className="flex flex-col items-center">
              <img
                src={powerbi}
                alt="Power BI"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-2"
              />
              <p className="text-gray-300 text-sm lg:text-base">Power BI</p>
            </div>

            {/* Skill Card - Python */}
            <div className="flex flex-col items-center">
              <img
                src={python}
                alt="Python"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-2"
              />
              <p className="text-gray-300 text-sm lg:text-base">Python</p>
            </div>

            {/* Skill Card - React */}
            <div className="flex flex-col items-center">
              <img
                src={react}
                alt="React"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-2"
              />
              <p className="text-gray-300 text-sm lg:text-base">React</p>
            </div>

            {/* Skill Card - SQL */}
            <div className="flex flex-col items-center">
              <img
                src={sql}
                alt="SQL"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-2"
              />
              <p className="text-gray-300 text-sm lg:text-base">SQL</p>
            </div>
            {/* Skill Card - php */}
            <div className="flex flex-col items-center">
              <img
                src={php}
                alt="php"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mb-2"
              />
              <p className="text-gray-300 text-sm lg:text-base">php</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
