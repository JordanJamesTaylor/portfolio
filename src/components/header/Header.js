import React, { Fragment } from 'react';

import './header.css';

export default function Header({ about, projects, blogs, contact, scrollToSection }) {

    return (
        <Fragment>
            <img className='orbital-paths' src={require('../../assests/orbital-lines.png')} alt='cartoon solar system background' />
            <div className='sun'>
                <img src={require('../../assests/sun.png')} onClick={() => scrollToSection(about)}/>
                <h1 className='titles'>
                    ABOUT
                </h1>
            </div>
            <div className='contact-planet'>
                <img src={require('../../assests/green-blue-planet.png')} onClick={() => scrollToSection(contact)}/>
                <h1 className='titles'>
                    CONTACT
                </h1>
            </div> 
            <div className='projects-planet'>
                <img src={require('../../assests/green-pink-planet.png')} onClick={() => scrollToSection(projects)}/>
                <h1 className='titles'>
                    PROJECTS
                </h1>
            </div>
            <div className='blogs-planet'>
                <img src={require('../../assests/red-blue-planet.png')} onClick={() => scrollToSection(blogs)}/>
                <h1 className='titles'>
                    BLOGS
                </h1>
            </div>
            <div className='intro'>
                <h1 className='intro-name' data-cursor-img={require("../../assests/resume-photo.png")}>I'm Jordan</h1>
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
        </Fragment>
    );
};