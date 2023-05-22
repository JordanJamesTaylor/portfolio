import React, { Fragment, useRef } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Writing from './components/writing/Writing';

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

  // init useRef hook for each section
  const about = useRef(null);
  const projects = useRef(null);
  const writing = useRef(null);
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
          <Header about={about} projects={projects} writing={writing} contact={contact} scrollToSection={scrollToSection}/>
        </section>
        <section ref={about} className='about-container'>
          <About />
        </section>
        <section ref={projects} className='projects-container'>
          <Projects />
        </section>
        <section ref={writing} className='writings-container'>
          <Writing />
        </section>
        <section ref={contact} className='contact-container'>
          <Contact />
        </section>
      </div>
  );
};