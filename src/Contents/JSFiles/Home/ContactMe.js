import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../../Contents/CSSFiles/Login.css';
import {useState, useEffect} from 'react';
import { toast,ToastContainer } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Typical  from 'react-typical';


export const ContactMe = () =>{
    const form = useRef();
    const [name,SetName] = useState("");
    const [email,SetEmail] = useState("");
    const [subject,SetSubject] = useState("");
    const [message,SetMessage] = useState("");
    const [phone,SetPhone] = useState("");
    const [myPhone,setMyPhone] = useState([]);
    const [companyName,SetCompanyName] = useState('');
    const [sending,SetSending] = useState(false)
    const [send,SetSend] = useState(false)
    const [data,SetData] = useState({});
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const myPhoneNumber = "(+447751776483)";

    useEffect(()=>{
      fetch('http://localhost:3002/phone')
      .then((res)=>{
        return res.json();
     })
     .then((data) =>{
        if(data)setMyPhone(data);
        return
      })
      .catch(err=>{
                console.log(err);
     })
    },[]);
    
      const sendEmail = (e) =>{
        e.preventDefault();
        const datax = {name,email,phone,companyName,subject,message};
        if(datax == null) {
           toast.warning("Add a message");
           return;
          }
        if(!name||!email||!phone||!companyName||!subject||!message){
          toast.warning("Enter all fields");
          return;
        }
        SetSending(true);

        (()=>{emailjs.init("4GGWAs8YmyTJJ--jF")})(); //Function call   

      //  Send message to email
      emailjs.sendForm('service_9n124vv', 'template_pmpo23n', form.current)
     .then((res) => {
      SetSending(false);
      SetName(""); 
      SetEmail("");
      SetPhone("");
      SetMessage("");
      SetCompanyName(""); 
      SetSubject("");  
      SetSend(true);
      setTimeout(() => {
        handleClose();
        SetSend(false); 
      }, 2000); 
      window.location.reload();            
     }, (error) => {
      toast.success(error);
     });
     
       //  Send message to database
      fetch('http://localhost:3002/messages',
     {
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type": "application/json"
       },
      body: JSON.stringify(datax)
      }
      ).then(res =>{
        return res.text();      
           }).then(res =>{   
            window.location.reload();     
      })        
    }
      return (
        <div style={{cursor:"pointer"}}>
          <a onClick={handleShow}>
          Contact Me
          </a>
    
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>
                <div class="d-flex">
                  😎..
              <Typical
                    steps={[
                        "Hey!!", 1000, 
                        'I\'m patiently waiting for your message', 3500,
                        'I am passionate about what I do', 5000,
                        'I love to save cost', 6500
                    ]}
                    loop={Infinity}
                    wrapper="p"
                        />
                    </div>
                 </Modal.Title>
            </Modal.Header>
            <form  ref={form} onSubmit={sendEmail}>
            <Modal.Body>
            <div class="modal1">
            <ToastContainer
                  position='top-right'
                  autoClose={4000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme='light'
                  />
          
            <div class="container">
              <div class="row  ">
                <div  class="col-12 login">
                    <input 
                    name="name"
                    value={name}
                    onChange = {e=>SetName(e.target.value)}
                    type='text' placeholder="Your name" />
                </div>
                
                <div  class="col-12 login">
                    <input 
                    name="senderEmail"
                    value={email}
                    onChange = {e=>SetEmail(e.target.value)}
                    type='email' placeholder="Your email" />
                </div>
                <div class="col-12 login">
                    <input 
                    name="phone"
                    value={phone}
                    onChange = {e=>SetPhone(e.target.value)} type='text' 
                    placeholder="Phone" />
                 </div>
                 <div class="col-12 login">
                    <input 
                    name="companyName"
                    value={companyName}
                    onChange = {e=>SetCompanyName(e.target.value)} type='text'
                     placeholder="Company Name" />
                 </div>
                <div  class="col-12 login ">
                  Message
                <div style={{border:'1px solid blue', width:'fit-content',margin:'0 auto',padding:'10px'}}>
                <div>
                <input 
                    size="60"
                    value={subject}
                    name="subject"
                    onChange = {e=>SetSubject(e.target.value)}
                    type='text' placeholder="Subject" />
                  </div>
                    <textarea 
                    name="message"
                    style={{width: '100%', height:'150px', marginTop:'5px'}}
                    value={message}
                    onChange = {e=>SetMessage(e.target.value)}
                    type='text' placeholder="Type  message here..." />
                    </div>
                </div>
                 <div >
                  <div class="col-12 login">                
                    {sending && <strong style={{color:'red'}}>Sending message...</strong>}
                    {send && <strong style={{color:'green'}}>Message Sent</strong>}
                  </div>
                    </div>
              </div>
              </div>
             
              </div>
              </Modal.Body>
              <div style={{textAlign:'center', color:'blue', fontWeight:'bolder'}}>
                <marquee scrollamount="2">
                  <div class="d-flex">
                    <strong>Phone(s):</strong>
                    {myPhoneNumber}
                { myPhone?.map((phone)=>(
                <p>{",("+phone.phone+")"}</p>
                ))
                }
                </div>
                </marquee>
                </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Send
              </Button>
            </Modal.Footer>
            </form>
          </Modal>
        </div>
      );
    }
    
   



