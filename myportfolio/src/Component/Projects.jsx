import React, { useState } from "react";
import task_reminder from "../assets/task_reminder.jpg";
import bms from "../assets/bms.png";
import dp from "../assets/Diabetes-prediction.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI day planner plus task reminder",
      description:
        "🧠 AI Day Planner + Task Reminder is designed for seniors, busy professionals, and anyone who needs a little help staying organized. With voice command support, smart notifications, and real-time readouts, it not only reminds you what to do—it tells you when to do it. Plus, its built-in chatbot makes planning effortless and interactive",
      image: task_reminder,
      github: "https://github.com/Ashokkoirala10/Day_Planner_AI",
    },
    {
      id: 2,
      title: "End-to-end MLOPS for diabetes prediction system",
      description:
        "This fully automated MLOps system predicts diabetes risk using a robust, production-grade architecture. Built with Docker, Redis, MySQL, Airflow, Evidently, FastAPI and Streamlit, it handles the entire lifecycle—from data ingestion and preprocessing to model training, monitoring, and real-time inference. A single trigger initiates the full pipeline, including automated retraining based on data drift or performance thresholds. This project exemplifies scalable, maintainabl, and intelligent ML deployment in action.",
      image: dp,
      github: "https://github.com/Ashokkoirala10/mlops_diabetes_prediction",
    },
    {
      id: 3,
      title: "Blood Management System",
      description:
        "Built entirely from scratch without any frameworks, this robust web application streamlines blood donation and request processes. It features three dedicated dashboards—Admin, Donor, and Seeker—each tailored for seamless interaction. Hospitals are directly integrated into the system, enabling real-time coordination between donors and those in need. From managing blood inventory to tracking requests and approvals, this project showcases end-to-end functionality and stands out as one of my most technically rewarding PHP builds.",
      image: bms,
      github: "https://github.com/Ashokkoirala10/Blood-Management-System",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-4 w-full h-1 bg-gradient-to-r from-[#00A8CD] to-transparent"></div>
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-center lg:text-4xl">
            My <span className="text-[#00A8CD]">Projects</span>
          </h1>
          <p className="text-gray-300 mt-3 lg:text-xl text-lg sm:text-base max-w-2xl mx-auto">
            These are a few selected projects showcasing my skills and
            expertise. For a complete view of my work, feel free to visit my
            GitHub profile Provided above on home section.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-700 rounded-lg shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-lg"
              />
              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 flex justify-center space-x-2">
                  <button
                    className="bg-[#00A8CD] text-white px-3 py-1 rounded hover:bg-[#0083A3] transition text-xs sm:text-sm cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    Read More
                  </button>
                  <button
                    className="border border-[#00A8CD] text-[#00A8CD] px-3 py-1 rounded hover:bg-[#00A8CD] hover:text-white transition text-xs sm:text-sm cursor-pointer"
                    onClick={() => window.open(project.github, "_blank")}
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
            className="bg-gray-700 text-white p-4 sm:p-6 rounded-lg relative max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white cursor-pointer"
              onClick={closeModal}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 text-sm">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
