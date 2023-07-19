import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

import './header.css';

export default function Header({ about, projects, writings, resume, contact, scrollToSection }) {
    return (
        <> 
        <div className='desktop-view-nav'>
          <DesktopHeader about={about} projects={projects} writings={writings} resume={resume} contact={contact} scrollToSection={scrollToSection} />
        </div>
        <div className='mobile-view-nav'>
          <MobileHeader className='mobile-view-nav' about={about} projects={projects} writings={writings} resume={resume} contact={contact} scrollToSection={scrollToSection} />
        </div> 
        </>
    );
};
  