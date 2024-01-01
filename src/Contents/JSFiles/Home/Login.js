import '../../../Contents/CSSFiles/Login.css';
import { Link } from "react-router-dom";
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Login = () =>{
  
  const [email,SetEmail] = useState('');
  const [password,SetPassword] = useState('');
  const [data,SetData] = useState({});
  const [isLoggingIn,SetIsLoggingIn] = useState(false);
  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

const handleSubmit = (e) =>{
  e.preventDefault();
  SetIsLoggingIn(true);
  const datax = {email, password};
  SetData(datax);
  
  fetch(
  "http://localhost:8080/api/login",
    {
      method: 'POST',
      headers:{
          "Content-Type": "Json"
       },
      body: JSON.stringify(data)
      }
  ).then(res =>{
          SetIsLoggingIn(false);
          if(res){
            return (<Link to="/Admin"/>)
          }
          return "You are not Authorize";      
       })
      };

 const LoginModal = () =>{
  
	return(
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
          );
        }

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
              <Modal.Body><LoginModal/></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Modal.Footer>
              </form>
            </Modal>
          </div>
        );
      }
      
     
  
  
  
  