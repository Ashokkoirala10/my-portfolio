import React from "react";
import django from "../assets/django.png";
import java from "../assets/Java.png";
import js from "../assets/js.png";
import powerbi from "../assets/powerbi.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import php from "../assets/php.png";
import {
  SiFastapi,
  SiDocker,
  SiApacheairflow,
  SiRedis,
  SiMlflow,
  SiPostgresql,
  SiGit,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

const coreSkills = [
  { name: "Python", img: python },
  { name: "Django", img: django },
  { name: "React", img: react },
  { name: "JavaScript", img: js },
  { name: "Java", img: java },
  { name: "PHP", img: php },
  { name: "SQL", img: sql },
  { name: "Power BI", img: powerbi },
];

const toolSkills = [
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const Skills = () => {
  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-4 w-full h-1 bg-gradient-to-r from-[#00A8CD] to-transparent"></div>

        <h1 className="text-4xl font-bold text-center mb-4 lg:text-4xl">
          My <span className="text-[#00A8CD]">Skills</span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-8">
          A toolkit I have grown through real projects — combining language
          fundamentals, modern web frameworks and the infrastructure that makes
          them production-ready.
        </p>

        {/* Languages & Frameworks */}
        <div className="bg-opacity-30 backdrop-blur-md rounded-lg p-4 lg:p-6 w-full border border-[#00A8CD] shadow-lg shadow-[#00A8CD]/30">
          <h2 className="text-sm uppercase tracking-widest text-[#00A8CD] text-center mb-5">
            Languages & Frameworks
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
            {coreSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-gray-300 text-sm lg:text-base">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mt-6 bg-opacity-30 backdrop-blur-md rounded-lg p-4 lg:p-6 w-full border border-[#00A8CD] shadow-lg shadow-[#00A8CD]/30">
          <h2 className="text-sm uppercase tracking-widest text-[#00A8CD] text-center mb-5">
            Tools & Platforms
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6 lg:gap-8">
            {toolSkills.map(({ name, icon: Icon, color }) => (
              <div key={name} className="flex flex-col items-center group">
                <Icon
                  className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                />
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base text-center">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
