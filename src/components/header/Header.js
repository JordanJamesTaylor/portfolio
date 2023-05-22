import React, { Fragment, useRef } from 'react';

import './header.css';

export default function Header({ about, projects, contact, scrollToSection }) {

    return (
        <Fragment>
            <img className='orbital-paths' src={require('../../assests/header.png')} alt='cartoon solar system background' />
            
            <div className='sun'>
                <img src={require('../../assests/green-blue-planet.png')} />
                <h3 className='titles'>
                    Jordan Taylor
                </h3>
            </div>

            <div className='contact-planet'>
                <img src={require('../../assests/green-blue-planet.png')} onClick={() => scrollToSection(contact)}/>
                <h3 className='titles'>
                    Contact
                </h3>
            </div> 

            <div className='about-planet'>
                <img src={require('../../assests/green-pink-planet.png')} onClick={() => scrollToSection(about)}/>
                <h3 className='titles'>
                    About
                </h3>
            </div>
            
            <div className='projects-planet'>
                <img src={require('../../assests/red-blue-planet.png')} onClick={() => scrollToSection(projects)}/>
                <h3 className='titles'>
                    Projects
                </h3>
            </div>
            <div className='intro'>
                <h1 className='intro-name'>I'm Jordan</h1>
                <p>
                    Software Engineer, with experience in JavaScript, Typescript, Node.js, React, Next.js, and Ruby, pursuing a career as a full stack developer. 
                </p>
                <a href='https://github.com/JordanJamesTaylor'>
                    <img className='link-icons' src={require('../../assests/github-icon.png')} />
                </a>
                <a href='https://www.linkedin.com/in/jordan-taylor-903471242/   '>
                    <img className='link-icons' src={require('../../assests/linkedin-icon.png')} />
                </a>
            </div>
        </Fragment>
    );
};