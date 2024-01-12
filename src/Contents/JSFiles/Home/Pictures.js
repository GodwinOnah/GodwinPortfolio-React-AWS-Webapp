// import axios from 'axios';
import {useState, useEffect} from 'react';
import '../../../Contents/CSSFiles/HeroSection.css';
import {Picture} from './Picture.js';
import {Images} from './Images.js';
import { Carousel } from 'react-responsive-carousel';





export const Pictures = () => {

  const [pictures,SetPictures] = useState(Images);

  const images = []

    //  useEffect(()=>{
    //   fetch('https://obandeclothapp-60d299435905.herokuapp.com/pictures').then(res =>{
    //     if(res)SetPictures(res.data);
    //     return
    //    })
    //  },[]);

     return(
      <div>
        { pictures?.map((picture)=>
         (
          <Carousel>
           <div >
         <Picture picture={picture} />
         </div>
         </Carousel>  
         
         )
      )
         }
      </div>
     )
    
};