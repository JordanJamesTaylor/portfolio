import React from 'react';

import spaceBackground from "../../assests/temp-space.jpg";
import spaceInvadersImg from "../../assests/screenshots/space-invaders-1.png";
import "./projects.css";

export default function Projects() {

  return(
    <div className='project-cards-container'>

    <div className='project-card-a'>
      <img className='project-card-img' src={`${spaceBackground}`} alt='blog title image'data-cursor-text='Track Bugs!' />
      <h2 className='project-card-title' data-cursor-text='Track Bugs!'>Blunder-Bug</h2>
      <p className='project-card-text' data-cursor-text='Track Bugs!'>
        A collaborative project with other junior developers. This bug tracking application allows users to track bugs with detailed notes, and report them to other users so that they might offer a solution. A work in progress.     
      </p>
      <a  href={`https://github.com/JordanJamesTaylor/Bug-Tracker`} target='_blank' className='project-link-btn'>
        <span>&#128640;</span>
        <span style={{ flex: '1 1 auto'}}></span>
        <span>View on GitHub</span>
      </a>
    </div>
    
    <div className='project-card-b'> 
      <img className='project-card-img' src={`${spaceInvadersImg}`} alt='blog title image' data-cursor-text='Shoot Aliens!'/>
      <h2 className='project-card-title' data-cursor-text='Shoot Aliens!'>Space Invaders</h2>
      <p className='project-card-text' data-cursor-text='Shoot Aliens!'>
        A Space Invaders clone. Here I endeavored to avoid using styling libraries so I could hone my HTML and CSS capabilities. The alien, laser, and player sprites are instances of classes; familiarizing myself with JS OOP.
      </p>
      <a  href={`https://jordans-space-invaders.netlify.app/`} target='_blank' className='project-link-btn'>
        <span>&#128640;</span>
        <span style={{ flex: '1 1 auto'}}></span>
        <span>View Site</span>
      </a>
    </div>

    <div className='project-card-c'>
      <img className='project-card-img' src={`${spaceBackground}`} alt='blog title image' data-cursor-text='Track Tasks!'/>
      <h2 className='project-card-title' data-cursor-text='Track Tasks!'>GetItDone</h2>
      <p className='project-card-text' data-cursor-text='Track Tasks!'>
        A to-do-list application. Bespoke front end styling, Node.js back end to allow users to create profiles/tasks and save them between sessions. User can define tasks with titles, notes, due-dates etc. A work in progress. 
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
