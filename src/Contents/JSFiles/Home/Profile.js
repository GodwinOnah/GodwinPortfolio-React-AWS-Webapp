import React from 'react';
import '../../../Contents/CSSFiles/Skills.css';
import {useState, useEffect} from 'react';

export const Profile = () => {

      let url ="https://www.google.com/search?q="
         
        const [noProfileFound, setNoProfileFound] =  useState("");
        const [profiles,setProfiles] = useState([]);

        // Get Profile Summary
     useEffect(()=>{
        fetch('http://localhost:3002/profiles')
        .then((res)=>{
           return res.json();
        })
        .then((data) =>{
           if(data)setProfiles(data);
           return
         })
         .catch(err=>{setNoProfileFound("No profile summary added. Admin check if database exist");
                       console.log(err);
        })
       },[]);
    
        
           return(
            <div class="">         
              { noProfileFound || profiles?.map((profile)=>
               (
                <div  style={{margin:"10px"}}>
                   <strong>                    
                        {profile.profile}
                    </strong>           
                </div>
               ))}          
            </div>
           )
    

}