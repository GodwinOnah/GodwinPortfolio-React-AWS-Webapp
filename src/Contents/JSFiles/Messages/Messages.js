 import {useState, useEffect} from 'react';
import React from 'react';

export const Messages=()=>{

    const [messages,setMessages] = useState("");

    useEffect(()=>{
        fetch('http://localhost:3002/messages').then(res =>{
          if(res) setMessages(res.data); 
          return;
      })
      },[]);

      const userY = () =>{
        return (
          <div class="listOfCustomers" >
          <table class="table table-hover">
           <thead>
               <tr>
                <th>USER/ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>COMPANY</th>
                <th>MESSAGES</th>
                </tr>
              </thead>
             <tbody> 
                   {
                  messages?.map((message,index)=>(
                     <tr key = {index}>              
                     <th>{index+1}</th>
                     <td>{message.name}</td>
                     <td>{message.email}</td>
                     <td>{message.phone}</td> 
                     <td>{message.company}</td> 
                     <td>{message.message}</td>            
                     </tr>  
                  ))
                  }           
                  </tbody>
                 </table>  
                 </div>
        )}
      
        
}