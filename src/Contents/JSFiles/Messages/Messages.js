 import {useState, useEffect} from 'react';
import React,{useCallback} from 'react';

export const Messages=()=>{

    const [messages,setMessages] = useState("");

    useEffect(()=>{
        fetch('https://obandeclothapp-60d299435905.herokuapp.com/messages').then(res =>{
          if(res) setMessages(res); 
          return;
      })
      },[]);

      const userY = () =>{
        return (
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
        )}
      
        return(
            <div class="listOfCustomers" >
            {userY()}
           </div>
        )
}