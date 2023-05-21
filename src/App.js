import React, { Fragment, useRef } from "react";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

export default function App() {

  // change material ui them to custom theme
  const theme = createTheme({
    typography: {
      fontFamily: [ 'Porter Sans Block', 'sans-serif'
      ].join(','),
    },
  });

  // init useRef hook for each section
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  // grab window element and scroll to component
  const scrollToSection = (elementRef) => {
    window.scrollTo({
        // scroll to top of selected section
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      },
    );
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <div className="navbar">
        <ul id="navbar">
          <li onClick={() => scrollToSection(home)} className="links">Home</li>
          <li onClick={() => scrollToSection(about)} className="links">About</li>
          <li onClick={() => scrollToSection(projects)} className="links">Projects</li>
          <li onClick={() => scrollToSection(contact)} className="links">Contact Me</li>
        </ul>
      </div>
      <section ref={home} className="home">
        <Home />
      </section>
      <section ref={about} className="about">
        <About />
      </section>
      <section ref={projects} className="projects">
        <Projects />
      </section>
      <section ref={contact} className="contact">
        <h2>CONTACT</h2>
      </section>
      </div>
    </ThemeProvider>
  );
};