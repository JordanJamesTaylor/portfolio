import { Fragment } from 'react';
import Typewriter from 'typewriter-effect';

import './about.css';

export default function About() {
return (
  <Fragment>
    <div className='bio-title'>
        <h1 className='name' data-cursor-text='Hello there!'>Hi, I'm Jordan Taylor</h1>
      <div className='type-writer'>
        <Typewriter
            options={{
              strings: ['Software Developer', 'Full-Stack Developer', 'Your Next Developer'],
              autoStart: true,
              loop: true,
            }}
        />
      </div>
    </div>
    <div className='bio'>
            <p>
              Though my background in theater, implementing new and exciting businesses within the hospitality sector, and fullstack development is varied, these disciplines all revolve around the process of project-based work requiring exceptional attention to detail while prioritizing the big picture. 
            <br/>
            <br/>
              Within my record of opening novelty cocktail bars that included tech-based experiential adventures, I was responsible for hiring, training, sourcing, budgeting, and nearly every other ‘-ing’ you could think of that might be required in both day-to-day operations as well as the complex buildup to launch. This has proved dividends in my ongoing career as a developer, wherein I have maintained stellar organization in collaborative projects, reliably efficient code, and a hunger to not only continue learning but also to finesse a product beyond ‘acceptable’ to exceptional. 
            <br/>
            <br/>
              I hope you enjoy your stay here on my website, below you'll find my past projects, blog posts, and resume.
            </p>

    </div>
  </Fragment>
  );
};
