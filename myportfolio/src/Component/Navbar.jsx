import React, { useState, useEffect, useRef } from "react";
import { Link, scroller } from "react-scroll";
import logo from "../assets/main-logo.png";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // To track active section
  const menuRef = useRef(null); // Ref for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Initially set "home" as active
    setActiveLink("home");
    scroller.scrollTo("home", {
      duration: 500,
      smooth: true,
      offset: -70,
    });
  }, []); // Runs only once when the component is mounted

  return (
    <nav className="bg-gray-800 p-4 font-outfit fixed top-0 left-0 w-full z-10">
      <div className="absolute  bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00A8CD] to-transparent"></div>

        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">


          <div className="w-full flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  src={logo}
                  alt="My Logo"
                  className="h-10 object-contain max-w-[120px]"
                />
              </Link>
            </div>

            <div className="hidden lg:flex">
              <ul className="flex space-x-4 md:space-x-6 lg:space-x-10 text-white font-bold tracking-wide">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-[#00A8CD] border-b-2 border-[#00A8CD] pb-1"
                    className={`cursor-pointer hover:text-[#00A8CD] transition duration-300 ${
                      activeLink === "home"
                        ? "text-[#00A8CD] border-b-2 border-[#00A8CD] pb-1"
                        : ""
                    }`}
                    onSetActive={() => setActiveLink("home")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-[#00A8CD] border-b-2 border-[#00A8CD] pb-1"
                    className="cursor-pointer hover:text-[#00A8CD] transition duration-300"
                    onSetActive={() => setActiveLink("about")}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-[#00A8CD] border-b-2 border-[#00A8CD] pb-1"
                    className="cursor-pointer hover:text-[#00A8CD] transition duration-300"
                    onSetActive={() => setActiveLink("projects")}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-[#00A8CD] border-b-2 border-[#00A8CD] pb-1"
                    className="cursor-pointer hover:text-[#00A8CD] transition duration-300"
                    onSetActive={() => setActiveLink("skills")}
                  >
                    My Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="achievements"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-[#00A8CD] border-b-2 border-[#00A8CD] pb-1"
                    className="cursor-pointer hover:text-[#00A8CD] transition duration-300"
                    onSetActive={() => setActiveLink("achievements")}
                  >
                    Achievements
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:hidden relative z-20">
              <button
                onClick={toggleMenu}
                className="hover:opacity-80 transition duration-300"
              >
                <img
                  src={isMenuOpen ? cross : menu}
                  alt="menu toggle"
                  className="w-6 h-6 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>

      {isMenuOpen && (
        <div
          ref={menuRef} // Add ref here
          className="fixed top-0 right-0 w-64 z-10 transition-all duration-300 ease-in-out"
        >
          <ul className="flex flex-col mt-20 bg-opacity-10 backdrop-blur-lg p-4 rounded-lg shadow-lg w-full">
            <li className="w-full border-b border-gray-400">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className="block w-full px-4 py-3 text-center text-white hover:text-blue-500 transition duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="w-full border-b border-gray-400">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className="block w-full px-4 py-3 text-center text-white hover:text-blue-500 transition duration-300 cursor-pointer"
              >
                About Me
              </Link>
            </li>
            <li className="w-full border-b border-gray-400">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className="block w-full px-4 py-3 text-center text-white hover:text-blue-500 transition duration-300 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li className="w-full border-b border-gray-400">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className="block w-full px-4 py-3 text-center text-white hover:text-blue-500 transition duration-300 cursor-pointer"
              >
                My Skills
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="achievements"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className="block w-full px-4 py-3 text-center text-white hover:text-blue-500 transition duration-300 cursor-pointer"
              >
                Achievements
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
