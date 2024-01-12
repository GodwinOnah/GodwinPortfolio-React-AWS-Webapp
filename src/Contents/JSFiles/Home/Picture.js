import React, { useContext } from 'react';
import '../../../Contents/CSSFiles/Picture.css';



export const Picture = ({picture}) =>{

    return(
        <div>
       
      
            <div class="container">
                <img src={picture} alt="image.." class="section1"/>      
            </div>
     
          
        </div>

    );}