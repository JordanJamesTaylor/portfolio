import React from 'react';

import spaceBackground from "../../assests/temp-space.jpg";
import "./projects.css";

export default function Projects() {

  return(
    <div className='project-cards-container'>

    <div className='project-card-a'>
      <img className='project-card-img' src={`${spaceBackground}`} alt='blog title image'data-cursor-text='Track Bugs!' />
      <h2 className='project-card-title' data-cursor-text='Track Bugs!'>Blunder-Bug</h2>
      <p className='project-card-text' data-cursor-text='Track Bugs!'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a  href={`https://github.com/JordanJamesTaylor/Bug-Tracker`} target='_blank' className='project-link-btn'>
        <span>&#128640;</span>
        <span style={{ flex: '1 1 auto'}}></span>
        <span>View on GitHub</span>
      </a>
    </div>
    
    <div className='project-card-b'> 
      <img className='project-card-img' src={`${spaceBackground}`} alt='blog title image' data-cursor-text='Shoot Aliens!'/>
      <h2 className='project-card-title' data-cursor-text='Shoot Aliens!'>Space Invaders</h2>
      <p className='project-card-text' data-cursor-text='Shoot Aliens!'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a  href={`https://github.com/JordanJamesTaylor/Space-Invaders`} target='_blank' className='project-link-btn'>
        <span>&#128640;</span>
        <span style={{ flex: '1 1 auto'}}></span>
        <span>View on GitHub</span>
      </a>
    </div>

    <div className='project-card-c'>
      <img className='project-card-img' src={`${spaceBackground}`} alt='blog title image' data-cursor-text='Track Tasks!'/>
      <h2 className='project-card-title' data-cursor-text='Track Tasks!'>GetItDone</h2>
      <p className='project-card-text' data-cursor-text='Track Tasks!'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p> 
      
      <a  href={`https://github.com/JordanJamesTaylor/GetItDone`} target='_blank' className='project-link-btn'>
        <span>&#128640;</span>
        <span style={{ flex: '1 1 auto'}}></span>
        <span>View on GitHub</span>
      </a>
    </div>

    </div>
  );
};