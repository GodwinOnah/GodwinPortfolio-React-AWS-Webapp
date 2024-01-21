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

  const [pictures,SetPictures] = useState(Images);
  const [uploading,setUploading] = useState(false);; 
  
  const images = [];

    

     return(
      <div class="container">    
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} height="700" width="200"class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image2} height="900" width="200" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image3} height="900" width="200" class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
         
      </div>
     )
    
};