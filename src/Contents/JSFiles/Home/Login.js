import '../../../Contents/CSSFiles/Login.css';
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast,ToastContainer } from "react-toastify";



export const Login = () =>{
  
  const [email,SetEmail] = useState('');
  const [password,SetPassword] = useState('');
  const [isLoggingIn,SetIsLoggingIn] = useState(false);
  const [isRegistered,setIsRegistered] = useState(false);
  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [data,SetData] = useState('');
  const [loginStatus,setLoginStatus] = useState(false);
 

  const navigate = useNavigate()

  useEffect(()=>{
    fetch('http://localhost:3002/register')
    .then(res =>{
        return res.json();
     })
     .then((data) =>{
      SetData(data);
      })
     .catch(err=>{
         console.log(err);
    })
   },[]);

   useEffect(()=>{
    fetch('http://localhost:3002/login')
    .then(res =>{
        return res.json();
     })
     .then((data) =>{
      console.log(data)
      setLoginStatus(data);
      })
     .catch(err=>{
         console.log(err);
    })
   },[]);


const handleSubmit = (e) =>{
  e.preventDefault();
  const datax = {email, password};
  if(!email||!password) 
  return toast.warning("Enter all fields");

  data.map((data)=>{
    if(email != data.email || password!=data.password){
        toast.warning("Wrong Password!!")
        return
      }
      else{ 
        fetch(
          "http://localhost:3002/login",
            {
              method: 'PUT',
              headers:{
                  "Content-Type": "application/json"
               },
              body: JSON.stringify({loginStatus})
              })
          .then(res =>{return res.json()})
          .then(data =>{
            
          })
        toast.success("Logged in");
        SetIsLoggingIn(false)
        setTimeout(() => {
       handleClose();
    }, 2000);
    } })

  SetIsLoggingIn(true);

};
        return (
          <div style={{cursor:"pointer"}}>
           
            <button class="btn btn-primary" type='submit' onClick={handleShow}>
            Login
            </button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <form onSubmit={handleSubmit}>
              <Modal.Body>
              <div class="modal1">
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
                  Login
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
      
     
  
  
  
  