 import {useState, useEffect} from 'react';
import React from 'react';
import '../../../Contents/CSSFiles/messages.css';
import { toast} from "react-toastify";
import { ViewMessage } from '../Home/ViewMessages';

export const Messages=()=>{
    const [messages,setMessages] = useState([]);
    const [noMessageFound, setNoMessageFound] =  useState("");
    const [loginStatus,setLoginStatus] = useState(false);

    useEffect(()=>{
      const data =  window.localStorage.getItem('login')
      if(data !=null) setLoginStatus(JSON.parse(data));
        fetch(`${process.env.REACT_APP_URL}/messages`)
        .then((res)=>{
          return res.json();
        })
        .then((data) =>{
              if(data)setMessages(data);
              // return
        })
        .catch(err=>{setNoMessageFound("No message received at the moment. Admin check if database exist");       
      })
      },[]);

      // Delete a Message
   const deleteMessage = ((id) => {
    if(window.confirm("Do you want to delete this item?")){
      fetch(`${process.env.REACT_APP_URL}/messages/`+id,
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
          <tbody class="messageTBody"> 
               {noMessageFound ||
                  messages?.map((message,index)=>(                  
                     <tr key = {index}>              
                     <th>{index+1}</th>
                     <td>{message.name}</td>
                     {loginStatus && <td>{message.email}</td>}
                     {!loginStatus &&  <td><strong style={{color:'red'}}>Hidden</strong></td> }
                     {loginStatus &&  <td>{message.phone}</td> }
                     {!loginStatus &&  <td><strong style={{color:'red'}}>Hidden</strong></td> }
                     <td>{message.companyname}</td> 
                     <td>
                      <div class="mess1">
                      <div class="mess2">
                      {message.message}
                      </div>                    
                      </div>
                      </td> 
                      <td>
                        <div class="d-flex">                       
                        <strong  class="viewMessageBtn" >
                        <ViewMessage 
                        name={message.name}
                        email={message.email}
                        phone={message.phone}
                        companyname={message.companyname}
                        subject={message.subject}
                        message={message.message}
                        />
                        </strong>
                        {loginStatus &&  <button onClick={()=>deleteMessage(message.id)}>
                          <strong class="deleteMessageBtn" title='Delete'>
                          X
                            </strong>
                            </button>
                           }
                           {!loginStatus &&  <button disabled onClick={()=>deleteMessage(message.id)}>
                          <strong class="deleteMessageBtn" title='Delete'>
                           X
                            </strong>
                            </button>
                           }
                            </div>
                            </td>            
                     </tr> 
                                    
                  ))
                  } 
                   {!loginStatus&&<p style={{color:'white',textAlign:'center'}}>Scrolling Disabled</p>}          
                  </tbody>
                 </table> 
                 
                 </div>
        )}
      
        
