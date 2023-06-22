import { useState, useEffect, useRef } from 'react';
// import { createTheme } from '@mui/material';
import axios from 'axios';
import MouseFollower from "mouse-follower";
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import BlogsCarousel from './components/blogs/BlogsCarousel';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import gsap from "gsap";

import './App.css';

export default function App() {

  const [blogs, setBlogs] = useState({
      posts: [],
      isLoading: true,
      error: null
  });

  const getBlogPosts = async () => {
    try{
      const res = axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jordjamestaylor')
      const blogPosts = await res;

      const blogs = blogPosts.data.items;
            
      setBlogs({posts: blogs, isLoading: false});
      
    }catch(err){
      console.log({ error: err.message })
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  // init useRef hook for each section
  const about = useRef(null);
  const projects = useRef(null);
  const writings = useRef(null);
  const resume = useRef(null);

  // grab window element and scroll to component
  const scrollToSection = (elementRef) => {    
    window.scrollTo({
        // scroll to top of selected section
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      },
    );
  };
  
  // following cursor animations
  const cursor = new MouseFollower({
    container: document.body,
    skewing: 1,
    skewingText: 1,
  });
  MouseFollower.registerGSAP(gsap);

  return (
    // switch div to main
    // switch header div to header el
      <main className='App'>
      
        <header className='header-container'>
          <Header about={about} projects={projects} writings={writings} resume={resume} scrollToSection={scrollToSection}/>
        </header>

        <section ref={about} className='about-container'>
          <About />
        </section>

        <section ref={projects} className='projects-container'>
          <h1 className='section-titles'>Projects</h1>
          <Projects />
        </section>

        <section ref={writings} className='writings-container'>
          <h1 className='section-titles'>Writings</h1>
          <BlogsCarousel blogs={blogs} />
        </section> 

        <section ref={resume} className='resume-container'>
          <h1 className='section-titles'>Resume</h1>
          <Resume />
        </section>

        <footer className='contact-container'>
          <Contact about={about} projects={projects} writings={writings} resume={resume} scrollToSection={scrollToSection}/>
        </footer> 
        
      </main>
  );
};