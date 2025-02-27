import React from 'react';
import myphoto from "../assets/myphoto.jpg";

const About = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center px-6 lg:px-20">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-gray-800 to-transparent py-10 lg:py-20 relative">
        {/* Gradient Border Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A8CD] to-transparent"></div>

        {/* Left Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-1 mb-8 lg:mb-0">
          <img 
            src={myphoto} 
            alt="Ashok Koirala" 
            className="w-60 h-60 lg:w-96 lg:h-96 rounded-full shadow-xl border-4 border-[#00A8CD]" 
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end px-4 lg:px-0 order-2 lg:order-2">
          {/* Heading container forcing left alignment */}
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold overflow-hidden pb-2">
              About <span className="text-[#00A8CD]">Me</span>
            </h1>
          </div>
          {/* Paragraph with justified text */}
          <p
            className="w-full text-base lg:text-xl animate-fadeIn delay-200"
            style={{ textAlign: 'justify', textAlignLast: 'justify' }}
          >
            I am a passionate and driven full-stack developer currently pursuing a BSc (Hons) in Computer Science with AI at Sunway College. With a strong foundation in both front-end and back-end technologies, I specialize in Python, MySQL, React, JavaScript, Django, HTML, and CSS. My expertise spans across developing dynamic web applications, database management, and AI-driven solutions. Constantly exploring new technologies, I am dedicated to building innovative, efficient, and scalable applications while continuously enhancing my technical skills. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
