import React from 'react';
import django from "../assets/django.png";
import figma from "../assets/figma.png";
import js from "../assets/js.png";
import powerbi from "../assets/powerbi.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";

const Skills = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center py-12 px-6 lg:px-20 relative">
      {/* Skills Title at Top Center */}
      <h1 className="text-4xl font-bold text-center mb-4 lg:text-4xl">
        My <span className="text-[#00A8CD]">Skills</span>
      </h1>

      {/* Text Below the Title */}
      <p className="text-lg lg:text-xl text-gray-300 text-center max-w-2xl mb-8">
        I specialize in a variety of technologies and tools that enable me to build efficient, scalable, and user-friendly applications. Below are some of the key skills I have developed over time.
      </p>

      {/* Skills Grid with Links & Hover Effects */}
      <div className="bg-opacity-30 backdrop-blur-md rounded-lg p-6 lg:p-12 w-full max-w-7xl border border-[#00A8CD] shadow-lg shadow-[#00A8CD]/30">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-12">
          
          {/* Skill Cards */}
          {[
            { img: django, name: "Django", link: "https://www.djangoproject.com/" },
            { img: figma, name: "Figma", link: "https://www.figma.com/" },
            { img: js, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { img: powerbi, name: "Power BI", link: "https://powerbi.microsoft.com/" },
            { img: python, name: "Python", link: "https://www.python.org/" },
            { img: react, name: "React", link: "https://react.dev/" },
            { img: sql, name: "SQL", link: "https://www.w3schools.com/sql/" },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-110 cursor-pointer">
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 transition-transform transform "
                />
              </a>
              <p className="text-gray-300 text-sm lg:text-base">{skill.name}</p>
            </div>
          ))}

        </div>
      </div>

      {/* Gradient Border at Bottom */}
      <div className="w-full max-w-7xl h-1 bg-gradient-to-l from-transparent to-[#00A8CD] mt-8"></div>
    </div>
  );
};

export default Skills;