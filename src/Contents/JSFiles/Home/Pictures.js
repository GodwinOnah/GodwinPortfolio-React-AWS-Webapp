// import axios from 'axios';
import {useState, useEffect} from 'react';
import '../../../Contents/CSSFiles/HeroSection.css';
import {Picture} from './Picture.js';




export const Pictures = () => {

  const [pictures,SetPictures] = useState([]);

     useEffect(()=>{
      fetch('https://obandeclothapp-60d299435905.herokuapp.com/pictures').then(res =>{
        if(res)SetPictures(res.data);
        return
       })
     },[]);

     return(
      <div>
        { pictures?.map((picture,index)=>
         (
          <div >
         <Picture picture={picture} index={index} />
         </div>
         )
      )
         }
      </div>
     )
    
};