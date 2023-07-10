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

        // add error notification

        console.log('EMPTY');
      }else{

        // add notification

        emailjs.sendForm('service_6pd41j4', 'template_eptp2za', form.current, 'hsguqEZukZHTsuUl6')
        .then((result) => {
            e.target.reset();
        }, (error) => {

            // add error notification

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
                <button className='form-btn' type="submit" value="Send">
                  <span>&#128640;</span>
                  <span style={{ flex: '1 1 auto'}}></span>
                  <span>Send Email</span>
                </button>
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