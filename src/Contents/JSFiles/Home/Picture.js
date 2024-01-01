import React, { useContext } from 'react';
import '../../../Contents/CSSFiles/Picture.css';


export const Picture = ({picture,index}) =>{

    return(
        <div>
        <carousel>
        <slide >
            <div class="container" key={index}>
                <img src={picture.image} alt="image.." class="section1"/>      
            </div>
        </slide > 
         </carousel>   
        </div>

    );}