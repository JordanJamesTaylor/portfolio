import React from 'react';

import './mobile-header.css';

export default function({ about, projects, writings, resume, contact, scrollToSection }) {

    const toggleBtn = document.getElementsByClassName('mobile-toggle-btn')[0];
    const mobileNavLinks = document.getElementsByClassName('mobile-nav-links')[0];

    const toggle = () => {
        console.log(toggleBtn)
        mobileNavLinks.classList.toggle('active');
    };

    return(
        <nav className='mobile-header'>
            <div className='mobile-logo-title-container'>
                <img className='mobile-view-logo' src={require('../../assests/site-logo.png')} />
                <h1 className='mobile-view-title'>Jordan Taylor</h1>
            </div>
            <div onClick={() => toggle()} className='mobile-toggle-btn'>
                <span className='bars'></span>
                <span className='bars'></span>
                <span className='bars'></span>
            </div>
            <div className='mobile-nav-links'>
                <ul>    
                    <li onClick={() => scrollToSection(about)}>About</li>
                    <li onClick={() => scrollToSection(projects)}>Projects</li>
                    <li onClick={() => scrollToSection(writings)}>Writings</li>
                    <li onClick={() => scrollToSection(resume)}>Resume</li>
                    <li onClick={() => scrollToSection(contact)}>Contact</li>
                </ul>
            </div>
        </nav>
    );
};