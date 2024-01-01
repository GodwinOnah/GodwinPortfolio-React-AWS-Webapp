import React, { useContext } from 'react';
import '../../Contents/CSSFiles/cloth.css';



export const Picture = ({picture,index}) =>{
    return(
        <div class="container" key={index}>
            <div class="d-flex containerL">
           <div class="card cardL" >
           <img class="card-img-top" src={picture.picture}  alt="Image.. "/>
      
         </div>
       </div> 

           </div>
        
    )
}