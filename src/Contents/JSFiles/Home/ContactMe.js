import '../../../Contents/CSSFiles/Login.css';
import {useState} from 'react';
import { toast,ToastContainer } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ContactMe = () =>{
    const [name,SetName] = useState('');
    const [email,SetEmail] = useState('');
    const [message,SetMessage] = useState('');
    const [phone,SetPhone] = useState('');
    const [companyName,SetCompanyName] = useState('');
    const [isSigningIn,SetIsSigningIn] = useState(false)
    const [data,SetData] = useState({});
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
      const handleSubmit = (e) =>{
        e.preventDefault();
        SetIsSigningIn(true);
  
    
      const datax = {name,email,phone,companyName,message};
      SetData(datax);

      fetch('https://obandeclothapp-60d299435905.herokuapp.com/userx',
     {
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*",
          "Content-Type": "application/json"
       },
      body: JSON.stringify(data)
      }
      ).then(res =>{
        return res.text();      
           }).then(res =>{           
            toast.success(res);
            SetIsSigningIn(false); 
            handleClose();    
               })
         
      }

  const SignupModal = ()=>{
    
      return(
          <div class="modal1">
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
          
            <div class="container">
              <div class="row  ">
                <div  class="col-12 login">
                    <input 
                    value={name}
                    onChange = {(e)=>SetName(e.target.value)}
                    type='text' placeholder="Name" />
                </div>
                
                <div  class="col-12 login">
                    <input 
                    value={email}
                    onChange = {(e)=>SetEmail(e.target.value)}
                    type='email' placeholder="Email" />
                </div>
                <div class="col-12 login">
                    <input 
                    value={phone}
                    onChange = {(e)=>SetPhone(e.target.value)}type='text' placeholder="Phone" />
                 </div>
                 <div class="col-12 login">
                    <input 
                    value={companyName}
                    onChange = {(e)=>SetCompanyName(e.target.value)}type='text' placeholder="Company Name" />
                 </div>
                <div  class="col-12 login">
                    <textarea 
                    value={message}
                    onChange = {(e)=>SetMessage(e.target.value)}
                    type='text' placeholder="Type  message..." />
                </div>
               
                 {/* <div class="col-12 login">
                    <input 
                    value={password}
                    onChange = {(e)=>SetPassword(e.target.value)}type='password' placeholder="Choose Password" />
                 </div>
                 <div class="col-12 login">
                    <input 
                    value={confirmPassword}
                    onChange = {(e)=>SetConfirmPassword(e.target.value)}
                    type='password' placeholder="Confirm Password" />
                 </div> */}
                 <div >
                  <div class="col-12 login">                
                    {isSigningIn && <strong>Sending message...</strong>}
                  </div>
                    </div>
              </div>
              </div>
             
              </div>
              );
            };
    
      return (
        <div style={{cursor:"pointer"}}>
          <button onClick={handleShow}>
           Contact Me
          </button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Message</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
            <Modal.Body>
              <SignupModal/>
              </Modal.Body>
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
    
   



