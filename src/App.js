import { useState, useEffect, useRef } from 'react';
import { createTheme } from '@mui/material';
// import axios from 'axios';
import MouseFollower from "mouse-follower";
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Writings from './components/writings/Writings';
import gsap from "gsap";

import './App.css';

export default function App() {

  const axios = require('axios');

  const [profile, setProfile] = useState({
    name: 'Jordan Taylor',
    profileImage: '',
    profileUrl: ''
  });

  const [blog, setBlog] = useState({
      item: [],
      isLoading: true,
      error: null
  });

  // useEffect(() => {
  //   // axios supported by more browsers than fetch
  //   axios.get('https%3A%2F%2Fmedium.com%2Ffeed%2F%40jordjamestaylor')
  //   .then(info => {
  //     const image = info.feed.image;
  //     const link = info.feed.link;
  //     const blogs = info.items;
  //     const posts = blogs.filter(post => post.categories.length > 0)

  //     setProfile(p => ({...p, profileUrl: link, profileImage: image}))
  //     setBlog({item: posts, isLoading: false})
  //   }).catch(
  //     err => setBlog({error: err.message})
  //   ), [axios]
  // }, []);

  // https%3A%2F%2Fmedium.com%2Ffeed%2F%40jordjamestaylor

  useEffect(() => {
    fetch('https://medium.com/feed/@jordjamestaylor')
    .then(res => res.json())
    .then(info => {
            console.log('HELLO!')
            console.log(info.feed);
            const image = info.feed.image;
            const link = info.feed.link;
            const blogs = info.items;
            const posts = blogs.filter(post => post.categories.length > 0)
            // put response in state
            setProfile(p => ({...p, profileUrl: link, profileImage: image}))
            setBlog({item: posts, isLoading: false})
    }).catch(err => {
      console.log('ERROR HERE -->', err.message);
      setBlog({ error: err.message })
    })
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bruno Ace SC', 'cursive',
      ].join(','),
    },
  });

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
          <h1 className='section-titles'>Contact Me</h1>
          <Contact profile={profile} blog={blog} />
        </section>
      </div>
  );
};