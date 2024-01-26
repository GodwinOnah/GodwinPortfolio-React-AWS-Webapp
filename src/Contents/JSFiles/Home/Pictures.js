// import axios from 'axios';
import {useState, useEffect} from 'react';
import { Fade } from 'react-slideshow-image';
import '../../../Contents/CSSFiles/HeroSection.css';


export const Pictures = () => {

  const [pictures,setPictures] = useState([]);
  const [noPhotoFound, setNoPhotoFound] =  useState("");

     useEffect(()=>{
      fetch(`${process.env.REACT_APP_URL}/photos`)
      .then(res =>{
        return res.json();
     })
     .then((data) =>{
      setPictures(data);
      })
    .catch(err=>{setNoPhotoFound('No photo added. Check of database exist');
                      console.log(err);
    })
     },[]);

     return(
      <div className="slide-container">
        <Fade>
          {      
                  noPhotoFound || pictures?.map((picture) => (
                    <div> {                        
                   <img  src={`${process.env.REACT_APP_URL}/photo_images/`+picture.photo} height="600px" width="auto" alt="..." />                  
                  }</div>
                      ) )} 
        </Fade>
      </div>        
     )   
};