import React, { Fragment, useRef } from "react";

import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects";

import "./App.css";

export default function App() {

  // init useRef hook
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  // grab window element and scroll to component
  const scrollToSection = (elelmentRef) => {
    window.scrollTo({
        // scroll to top of ref element
        top: elelmentRef.current.offsetTop,
        // scroll effect
        behavior: "smooth",
      }
    );
  }
  
  return (
    <div className="App">
      <div className="navbar">
        <ul id="navbar">
          <li onClick={() => scrollToSection(home)} className="links">Home</li>
          <li onClick={() => scrollToSection(about)} className="links">About</li>
          <li onClick={() => scrollToSection(projects)} className="links">Projects</li>
          <li onClick={() => scrollToSection(contact)} className="links">Contact Me</li>
        </ul>
      </div>
      <div ref={home} className="home">
        <h2>HOME</h2>
      </div>
      <div ref={about} className="about">
        <h2>ABOUT</h2>
      </div>
      <div ref={projects} className="projects">
        <h2>PROJECTS</h2>
      </div>
      <div ref={contact} className="contact">
        <h2>CONTACT</h2>
      </div>
    </div>
  );
};