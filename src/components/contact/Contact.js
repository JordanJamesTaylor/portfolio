import React, { Fragment } from 'react';

import './contact.css'
import Lottie from './Lottie';

export default function Contact({ about, projects, writings, resume, scrollToSection }) {
    return(
        <div className='contact'>
            <div className='contact-logo'>
                <img style={{ paddingBottom: '1rem' }}src={require('../../assests/contact-logo.png')}/>
                <h3 className='contact-stamps'>@ 2023 Jordan Taylor</h3>
            </div>


            <div className='contact-section-planets'>
                <img className='contact-icons-planets' src={require('../../assests/sun.png')} onClick={() => scrollToSection(about)} data-cursor-text='ABOUT'/>
                <img className='contact-icons-planets' src={require('../../assests/green-pink-planet.png')} onClick={() => scrollToSection(projects)} data-cursor-text='PROJECTS'/>
                <img className='contact-icons-planets' src={require('../../assests/red-blue-planet.png')} onClick={() => scrollToSection(writings)} data-cursor-text='WRITINGS'/>
                <img className='contact-icons-planets' src={require('../../assests/green-blue-planet.png')} onClick={() => scrollToSection(resume)} data-cursor-text='RESUME'/>
            </div>
            
            <div className='contact-email-icons'>
                <a href="mailto: jordjamestaylor@gmail.com" subject='Job Offer'  className='contact-stamps'>jordjamestaylor@gmail.com</a>
                <br />
                <a href='https://github.com/JordanJamesTaylor' target='_blank'>
                    <img className='link-icons' src={require('../../assests/github-icon.png')} />
                </a>
                <a href='https://www.linkedin.com/in/jordan-taylor-903471242/' target='_blank'>
                    <img className='link-icons' src={require('../../assests/linkedin-icon.png')} />
                </a>
            </div>
            <div className='lottie'>
                    <Lottie />
            </div>
        </div>
    )
}