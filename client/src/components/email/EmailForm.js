import React, { useRef } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import astronaut from '../../assests/astronaut.json'

import 'react-notifications/lib/notifications.css';
import './emailform.css';

export default function EmailForm() {

  const form = useRef();

  const createNotification = (type) => {    
    if(type === 'success') NotificationManager.success("I'll be in touch within 48hrs", 'Email Sent!', 3000);

    if(type === 'user-name') NotificationManager.warning('You must include your name.', 'Name is Blank', 3000);

    if(type === 'empty-email') NotificationManager.warning('Email is Blank', 'You must include your email.', 3000);

    if(type === 'invalid-email') NotificationManager.warning('Error', 'Invalid Email Address', 3000);

    if(type === 'empty-message') NotificationManager.warning('You must include a message.', 'Message is Blank', 3000);
    
    if(type === 'error') {
      NotificationManager.error("Couldn't send email", '', 3000, () => {
        alert('callback');
      });
    };
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    if(document.getElementById("user-name").value === '') {
      createNotification('user-name');
    } else if(document.getElementById("user-email").value == '') {
      createNotification('empty-email');
    } else if(!document.getElementById("user-email").value.includes('@')) {
      createNotification('invalid-email');
    } else if(document.getElementById("email-text").value == '') {
      createNotification('empty-message');
    } else {      
      emailjs.sendForm('service_6pd41j4', 'template_eptp2za', form.current, 'hsguqEZukZHTsuUl6')
      .then((result) => {
        createNotification('success');
        e.target.reset();
      }, (error) => {
        console.log({ message: error.message });
        createNotification('error');
      });
    };
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: astronaut,
  };

  return (
    <div className='email-form-lottie'>
      <div className='email-lottie'>
        <Lottie
            options={defaultOptions}
        />
      </div>
      <div className='email-form-header'>
        <h1></h1>
        <h3>Got a question or proposal, or just want to say hi? Shoot me an email.</h3>
      </div>
        <div className='email-form'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-top'>
                <div style={{ width: '45%' }}>
                <label>Your Name</label>
                <input id='user-name' type="text" name="user_name" placeholder='Enter your name...'/>
                </div>
                <div style={{ width: '45%' }}>
                <label>Your Email</label>
                <input id='user-email' type="email" name="user_email" placeholder='Enter your email...' />
                </div>
              </div>
                <label>Your Message</label>
                <textarea id='email-text' name="message" placeholder="We're looking for a new junior software engineer and think you'd be a great fit! How soon can you interview?"/>
                <button onClick={() => createNotification()} className='form-btn' type="submit" value="Send">
                  <span>&#128640;</span>
                  <span style={{ flex: '1 1 auto'}}></span>
                  <span className='email-btn-text'></span>
                </button>
            </form>
        </div>
        <NotificationContainer/>
    </div>
  );
};
