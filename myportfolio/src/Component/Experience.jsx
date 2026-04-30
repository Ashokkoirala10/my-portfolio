import React, { useState } from "react";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaChevronDown } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "AI Automation Intern",
    company: "Jyoti Bikash Bank",
    duration: "Feb 2026 – Present",
    type: "Fintech · Regulatory Automation",
    summary:
      "Building production-grade Django systems that turn weeks of manual NRB regulatory work into minutes — with full audit trails and verified deployments.",
    projects: [
      {
        title: "Electronic Payment Transaction Report (NRB)",
        points: [
          "Designed and developed a Django web application to generate Electronic Payment Transaction reports required by Nepal Rastra Bank (NRB).",
          "Automated a process previously handled by 4–5 operations staff over 7–10 days.",
          "Reduced reporting time to under 2 minutes with full audit trail, improved accuracy and successful production deployment.",
        ],
      },
      {
        title: "Merchant & User Transaction Reporting (NRB)",
        points: [
          "Built a reporting platform capable of generating 12 reports in a single run from large raw transaction datasets.",
          "Replaced a workflow involving 2 departments, 3 units and 10–12 personnel.",
          "Reduced completion time from approximately 1.5 months to 10–20 minutes.",
        ],
      },
    ],
    tags: ["Django", "Python", "MySQL", "Automation", "Reporting"],
  },
  {
    id: 2,
    role: "Product Development Intern",
    company: "Moru Digital Wallet",
    duration: "Dec 2025 – Feb 2026",
    type: "Backend · API Integration",
    summary:
      "Contributed to backend product development at a leading Nepali digital wallet — onboarding new services and integrating third-party payment APIs.",
    projects: [
      {
        title: "Backend & Service Integrations",
        points: [
          "Integrated third-party APIs for internet service payments into Moru backend systems.",
          "Contributed to backend product development, service onboarding and workflow enhancement.",
          "Assisted in testing, deployment and optimization of service integrations.",
        ],
      },
    ],
    tags: ["Backend", "API Integration", "Python", "Fintech"],
  },
];

const Experience = () => {
  const [openId, setOpenId] = useState(experiences[0].id);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="max-w-6xl mx-auto w-full py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-4 w-full h-1 bg-gradient-to-r from-[#00A8CD] to-transparent"></div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold lg:text-4xl">
            My <span className="text-[#00A8CD]">Experience</span>
          </h1>
          <p className="text-gray-300 mt-3 lg:text-xl text-lg sm:text-base max-w-2xl mx-auto">
            Hands-on roles where I've shipped real systems — turning highly
            manual fintech and reporting workflows into automated, production-ready solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#00A8CD] via-[#00A8CD]/40 to-transparent"></div>

          <div className="space-y-8">
            {experiences.map((exp) => {
              const isOpen = openId === exp.id;
              return (
                <div key={exp.id} className="relative pl-12 sm:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-2 top-4 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-gray-700 border-2 border-[#00A8CD] flex items-center justify-center shadow-lg shadow-[#00A8CD]/30">
                      <FaBriefcase className="text-[#00A8CD] w-4 h-4" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-gray-700/60 backdrop-blur-sm border border-[#00A8CD]/30 rounded-lg shadow-lg shadow-[#00A8CD]/10 hover:shadow-[#00A8CD]/30 transition-shadow">
                    {/* Header */}
                    <button
                      onClick={() => toggle(exp.id)}
                      className="w-full text-left p-4 sm:p-6 cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-300">
                            <span className="flex items-center gap-1.5 text-[#00A8CD] font-medium">
                              <FaBuilding className="w-3.5 h-3.5" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FaCalendarAlt className="w-3.5 h-3.5" />
                              {exp.duration}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1 italic">
                            {exp.type}
                          </p>
                        </div>
                        <span
                          className={`flex items-center justify-center w-8 h-8 rounded-full bg-[#00A8CD]/10 border border-[#00A8CD]/40 text-[#00A8CD] transition-transform duration-300 shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-label={isOpen ? "Collapse" : "Expand"}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </span>
                      </div>

                      <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-[#00A8CD]/10 text-[#00A8CD] border border-[#00A8CD]/40 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>

                    {/* Details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6 border-t border-[#00A8CD]/20 pt-4 space-y-5">
                        {exp.projects.map((project) => (
                          <div key={project.title}>
                            <h4 className="text-sm sm:text-base font-semibold text-[#00A8CD] mb-2">
                              {project.title}
                            </h4>
                            <ul className="space-y-1.5 text-sm text-gray-300">
                              {project.points.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2 leading-relaxed"
                                >
                                  <span className="text-[#00A8CD] mt-1">▹</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
