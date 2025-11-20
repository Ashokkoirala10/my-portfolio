import React from "react";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Skills from "../Component/Skills";
import Projects from "../Component/Projects";
import Home from "../Component/Home"; // Import Home component
import Footer from "../Component/Footer";
import Achievements from "../Component/Achievements"; // Import Achievements

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
