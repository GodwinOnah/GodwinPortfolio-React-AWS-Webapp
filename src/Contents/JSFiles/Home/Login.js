import '../../../Contents/CSSFiles/Login.css';
import {Link, useNavigate} from "react-router-dom";
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast,ToastContainer } from "react-toastify";


export const Login = () =>{
  
  const [email,SetEmail] = useState('');
  const [password,SetPassword] = useState('');
  const [isLoggingIn,SetIsLoggingIn] = useState(false);
  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const navigate = useNavigate()

const handleSubmit = (e) =>{
  e.preventDefault();
  const datax = {email, password};
  if(!email||!password) 
  return toast.success("Enter all field");

  SetIsLoggingIn(true);
  
  fetch(
  "http://localhost:3002/login",
    {
      method: 'POST',
      headers:{
          "Content-Type": "Json"
       },
      body: JSON.stringify(datax)
      }
  ).then(res =>{return res.json()}).then(res =>{
          console.log(res)
          console.log(55)
          if(res==false){
            console.log(66)
            SetIsLoggingIn(false)
            handleClose()
          return(
            navigate("/Admin")
          )
          }
          return "You are not Authorize";      
       })
      };


        return (
          <div style={{cursor:"pointer"}}>
           
            <p onClick={handleShow}>
         Admin
            </p>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <form onSubmit={handleSubmit}>
              <Modal.Body>
              <div class="modal1">
				<h1>Login</h1>
        <hr/>
        <form onSubmit={handleSubmit}>
        <div class="container">
          <div class="row  ">
            <div  class="col-12 login">
                <input 
                value={email}
                onChange = {(e)=>SetEmail(e.target.value)}
                type='email' 
                placeholder="Email" />
            </div>
             <div class="col-12 login">
                <input 
                value={password}
                onChange = {(e)=>SetPassword(e.target.value)}
                type='password' 
                placeholder="Password" />
             </div>
              <div class="col-12 login">
                {isLoggingIn && <strong>Logging you in...</strong>}
              </div>
                </div>
          </div>
          </form>
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
      
     
  
  
  
  