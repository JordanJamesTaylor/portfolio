import React from 'react';

import resume from '../../assests/JordanTaylorsResume.pdf';

import './resume.css';

export default function Resume() {

    console.log()
    return(
        <div className='resume'>
            <div className='resume-intro'>
                <a  href={`https://github.com/JordanJamesTaylor/GetItDone`} target='_blank' className='resume-btn'>
                    <span>&#128640;</span>
                    <span style={{ flex: '1 1 auto'}}></span>
                    <span>Download Resum</span>
                </a>
                <p className='resume-intro-text'>
                    Full Stack Developer with experience using frontend and backend technologies such as JavaScript, TypeScript, Node.js, React, Next.js, Ruby on Rails. Former lead Implementation Consultant and General Manager in the hospitality industry, focusing on creative problem-solving and innovation. Leveraged innovation and collaboration to execute complex projects leading to an increase in revenue, customer retention, and efficiency. Passionate about learning new things and staying current with existing technologies.
                </p>
                <img className='skill-icons' src={require('../../assests/skills-icons.png')} alt='logos of tools' />
            </div>
            <div className='resume-scroll'>

                <h1 className='resume-section-titles'>Technical Projects</h1>

                <h1 className='resume-titles'>Space Invaders</h1>
                <h4 className='resume-sub-titles'>
                    A Space Invaders clone.
                </h4>
                <ul>
                    <li>Fully functional Space Invaders game.</li>
                    <li>OOP in JavaScript</li>
                    <li>Covering HTML and CSS fundamentals</li>
                    <li>Utilized HTML CANVAS for sprite dimensions, movement, and collision detection.</li>
                </ul>

                <h1 className='resume-titles'>GetItDone</h1>
                <h4 className='resume-sub-titles'>A bespoke task management application.</h4>
                <ul>
                    <li>Users can add and group tasks.</li>
                    <li>Users can add notifications to tasks and will be sent an alert at the time the user specifies.</li>
                    <li>Features a Material UI frontend and Ruby on Rails backend.</li>
                    <li>Features user authentication by email and password; users sent email on account creation</li>
                </ul>

                <h1 className='resume-titles'>RollCall</h1>
                <h4 className='resume-sub-titles'>A social media site similar in function to BeReal with added location services (Google Maps)</h4>
                <ul>
                    <li>Uses Google Maps API to allow users to add a location to their photos and display them on a Google map along with other users.</li>
                    <li>Utilized active storage to allow users to upload their own files.</li>
                    <li>Notification feature to call upon users to upload a photo to their group.</li>
                </ul>

                <h1 className='resume-section-titles'>Experience</h1>

                <h1 className='resume-titles'>National Express</h1>
                <h4 className='resume-sub-titles'>Recruitment Specialist</h4>
                <h4 className='resume-sub-titles'>Birmingham, UK</h4>
                <ul>
                    <li>Sourcing highly skilled drivers for bus, coach, and long-haul transportation.</li>
                    <li>Vetting potential employees.</li>
                    <li>Onboarding new employees.</li>
                </ul>
                <h1 className='resume-titles'>The Magic of Things LLC</h1>
                <h4 className='resume-sub-titles'>General Manager & Implementation Consultant</h4>
                <h4 className='resume-sub-titles'>London, UK</h4>
                <ul>
                    <li>Establish new venues in new locations with a focus on operations.</li>
                    <li>GP calcultions on potential new porducts/events.</li>
                    <li>Ensuring business complies with relevant laws and legislations (COSHH, Licensing Act 2003, ETC.).</li>
                    <li>Hiring and training of all venue employees</li>
                </ul>

                <h1 className='resume-section-titles'>Education</h1>

                <h1 className='resume-titles'>Flatiron School</h1>
                <h4 className='resume-sub-titles'>Fullstack Web Developer</h4>
                <ul>
                    <li>Fullstack web development</li>
                    <li>JavaScript, CSS, HTML.</li>
                    <li>React</li>
                    <li>SQL $ NoSQL</li>
                    <li>Ruby on Rails</li>
                </ul>
                <h1 className='resume-titles'>Royal Birmingham Conservatoire</h1>
                <h4 className='resume-sub-titles'>Acting Student</h4>
                <ul>
                    <li>BA (Hons) Acting</li>
                    <li>Various acting disciplines from Stanislavski to Brecht.</li>
                    <li>Stage & Screen</li>
                    <li>Stage Combat</li>
                    <li>Horse Riding</li>
                </ul>
            </div>
        </div>
    );
};