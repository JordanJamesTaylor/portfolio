import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import BlogsCarousel from './components/blogs/BlogsCarousel';
import Resume from './components/resume/Resume';
import EmailForm from './components/email/EmailForm';
import Footer from './components/footer/Footer';

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
      console.log({ error: err.message });
    };
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  useEffect(() => {
    console.log("       !\r\n       ^\r\n      \/ \\\r\n     \/___\\\r\n    |=   =|\r\n    |     |\r\n    |     |\r\n    |     |\r\n    |     |\r\n    |     |\r\n    |     |\r\n    |     |\r\n    |     |\r\n    |     |\r\n   \/|##!##|\\\r\n  \/ |##!##| \\\r\n \/  |##!##|  \\\r\n|  \/ ^ | ^ \\  |\r\n| \/  ( | )  \\ |\r\n|\/   ( | )   \\|\r\n    ((   ))\r\n   ((  :  ))\r\n   ((  :  ))\r\n    ((   ))\r\n     (( ))\r\n      ( )\r\n       .\r\n       .\r\n       .\n\nHello there! 👋\n\nI hope you like my website.\n\nIf you're interested in seeing how the sausage is made feel free to checkout my GitHube repo:\nhttps://github.com/JordanJamesTaylor/portfolio\n\nYou can reach me at jordjamestaylor@gmail.com\n\nHope to hear from you soon!");
  }, []);

  // init useRef hook for each section
  const about = useRef(null);
  const projects = useRef(null);
  const writings = useRef(null);
  const resume = useRef(null);
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

  // following cursor animations
  const cursor = new MouseFollower({
    container: document.body,
    skewing: 1,
    skewingText: 1,
  });
  MouseFollower.registerGSAP(gsap);

  return (
    <main className='App'>
      <header className='header-container'>
        <Header about={about} projects={projects} writings={writings} resume={resume} contact={contact} scrollToSection={scrollToSection} />
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
      <section ref={contact} className='email-form-container'>
        <EmailForm />
      </section>
      <footer className='footer-container'>
        <Footer about={about} projects={projects} writings={writings} resume={resume} scrollToSection={scrollToSection} />
      </footer>
    </main>
  );

};
