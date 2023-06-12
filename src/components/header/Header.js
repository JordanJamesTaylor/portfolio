import React from 'react';

import './header.css';

export default function Header({ about, projects, writings, resume, scrollToSection }) {

    return (
        <div className='header'>
            <div className='orbital-paths'>
                <img src={require('../../assests/orbital-lines.png')} alt='cartoon solar system background' />
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

            <div className='intro'>
                <h1 className='intro-name' data-cursor-img={require("../../assests/resume-photo.png")}>I'm Jordan</h1>
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
            </div>
        </div>
    );
};