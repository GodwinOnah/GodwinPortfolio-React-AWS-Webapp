import '../../../Contents/CSSFiles/Login.css';
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import { toast,ToastContainer } from "react-toastify";
import { Login } from './Login.js';
import  {ForgottenPassword}  from './ForgottenPassword.js';


export const Register = () =>{
  
  const [name,SetName] = useState('');
  const [email,SetEmail] = useState('');
  const [maidenName,setMaidenName] = useState('');
  const [password,SetPassword] = useState('');
  const [confirmPassword,SetConfirmPassword] = useState('');
  const [isRegistering,setIsRegistering] = useState(false);
  const [isRegistered,setIsRegistered] = useState(false);
 
  const navigate = useNavigate()

  useEffect(()=>{
    fetch('http://localhost:3002/register')
    .then(res =>{
        return res.json();
     })
     .then((data) =>{
       
       if(data.length>0) setIsRegistered(true);
      })
     .catch(err=>{
                      console.log(err);
    })
   },[]);

const handleSubmit = (e) =>{
  e.preventDefault();
  const datax = {name, email, maidenName, password};
  if(!name||!email||!maidenName||!password||!confirmPassword) 
  return toast.success("Enter all field");
  if(password!=confirmPassword) {
    toast.warning("Password missmatch")
    return
  }

  if(isRegistered){
    toast.warning("Only Admin can register")
    return
  } 

  setIsRegistering(true);
 
  fetch(
  "http://localhost:3002/register",
    {
      method: 'POST',
      headers:{
          "Content-Type": "application/json"
       },
      body: JSON.stringify(datax)
      })
  .then(res =>{return res.json()})
  .then(data =>{
          if(data==false){
            SetName("");
            SetEmail("");
            setMaidenName("");
            SetPassword("");
            SetConfirmPassword("")
            setIsRegistering(false);
            window.location.reload();
          }
          return "You are not Authorize";      
       })
      };
 
        return (
          <div style={{cursor:"pointer"}}> 
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
        <div class="">
        <form onSubmit={handleSubmit}>
        <div class="container">
          <div class="row  ">
            <div  class="col-12 login">
            <input 
                value={name}
                onChange = {(e)=>SetName(e.target.value)}
                type='text' 
                placeholder="Name" />
            </div>
             <div class="col-12 login">
                <input 
                value={email}
                onChange = {(e)=>SetEmail(e.target.value)}
                type='email' 
                placeholder="Email" />
            </div>
            <div class="col-12 login">
            <input 
                value={maidenName}
                onChange = {(e)=>setMaidenName(e.target.value)}
                type='test' 
                placeholder="Maiden Name" />
           </div>
            </div>
            
             <div class="col-12 login">
                <input 
                value={password}
                onChange = {(e)=>SetPassword(e.target.value)}
                type='password' 
                placeholder="Choose Password" />
             </div>
             <div class="col-12 login">
             <input 
                value={confirmPassword}
                onChange = {(e)=>SetConfirmPassword(e.target.value)}
                type='password' 
                placeholder="Confirm Password" />
             </div>
              <div class="col-12 login">
                {isRegistering && <strong>Registration going on...</strong>}
              </div>
             {!isRegistered && <button class="btn btn-primary">Register</button>}
             {isRegistered && <button disabled class="btn btn-primary">Admin Already Registered</button>}
                </div>
          </form>
          <div class="d-flex justify-content-center" style={{margin:'20px'}}>
                <ForgottenPassword/>
                <Login/>               
            </div>
          </div>
               
          </div>
        );
      }
      
     
  
  
  
  