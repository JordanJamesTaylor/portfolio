import React from 'react';
import Lottie from 'react-lottie';
import astronaut from '../../assests/astronaut.json'

import './contact.css'


export default function Contact({ about, projects, writings, resume, scrollToSection }) {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: astronaut
      };


    return(
        <div className='contact-footer'>

            <div className='contact-logo'>
                 <img style={{ paddingBottom: '1rem' }}src={require('../../assests/contact-logo.png')}/>
                 <h3 className='contact-stamps'>@ 2023 Jordan Taylor</h3>
            </div>

            <div className="contact-planets">
                <img className='contact-icons-planets' src={require('../../assests/sun.png')} onClick={() => scrollToSection(about)} data-cursor-text='ABOUT'/>
                <img className='contact-icons-planets' src={require('../../assests/green-pink-planet.png')} onClick={() => scrollToSection(projects)} data-cursor-text='PROJECTS'/>
                <img className='contact-icons-planets' src={require('../../assests/red-blue-planet.png')} onClick={() => scrollToSection(writings)} data-cursor-text='WRITINGS'/>
                <img className='contact-icons-planets' src={require('../../assests/green-blue-planet.png')} onClick={() => scrollToSection(resume)} data-cursor-text='RESUME'/>
            </div>

            <div className="email-icons-lottie">
                <div className='email'>
                    <a href="mailto: jordjamestaylor@gmail.com"  className='contact-stamps'>jordjamestaylor@gmail.com</a>    
                <div className='contact-link-icons'>
                    <a href='https://github.com/JordanJamesTaylor' target='_blank'>
                        <img src={require('../../assests/github-icon.png')} />
                    </a>
                    <a href='https://www.linkedin.com/in/jordan-taylor-903471242/' target='_blank'>
                        <img src={require('../../assests/linkedin-icon.png')} />
                    </a>
                </div>
                </div>
                <div className='lottie-img'>
                    <Lottie
                        options={defaultOptions}
                        height={150}
                        width={150}
                    />
                </div>      
            </div>
        </div>
    )
};