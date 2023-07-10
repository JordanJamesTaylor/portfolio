import React from 'react';
// import Lottie from 'react-lottie';
import astronaut from '../../assests/astronaut.json'

import './footer.css'


export default function Footer({ about, projects, writings, resume, scrollToSection }) {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: astronaut
      };


    return(
        <div className='footer'>

            <div className='footer-logo'>
                 <img style={{ paddingBottom: '1rem' }}src={require('../../assests/site-logo.png')}/>
                 <h3 className='footer-stamps'>@ 2023 Jordan Taylor</h3>
            </div>

            <div className="footer-planets">
                <img className='footer-icons-planets' src={require('../../assests/sun.png')} onClick={() => scrollToSection(about)} data-cursor-text='ABOUT'/>
                <img className='footer-icons-planets' src={require('../../assests/green-pink-planet.png')} onClick={() => scrollToSection(projects)} data-cursor-text='PROJECTS'/>
                <img className='footer-icons-planets' src={require('../../assests/red-blue-planet.png')} onClick={() => scrollToSection(writings)} data-cursor-text='WRITINGS'/>
                <img className='footer-icons-planets' src={require('../../assests/green-blue-planet.png')} onClick={() => scrollToSection(resume)} data-cursor-text='RESUME'/>
            </div>

            <div className="email-icons-lottie">
                <div className='email'>
                    <a href="mailto: jordjamestaylor@gmail.com"  className='footer-stamps'>Jordan Taylor</a>    
                <div className='footer-link-icons'>
                    <a href='https://github.com/JordanJamesTaylor' target='_blank'>
                        <img src={require('../../assests/github-icon.png')} />
                    </a>
                    <a href='https://www.linkedin.com/in/jordan-taylor-903471242/' target='_blank'>
                        <img src={require('../../assests/linkedin-icon.png')} />
                    </a>
                </div>
                </div>
                <div className='lottie-img'>
                    {/* <Lottie
                        options={defaultOptions}
                        height={150}
                        width={150}
                    /> */}
                </div>      
            </div>
        </div>
    )
};