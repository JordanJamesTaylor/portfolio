import React, { Fragment, useRef } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material';

import MouseFollower from "mouse-follower";
import gsap from "gsap";

import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Writings from './components/writings/Writings';

import './App.css';

export default function App() {
  
  // change material ui them to custom theme
  // const theme = createTheme({
    //   typography: {
      //     fontFamily: [  
        //      'Bruno Ace SC', 'cursive';
        //     ].join(','),
        //   },
  // });
        
  // following cursor animations
  // const cursor = new MouseFollower({
  //   container: document.body,
  //   skewing: 15,
  //   skewingText: 0.5,
  //   stickDelta: 10,
  // });
  // MouseFollower.registerGSAP(gsap);

  // init useRef hook for each section
  const about = useRef(null);
  const projects = useRef(null);
  const writings = useRef(null);
  const contact = useRef(null);

  // grab window element and scroll to component
  const scrollToSection = (elementRef) => {
    window.scrollTo({
        // scroll to top of selected section
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      },
    );
  };
  
  return (
      <div className='App'>
        <section className='header-container'>
          <Header about={about} projects={projects} writings={writings} contact={contact} scrollToSection={scrollToSection}/>
        </section>
        <section ref={about} className='about-container'>
          <About />
        </section>
        <section ref={projects} className='projects-container'>
          <h1 className='section-titles'>Projects</h1>
          <Projects />
        </section>
        <section ref={writings} className='writings-container'>
        < h1 className='section-titles'>WRITINGS</h1>
          <Writings />
        </section>
        <section ref={contact} className='contact-container'>
          <h1 className='section-titles'>Contact Me</h1>
          <Contact />
        </section>
      </div>
  );
};