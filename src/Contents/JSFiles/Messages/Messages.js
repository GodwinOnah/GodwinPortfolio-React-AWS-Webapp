 import {useState, useEffect} from 'react';
import React from 'react';
import '../../../Contents/CSSFiles/messages.css';
import { toast,ToastContainer } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ViewMessage } from '../Home/ViewMessages';


export const Messages=()=>{

    const [messages,setMessages] = useState([]);
    const [noMessageFound, setNoMessageFound] =  useState("");
    const [loginStatus,setLoginStatus] = useState(false);

    useEffect(()=>{
      const data =  window.localStorage.getItem('login')
      if(data !=null) setLoginStatus(JSON.parse(data));
        fetch('http://localhost:3002/messages')
        .then((res)=>{
          return res.json();
        })
        .then((data) =>{
              if(data)setMessages(data);
              // return
        })
        .catch(err=>{setNoMessageFound("No message received at the moment. Admin check if database exist");
                      console.log(err);
      })
      },[]);

      // Delete a Message
   const deleteMessage = ((id) => {
    if(window.confirm("Do you want to delete this item?")){
      fetch("http://localhost:3002/messages/"+id,
      {  
        method:'DELETE', 
      }
        ).then(res =>{
              return res.text();      
          })
          .then(res=>{
              toast.success(res);
              window.location.reload();
          })
          .catch(error=>{
              toast.warning("Message not deleted");
              console.log(error)
           });
    }}
   )
   
    


        return (
          <div class="listOfCustomers" >
          <table class="table table-hover">
           <thead>
               <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>COMPANY</th>
                <th>MESSAGE</th>
                <th></th>
                </tr>
              </thead>
              
              {<strong style={{color:'White'}}>
                Sorry for the inconvinience!! Only Admin can view messages
                </strong> 
                }
             
             
            {loginStatus && <tbody style={{fontSize:'20px'}}> 
               {noMessageFound ||
                  messages?.map((message,index)=>(
                   
                     <tr key = {index}>              
                     <th>{index+1}</th>
                     <td>{message.name}</td>
                     <td>{message.email}</td>
                     <td>{message.phone}</td> 
                     <td>{message.companyname}</td> 
                     <td>
                      <div style={{fontSize:'10px', display:'flex',border:'2px solid green'}}>
                      <div style={{margin:'10px'}}>
                        <h6 style={{fontSize:'12px'}}>Subject</h6>
                      {message.subject}
                      </div>                    
                      </div>
                      </td> 
                      <td>
                        <div class="d-flex">                       
                        <strong style={{fontSize:'30px',marginRight:'10px'}}>
                        <ViewMessage 
                        name={message.name}
                        email={message.email}
                        phone={message.phone}
                        companyname={message.companyname}
                        subject={message.subject}
                        message={message.message}
                        />
                          </strong>
                        <button onClick={()=>deleteMessage(message.id)}>
                          <strong style={{color:'red',fontSize:'20px'}}>
                            DELETE
                            </strong>
                            </button>
                            </div>
                            </td>            
                     </tr> 
                  
                  ))
                  }           
                  </tbody>}
                 </table>  
                 </div>
        )}
      
        
