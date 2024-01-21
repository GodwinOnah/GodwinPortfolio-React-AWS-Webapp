// import axios from 'axios';
import {useState, useEffect} from 'react';
import '../../../Contents/CSSFiles/HeroSection.css';
import {Picture} from './Picture.js';
import {Images} from './Images.js';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../Images/Obande1.jpeg'
import image2 from '../../Images/Obande2.jpeg'
import image3 from '../../Images/Obande3.jpeg'
import { toast,ToastContainer } from "react-toastify";

export const Pictures = () => {

  const [pictures,setPictures] = useState([]);

     useEffect(()=>{
      fetch('http://localhost:3002/photos')
      .then(res =>{
        return res.json();
     })
     .then((data) =>{
      console.log(data)
      setPictures(data);
      })
     .catch(err=>{
         console.log(err);
    })
     },[]);

     console.log(pictures)

     return(
      <div class="container">    
  
    {pictures?.map((picture)=>
       (   
    <div >
      <img src={'http://localhost:3002/photo_images/'+picture.photo} height="700" width="200"class="d-block w-100" alt="..."/>
    </div>
    // <div>
    //   <img src={image2} height="900" width="200" class="d-block w-100" alt="..."/>
    // </div>
    // <div class="carousel-item">
    //   <img src={image3} height="900" width="200" class="d-block w-100" alt="..."/>
    // </div>
           
           
       
       )
    )
       }
   
    
 
</div>     
     
     )
    
};