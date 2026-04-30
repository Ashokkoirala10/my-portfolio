import React from "react";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Skills from "../Component/Skills";
import Projects from "../Component/Projects";
import Home from "../Component/Home";
import Footer from "../Component/Footer";
import Achievements from "../Component/Achievements";
import Experience from "../Component/Experience";

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

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
