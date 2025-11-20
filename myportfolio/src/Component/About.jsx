import React from "react";
import myphoto from "../assets/myphoto.jpg";

const About = () => {
  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-gray-800 to-transparent py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Gradient Border Bottom */}
        <div className="absolute bottom-0 left-4 w-full h-1 bg-gradient-to-r from-[#00A8CD] to-transparent"></div>

        {/* Left Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start order-1 mb-6 lg:mb-0">
          <img
            src={myphoto}
            alt="Ashok Koirala"
            className="w-48 h-48 sm:w-60 sm:h-60 lg:w-96 lg:h-96 rounded-full shadow-xl border-4 border-[#00A8CD] "
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end px-4 lg:px-0 order-2">
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold overflow-hidden pb-2">
              About <span className="text-[#00A8CD]">Me</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl">
            I am a passionate{" "}
            <span className="text-[#00A8CD] font-medium">
              AI-driven full-stack developer 
            </span>
            , currently pursuing a BSc (Hons) in Computer Science with Artificial
            Intelligence at Sunway College. I specialize in designing and
            developing responsive, scalable and user-focused web applications.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl">
            My technical skill set includes
            <span className="text-[#00A8CD] font-medium">
              {" "}
              Python, Django, MySQL, React, JavaScript, PHP, Java and Power BI
            </span>
            , along with growing expertise in AI/ML. I love turning ideas into
            real-world apps by blending clean UI design, strong backend
            architectur, and intelligent machine-learning-driven features.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl">
            I am continuously experimenting, learning and upgrading my skills to
            build digital solutions that are modern, impactful and future-ready.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
