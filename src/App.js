import { useState, useEffect, useRef } from 'react';
import { createTheme } from '@mui/material';
import axios from 'axios';
import MouseFollower from "mouse-follower";
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import BlogsCarousel from './components/blogs/BlogsCarousel';
import Contact from './components/contact/Contact';
// import Writings from './components/writings/Writings';

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
  const [blogs, setBlogs] = useState({
      posts: [],
      isLoading: true,
      error: null
  });

  const getBlogPosts = async () => {
    try{
      const res = axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jordjamestaylor')
      const blogPosts = await res;

      const image = blogPosts.data.feed.image;
      const link = blogPosts.data.feed.link;
      const blogs = blogPosts.data.items;
            
      setProfile((p) => ({...p, profileUrl: link, profileImage: image}));
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
  const blogPosts = useRef(null);
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
          <Header about={about} projects={projects} blogs={blogs} contact={contact} scrollToSection={scrollToSection}/>
        </section>
        <section ref={about} className='about-container'>
          <About />
        </section>
        <section ref={projects} className='projects-container'>
          <h1 className='section-titles'>Projects</h1>
          <Projects />
        </section>
        {/* <section ref={writings} className='writings-container'>
        < h1 className='section-titles'>WRITINGS</h1>
          <Writings />
        </section> */}
        <section ref={blogPosts} className='blogs-container'>
          <h1 className='section-titles'>My Blog</h1>
          <BlogsCarousel profile={profile} blogs={blogs} />
        </section>
        <section ref={contact} className='contact-container'>
          <h1 className='section-titles'>Contact</h1>
          <Contact />
        </section>
      </div>
  );
};