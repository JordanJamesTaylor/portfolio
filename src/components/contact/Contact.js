import React, { Fragment } from 'react';

import './contact.css'
import Lottie from './Lottie';

export default function Contact() {
    return(
        <div className='contact'>
            <div className='contact-logo'>
                <img style={{ paddingBottom: '1rem' }}src={require('../../assests/contact-logo.png')}/>
                <h3 className='contact-stamps'>@ 2023 Jordan Taylor</h3>
            </div>
            <div className='contact-section-planets'>
                <img className='contact-icons-planets' src={require('../../assests/sun.png')}/>
                <img className='contact-icons-planets' src={require('../../assests/green-pink-planet.png')}/>
                <img className='contact-icons-planets' src={require('../../assests/red-blue-planet.png')}/>
                <img className='contact-icons-planets' src={require('../../assests/green-blue-planet.png')}/>
            </div>
            
            <div className='contact-email-icons-lottie'>
                <div className='contact-email-icons'>
                    <h3 className='contact-stamps'>jordjamestaylor@gmail.com</h3>
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
        </div>
    )
}