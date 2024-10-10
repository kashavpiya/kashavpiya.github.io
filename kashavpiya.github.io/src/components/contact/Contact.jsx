import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4vo0w8i', 'template_wi872o8', form.current, 'uoM9ushoeBXEVbAaS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-item' />
            <h4>Email</h4>
            <h5>kashavpiya23@gmail.com</h5>
            <a href="mailto:kashavpiya23@gmail.com">Send a message.</a>
          </article>
          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-item'/>
            <h4>Phone</h4>
            <h5>(309)350-9068</h5>
            <a href="tel:309-350-9068">Send a message or call.</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Email@email.com' required/>
          <textarea name='msg' placeholder='Your Message' rows='7' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact