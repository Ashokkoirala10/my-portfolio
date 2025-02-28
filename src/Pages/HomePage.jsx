import React from "react";
import Navbar from '../Component/Navbar';
import About from "../Component/About";
import Skills from "../Component/Skills";
import Projects from "../Component/Projects";
import Contact from "../Component/Contact";
import Home from "../Component/Home"; // Import Home component
import Footer from "../Component/Footer";

const HomePage = () => {
  return (
      <div className="scroll-smooth">
        <Navbar />
          <section id="home" className="h-screen"><Home /></section>
          <section id="about" className="h-screen"><About /></section>
          <section id="projects" className="h-screen"><Projects /></section>
          <section id="skills" className="h-screen"><Skills /></section>
          <section id="contact" className="h-screen"><Contact /></section>
          <Footer />
      </div>
  );
};

export default HomePage;
