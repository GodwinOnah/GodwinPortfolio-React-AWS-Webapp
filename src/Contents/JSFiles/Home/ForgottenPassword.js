import '../../../Contents/CSSFiles/Login.css';
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast,ToastContainer } from "react-toastify";


export const ForgottenPassword = () =>{
  
    const [email,setEmail] = useState('');
    const [maidenName,setMaidenName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,SetConfirmPassword] = useState('');
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    const [isChecking,SetIsChecking] = useState(false);
    const [data,setData] = useState('');
    const form = useRef();
    let counter = 0;

  const navigate = useNavigate()

  useEffect(()=>{
    fetch('http://localhost:3002/register')
    .then(res =>{
        return res.json();
     })
     .then((data) =>{
       setData(data);
      })
     .catch(err=>{
          console.log(err);
    })
   },[]);

const handleSubmit = (e) =>{
  e.preventDefault();
  const datax = {email,maidenName,password};
  if(!email||!maidenName||!confirmPassword||!password) 
  return toast.warning("Enter all field");

  if(password!=confirmPassword) {
    toast.warning("Password missmatch")
    return
  }

  

//   (()=>{emailjs.init("4GGWAs8YmyTJJ--jF")})(); //Function call  
//   if(counter==5){
//     emailjs.sendForm('service_9n124vv', 'template_pmpo23n', [data.email,data.maidenName,data.password])
//     .then((res) => {
//      window.location.reload();            
//     }, (error) => {
//      toast.success(error);
//     });
//   }
 

                                                                                                                                                                                                                                                                                                        (()=>{emailjs.init("4GGWAs8YmyTJJ--jF")})(); //Function call   

              //  Send message to email

        if(counter==5 ){       
          if(window.confirm("Login details to be sent to your email?")){
             emailjs.sendForm('service_9n124vv', 'template_pmpo23n', form.current)
              .then((res) => { 
                toast.success("Login details send to your registered email");                 
              setEmail("");
              setMaidenName("");
              setPassword("");            
              setTimeout(() => {
                handleClose();
              }, 2000); 
              window.location.reload();            
              }, (error) => {
              toast.warning(error);
              });}
            }
};




        return (
          <div style={{cursor:"pointer", marginRight:"20px"}}>
           
            <button class="btn btn-primary" type='submit' onClick={handleShow}>
           Password Recovery
            </button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Recover Password</Modal.Title>
              </Modal.Header>
              <form  ref={form} onSubmit={handleSubmit}>
              <Modal.Body>
              <div class="modal1">
       
        <div class="container">
          <div class="row  ">
            <div  class="col-12 login">
                <input 
                value={email}
                name="email"
                onChange = {(e)=>setEmail(e.target.value)}
                type='email' 
                placeholder="Email" />
            </div>
            <div class="col-12 login">
            <input 
                value={maidenName}
                name="maidenName"
                onChange = {(e)=>setMaidenName(e.target.value)}
                type='text' 
                placeholder="Maiden Name" />
           </div>
             <div class="col-12 login">
                <input 
                value={password}
                name="password"
                onChange = {(e)=>setPassword(e.target.value)}
                type='password' 
                placeholder="New Password" />
             </div>
             <div class="col-12 login">
             <input 
                value={confirmPassword}
                onChange = {(e)=>SetConfirmPassword(e.target.value)}
                type='password' 
                placeholder="Confirm New Password" />
             </div>
              <div class="col-12 login">
                {isChecking && <strong>Checking you...</strong>}
              </div>
                </div>
          </div>
          </div>
                </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                 Submit
                </Button>
                <ToastContainer
                  position='top-right'
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme='light'
                  />
              </Modal.Footer>
              </form>
            </Modal>
          </div>
        );
      }
      
     
  
  
  
  