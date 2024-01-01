// import axios from 'axios';
import {useState, useEffect} from 'react';
import '../../../Contents/CSSFiles/HeroSection.css';



export const Pictures = () => {

  const [pictures,SetPictures] = useState([]);

     useEffect(()=>{
      fetch('https://obandeclothapp-60d299435905.herokuapp.com/pictures').then(res =>{
        if(res)SetPictures(res.data);
        return
       })
     },[]);

     return(
      <div class="clothings">
        { pictures?.map((picture,index)=>
         (
          <div >
         <Pictures pictures={picture} index={index} />
         </div>
         )
      )
         }
      </div>
     )
    
};