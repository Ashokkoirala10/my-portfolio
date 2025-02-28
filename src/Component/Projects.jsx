import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import visionpark from "../assets/vision-park.png";
import gems from "../assets/gems.png";
import weather from "../assets/weather.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Vision Park",
      description:
        "This is a detailed description of Vision Park. It is a project that manages parking smartly with IoT, Computer Vision, and robust backend integration. It is developed by a team of 4, making it innovative and efficient.",
      image: visionpark,
      github: "", // No link for now
    },
    {
      id: 2,
      title: "Gems Stone",
      description:
        "Gems Stone is a beautifully designed frontend website built using HTML and CSS. It represents a minimalistic design concept with a focus on aesthetics and responsiveness.",
      image: gems,
      github: "", // No link for now
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Weather App integrates real-time APIs to deliver current weather updates. It is built with HTML, CSS, and JavaScript, providing users with an interactive and dynamic experience.",
      image: weather,
      github: "https://github.com/your-repo/weather-app",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const openGitHub = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      toast.error("This project's GitHub link is unavailable for now!");
    }
  };

  return (
    <div className="relative bg-gray-800 text-white h-full py-2">
      {/* Toast Notification */}
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-center lg:text-4xl">
            My <span className="text-[#00A8CD]">Projects</span>
          </h1>
          <p className="text-gray-300 mt-2 lg:text-xl text-lg sm:text-base">
            These are my projects by which you can judge me how much I am capable of on my skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 mb-0 mx-auto">
          <div className="w-full max-w-7xl h-1 bg-gradient-to-l from-transparent to-[#00A8CD] absolute bottom-0"></div>
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-700 rounded-lg shadow">
              <img src={project.image} alt={project.title} className="w-full h-20 sm:h-24 md:h-28 object-cover" />
              <div className="p-1 sm:p-2 text-center">
                <h3 className="text-sm sm:text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">{project.description}</p>
                <div className="mt-1 flex justify-center space-x-1">
                  <button
                    className="bg-[#00A8CD] text-white px-2 py-1 rounded hover:bg-[#0083A3] transition text-xs sm:text-sm cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    Read More
                  </button>
                  <button
                    className="border border-[#00A8CD] text-[#00A8CD] px-2 py-1 rounded hover:bg-[#00A8CD] hover:text-white transition text-xs sm:text-sm cursor-pointer"
                    onClick={() => openGitHub(project.github)}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 bg-opacity-50 backdrop-blur-lg z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg relative max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white cursor-pointer"
              onClick={closeModal}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 text-sm">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
