import React from 'react';
import { Skills } from './Skills.js';
import { Projects } from './Projects.js';
import '../../../Contents/CSSFiles/HeroSection.css';
import image1 from '../../Images/Obande3.jpeg'
import image2 from '../../Images/portfolio_bg.avif'
import { ContactMe } from './ContactMe.js';
import Typical  from 'react-typical';
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMarkEmailUnread } from "react-icons/md";



export const HeroSection = () => {
    let url = "https://www.google.com/search?q="
    let fullstackdeveloper = "Full-Stack Developer"
    return (
        <div style={{marginTop:'85px'}}>

       
               <div> 
                <div class="row" style={{ margin: "50px" }}>
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
                            <a class="icons-icons" href="https://www.facebook.com/obande2" target="blank">
                            <FaFacebook />
                            </a>
                            <a class="icons-icons" href=" https://wa.me/+447751776483">
                            <FaWhatsapp />
                            </a>
                            <a class="icons-icons" href="https://www.instagram.com/billions_deal/" target="blank">
                            <FaInstagram />
                            </a>
                            <a class="icons-icons" href="https://github.com/GodwinOnah" target="blank">
                            <FaGithub/>
                            </a>
                            <a class="icons-icons" href="https://www.linkedin.com/in/godwin-onah-120b8221a/" target="blank">
                            <FaLinkedin/>
                            </a>
                            <a class="icons-icons" href="mailto:thisaremyfiles@gmail.com" target="blank">
                            <MdMarkEmailUnread/>
                            </a>
                            
                            
                        </div>
                        <h2 style={{ fontSize: "40px", cursor: "pointer" }}>
                            <a style={{ textDecoration: "none" ,color:'gold',fontSize:'30px'}} href={url + fullstackdeveloper} target="blank">
                                {fullstackdeveloper}
                            </a>
                        </h2>
                        <p>
                            A hard worker with team spirit, a good qualification,
                            and track records of completed projects working in full-stack
                            development. I have undergone several trainings with Udemy and
                            Amigoscode, which have improved my skills by 90%. I have
                            produced several front-end applications as well as APIs for
                            the back-end. I have deployed projects on Azure, AWS, Digital
                            Ocean, and Heroku cloud services and used SQL databases for
                            years. I developed an Android mobile application using Java.
                            I am calm under pressure and open to learning.

                        </p>
                
                        <div>
                            <button class="hireMe"><ContactMe/></button>
                            <button class="Resume"><a href="ONAH_GODWIN_RESUME.pdf" download="ONAH_GOWIN_CV_REACT.pdf" 
                            title='Download resume'>Get Resume</a>
                            </button>
                        </div>
                    </div>
                    <div class="col-6">
                        
                        <div class="Image">
                           
                        </div>
                        <div>
                            <strong>Hard work pays</strong>
                        </div>
                    </div>
                </div>
                <div >
                <div class="div1">
                    <h2 class="header1">Skills</h2>
                    <div>
                        <Skills />
                    </div>
                </div>

                <div class="div1 div2">
                    <h2 class="header1">Projects</h2>
                    <div>
                        <Projects />
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}