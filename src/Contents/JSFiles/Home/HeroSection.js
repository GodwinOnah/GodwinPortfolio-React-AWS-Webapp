import React from 'react';
import {useState, useEffect} from 'react';
import { Skills } from './Skills.js';
import { Projects } from './Projects.js';
import { Profile } from './Profile.js';
import '../../../Contents/CSSFiles/HeroSection.css';
import { ContactMe } from './ContactMe.js';
import Typical  from 'react-typical';
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMarkEmailUnread } from "react-icons/md";

export const HeroSection = () => {

    const [pMessages,setPMessages] = useState(null);
    const [cvs,setCvs] = useState([]);
    const [greater,setGreater] = useState(false);
    
    let message1 = "";
   

    {pMessages?.map((message)=>{
       message1+= '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
       '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+message.pmessage
        
    })} 

    

    // Get Public Message
 useEffect(()=>{
    fetch(`${process.env.REACT_APP_URL}/pmessages`)
    .then((res)=>{
       return res.json();
    })
    .then((data) =>{
        if(data.length>1) setGreater(true)
       if(data)setPMessages(data);
       return
     })
     .catch(err=>{ console.log(err);
    })
   },[]);

   useEffect(()=>{ 
    fetch(`${process.env.REACT_APP_URL}/cvs`)
    .then(res =>{
        return res.json();
     })
     .then((data) =>{
      setCvs(data);
      })
     .catch(err=>{
         console.log(err);
    })
   },[]);
  

    let url = "https://www.google.com/search?q="
    let fullstackdeveloper = "Full-Stack Developer"
    return (
        <div style={{marginTop:'5%'}}>                     
            <marquee scrollamount="4">                      
              <strong style={{color:'gold', fontSize:'15px'}}>
             {message1}
                </strong>                     
            </marquee>         
               <div> 
                <div class="row" style={{ marginTop: "5%" }}>
                    <div class="col-6 full-stack">
                    <Typical
                    steps={[
                        "Hey!! I am GODWIN... 😎", 1000, 
                        'A React Expert', 2500,
                        'A front-end Developer', 4000,
                        'A Back-end Developer', 6000
                    ]}
                    loop={Infinity}
                    wrapper="p"
                        />
                        <div class="d-flex icons">
                            <a class="icons-icons" href="https://www.facebook.com/obande2" target="blank" title='Facebook'>
                            <FaFacebook />
                            </a>
                            <a class="icons-icons" href=" https://wa.me/+447751776483" title='Whatsapp'>
                            <FaWhatsapp />
                            </a>
                            <a class="icons-icons" href="https://www.instagram.com/billions_deal/" target="blank" title='Instagram'>
                            <FaInstagram />
                            </a>
                            <a class="icons-icons" href="https://github.com/GodwinOnah" target="blank" title='GitHub'>
                            <FaGithub/>
                            </a>
                            <a class="icons-icons" href="https://www.linkedin.com/in/godwin-onah-120b8221a/" target="blank" title='LinkedIn'>
                            <FaLinkedin/>
                            </a>
                            <a class="icons-icons" href="mailto:thisaremyfiles@gmail.com" target="blank" title='Email'>
                            <MdMarkEmailUnread/>
                            </a>                        
                        </div>
                        <h2 style={{ fontSize: "40px", cursor: "pointer" }}>
                            <a style={{ textDecoration: "none" ,color:'white',fontSize:'50px'}} 
                            href={url + fullstackdeveloper} target="blank">
                                {fullstackdeveloper}
                            </a>
                        </h2>
                        <p>
                            <Profile/>
                        </p>               
                        <div>
                            <button class="hireMe"><ContactMe/></button>
                            {cvs?.map((cv)=>(
                            <button class="Resume"><a href={`${process.env.REACT_APP_URL}/CV_images`+cv.cv} 
                            title='Download resume' download>Get Resume</a>
                            </button>
                               ))}
                        </div>
                    </div>
                    <div class="col-6">                        
                        <div class="Image">                           
                        </div>
                    </div>
                </div>
                <div >
                <div class="div1">
                    <h2 class="header1">Skills</h2>
                    <div>
                        <Skills/>
                    </div>
                </div>

                <div class="div1 div2">
                    <h2 class="header1">Projects</h2>
                    <div>
                        <Projects/>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}