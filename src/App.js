import { useState, useEffect, useRef } from 'react';
import { createTheme } from '@mui/material';
import axios from 'axios';
import MouseFollower from "mouse-follower";
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Writings from './components/writings/Writings';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import gsap from "gsap";

import './App.css';

export default function App() {

    // my medium profile
    const [profile, setProfile] = useState({
      name: 'Jordan Taylor',
      profileImage: '',
      profileUrl: ''
    });
    // my medium posts
    const [blog, setBlog] = useState({
        item: [],
        isLoading: true,
        error: null
    });
  // get my medium profile and posts
  // axios is supported by more browser than fetch
  useEffect(() => {
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jordjamestaylor')
    .then((res) => {
      console.log('API RESPONSE: ', res.data);
      const image = res.data.feed.image;
      const link = res.data.feed.link;
      const blogs = res.data.items;
            
      setProfile((p) => ({...p, profileUrl: link, profileImage: image}));
      setBlog({item: blogs, isLoading: false});
    }).catch((err) => {
      console.log({ error: err.message });
    });
  }, []);

  // init useRef hook for each section
  const about = useRef(null);
  const projects = useRef(null);
  const writings = useRef(null);
  const contact = useRef(null);

  // material ui customisation
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bruno Ace SC', 'cursive',
      ].join(','),
    },
  });

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
    skewingText: 1
  });
  MouseFollower.registerGSAP(gsap);

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
          <h1 className='section-titles'>My Blog</h1>
          <Blog profile={profile} blog={blog} />
        </section>
        <section ref={contact} className='contact-container'>
          <h1 className='section-titles'>Contact</h1>
          <Contact profile={profile} blog={blog} />
        </section>
      </div>
  );
};