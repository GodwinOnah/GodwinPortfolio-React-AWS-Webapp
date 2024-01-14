import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailContactForm = () => {
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
    (()=>{emailjs.init("4GGWAs8YmyTJJ--jF")})(); //Function call
   emailjs.sendForm('service_9n124vv', 'template_pmpo23n', form.current)
     .then((result) => {
       console.log('Email successfully sent!')
     }, (error) => {
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', error)
     });
 };

 return (
   <form ref={form} onSubmit={sendEmail}>
     <label>Name</label>
     <input type="text" name="user_name" />
     <label>Email</label>
     <input type="email" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" />
   </form>
 );
};

export default EmailContactForm;