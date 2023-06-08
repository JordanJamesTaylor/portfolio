import React from 'react';

import './resume.css';

export default function Resume() {
    return(
        <div className='scroll'>
            <h1>Space Invaders - Github | Demo</h1>
            <h4>
                A Space Invaders clone.
            </h4>
            <ul>
                <li>Fully functional Space Invaders game.</li>
                <li>OOP in JavaScript</li>
                <li>Covering HTML and CSS fundamentals</li>
                <li>Utilized HTML CANVAS for sprite dimensions, movement, and collision detection.</li>
            </ul>
            <h1>GetItDone</h1>
            <h4>A bespoke task management application.</h4>
            <ul>
                <li>Users can add and group tasks.</li>
                <li>Users can add notifications to tasks and will be sent an alert at the time the user specifies.</li>
                <li>Features a Material UI frontend and Ruby on Rails backend.</li>
                <li>Features user authentication by email and password; users sent email on account creation</li>
            </ul>
            <h1>RollCall</h1>
            <h4>A social media site similar in function to BeReal with added location services (Google Maps)</h4>
            <ul>
                <li>Uses Google Maps API to allow users to add a location to their photos and display them on a Google map along with other users.</li>
                <li>Utilized active storage to allow users to upload their own files.</li>
                <li>Notification feature to call upon users to upload a photo to their group.</li>
            </ul>
        </div>
    );
};