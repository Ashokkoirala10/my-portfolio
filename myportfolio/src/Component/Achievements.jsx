import React, { useState } from "react";
import ict from "../assets/ict.jpg";
import dav from "../assets/dav.jpeg";

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      title: "ICT Semifinalist",
      description:
        "Our team NeuroNode Participated with federated Learning innovation project and become semifinalist in the ICT rising star innovation competition, showcasing innovative solution for healthcare.",
      image: ict,
    },
    {
      id: 2,
      title: "DAV 1st runnerup",
      description:
        " Our team NeuroNode Awarded as a runnerup for excellence in coding and AI project development(federated learning on healthcare innovation) at DAV Tech Fest, demonstrating practical application of learned skills.",
      image: dav,
    },
  ];

  const openModal = (achievement) => setSelectedAchievement(achievement);
  const closeModal = () => setSelectedAchievement(null);

  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold lg:text-4xl">
            My <span className="text-[#00A8CD]">Achievements</span>
          </h1>
          <p className="text-gray-300 mt-2 lg:text-xl text-lg sm:text-base max-w-2xl mx-auto">
            A few selected achievements. Click on each to know more. More will
            be added over time.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-gray-700 rounded-lg shadow cursor-pointer hover:shadow-xl transition"
              onClick={() => openModal(ach)}
            >
              <img
                src={ach.image}
                alt={ach.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-lg"
              />
              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-lg font-semibold">
                  {ach.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gradient */}
        <div className="w-full max-w-7xl h-1 bg-gradient-to-l from-transparent to-[#00A8CD] mt-8"></div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
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
            <h3 className="text-xl font-bold mb-4">
              {selectedAchievement.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {selectedAchievement.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
