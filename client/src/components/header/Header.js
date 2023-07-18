import React from 'react';
import './header.css';

export default function Header({ about, projects, writings, resume, contact, scrollToSection }) {
    // put orbits and intro in two sep boxes and header as an outer box
    return (
        <div className='site-header'>
            <div className='orbital-paths-planets'>
                <div className='orbital-paths'>
                    <img src={require('../../assests/orbital-lines2.png')} alt='cartoon solar system background' />
                </div>
                <div className='sun'>
                    <img className='sun-img' src={require('../../assests/sun.png')} onClick={() => scrollToSection(about)}/>
                    <h1 id='about-title'>
                        ABOUT
                    </h1>
                </div>
                <div className='resume-planet'>
                    <img className='resume-planet-img' src={require('../../assests/green-blue-planet.png')} onClick={() => scrollToSection(resume)}/>
                    <h1 id='resume-title'>
                        RESUME
                    </h1>
                </div> 
                <div className='contact-planet'>
                    <img className='contact-planet-img' src={require('../../assests/contact-planet.png')} onClick={() => scrollToSection(contact)}/>
                    <h1 id='contact-title'>
                        CONTACT
                    </h1>
                </div> 
                <div className='projects-planet'>
                    <img className='projects-planet-img' src={require('../../assests/green-pink-planet.png')} onClick={() => scrollToSection(projects)}/>
                    <h1 id='projects-title'>
                        PROJECTS
                    </h1>
                </div>
                <div className='writings-planet'>
                    <img className='writings-planet-img' src={require('../../assests/red-blue-planet.png')} onClick={() => scrollToSection(writings)}/>
                    <h1 id='writings-title'>
                        WRITINGS
                    </h1>
                </div>
            </div>
            <aside className='intro'>
                <h2 className='intro-name' data-cursor-img={require("../../assests/resume-photo.png")}>I'm Jordan</h2>
                <br />
                <p>
                    Software Engineer with experience in JavaScript, Typescript, Node.js, React, Next.js, and Ruby, pursuing a career as a full stack developer. 
                </p>
                <a href='https://github.com/JordanJamesTaylor' target='_blank'>
                    <img className='link-icons' src={require('../../assests/github-icon.png')} />
                </a>
                <a href='https://www.linkedin.com/in/jordan-taylor-903471242/' target='_blank'>
                    <img className='link-icons' src={require('../../assests/linkedin-icon.png')} />
                </a>
            </aside>
        </div>
    );
};
  