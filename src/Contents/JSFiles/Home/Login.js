import '../../../Contents/CSSFiles/Login.css';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast,ToastContainer } from "react-toastify";
import bcrypt from 'bcryptjs-react';
import { useNavigate } from 'react-router-dom';

export const Login = () =>{

  const navigate = useNavigate();
  
  const [email,SetEmail] = useState('');
  const [password,SetPassword] = useState('');
  const [isLoggingIn,SetIsLoggingIn] = useState(false);
  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [data,SetData] = useState('');

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_URL}/register`)
    .then(res =>{
        return res.json();
     })
     .then((data) =>{
      SetData(data);
      })
     .catch(err=>{
      toast.warning(err);
    })
   },[]);

const handleSubmit = (e) =>{
  e.preventDefault();
  SetIsLoggingIn(true);
  const datax = {email, password};
  if(!email||!password) 
  return toast.warning("Enter all fields");

  if(data){
  data?.map((data)=>{
    bcrypt.compare(password,data.password).then((result)=>{
      if(email === data.email && result){
        window.localStorage.setItem('login',JSON.stringify(true))
        SetIsLoggingIn(false);
        setTimeout(() => {
        handleClose();
        window.location.reload();
    }, 2000);
    toast.success("Logged in");
    return (navigate("/Admin"))  
   }
        else{ 
          toast.warning("Wrong Password!!")
          SetIsLoggingIn(false);
          return
      } })
    } 
)
}
else{
  toast.warning("No network or databese connectivity. You can try page refresh or call the admin on: +447751776483")
}

};
        return (
          <div style={{cursor:"pointer"}}>          
            <button class="btn btn-primary" type='submit' onClick={handleShow}>
            Admin Login
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
      
     
  
  
  
  