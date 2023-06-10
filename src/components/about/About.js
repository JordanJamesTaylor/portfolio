import { Fragment } from 'react';
import Typewriter from 'typewriter-effect';

import './about.css';

export default function About() {
return (
  <Fragment>
    <div className='bio-title'>
      <div className='name'>
        <h1 data-cursor-text='Hello there!'>Hi, I'm Jordan Taylor:</h1>
      </div>
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
    <br />
    <p>
     Lorem ipsum dolor sit amet consectetur. Leo pulvinar morbi molestie ut nunc eu. Massa elit amet a orci imperdiet. In tincidunt urna lectus quis faucibus varius ac commodo. Integer ut tellus donec ipsum ac ornare tellus.
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur. Leo pulvinar morbi molestie ut nunc eu. Massa elit amet a orci imperdiet. In tincidunt urna lectus quis faucibus varius ac commodo. Integer ut tellus donec ipsum ac ornare tellus.
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur. Leo pulvinar morbi molestie ut nunc eu. Massa elit amet a orci imperdiet. In tincidunt urna lectus quis faucibus varius ac commodo. Integer ut tellus donec ipsum ac ornare tellus.
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur. Leo pulvinar morbi molestie ut nunc eu. Massa elit amet a orci imperdiet. In tincidunt urna lectus quis faucibus varius ac commodo. Integer ut tellus donec ipsum ac ornare tellus.
    </p>
  </div>
  </Fragment>
  );
};
