import React, { Fragment, useRef } from 'react';

import './header.css';

export default function Header({ about, projects, contact, scrollToSection }) {

    return (
        <Fragment>
            <img className='orbital-paths' src={require('../../assests/header.png')} alt='cartoon solar system background' />
            
            <div className='sun'>
                <h2 className='titles'>
                    Jordan Taylor
                </h2>
                <img src={require('../../assests/green-blue-planet.png')} />
            </div>

            <div className='green-blue-planet'>
                <h2 className='titles'>
                    Contact
                </h2>
                <img src={require('../../assests/green-blue-planet.png')} onClick={() => scrollToSection(contact)}/>
            </div> 

            <div className='green-pink-planet'>
                <h2 className='titles'>
                    About
                </h2>
                <img src={require('../../assests/green-pink-planet.png')} onClick={() => scrollToSection(about)}/>
            </div>
            
            <div className='red-blue-planet'>
                <h2 className='titles'>
                    Projects
                </h2>
                <img src={require('../../assests/red-blue-planet.png')} onClick={() => scrollToSection(projects)}/>
            </div>
        </Fragment>
        
    );
};