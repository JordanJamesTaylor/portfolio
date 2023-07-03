import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import astronaut from '../../assests/astronaut.json'

import './emailform.css';

export default function EmailForm() {
  const form = useRef();
  
  const sendEmail = (e) => {
      e.preventDefault();

      if(document.getElementById("email-text").value == ''){
        console.log('EMPTY');
      }else{
        console.log('FULL');

        emailjs.sendForm()
        .then((result) => {
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
      };
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: astronaut
  };


  return (
    <div className='email-form-lottie'>
        <div className='email-form'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea id='email-text' name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
        <div className='email-lottie'>
            <h1>Get in Touch!</h1>
            <Lottie
                options={defaultOptions}
                height={150}
                width={150}
            />
        </div>
    </div>
  );
};