import React from 'react';
import { ContactMe } from './ContactMe';
import { Pictures } from './Pictures';
import '../../../Contents/CSSFiles/HeroSection.css';
import image1 from '../../Images/Obande3.jpeg'


export const HeroSection = () => {
            return(
                  <div>
                            
                    <h1 style={{fontSize:"70px"}}>Hey!! I am ONAH GODWIN</h1><div>
                   
                    <hr />
                    <div class="divC"><ContactMe/></div>
                    <div class="profile">
                       
                    </div>
                    
                    <div class="row"  style={{margin:"50px"}}>
                    <div class="col-6 full-stack">
                    <h2 style={{fontSize:"40px"}}>Full-Stack Developer</h2>
                    <p>
                        Dedicated, diligent, and reliable full-stack developer work with good team spirit. 
                        I have undergone several trainings with certification under Udemy.com, Amigoscode.com, etc. 
                        As a full-stack developer, I have experience using React.js, Angular, JavaScript, HTML, 
                        and CSS for front-end applications; Spring Boot, APS, NET Core, and Node.js for back-end APIs; 
                        Azure, AWS, Digital Ocean, and Heroku for cloud services; and SQL and MongoDB for databases. 
                        I developed an Android mobile application as one of my projects at the University of Glasgow. 
                        I am calm under pressure and open learning.

                        </p>
                    </div>
                    <div class="col-6 Image">
                        <div>
                        <img src={image1} height="500px"  width="500px" alt=" here.."/>
                        </div>
                        <div>
                        <strong>Hard work pays</strong>
                        </div>
                    </div>
                    </div>
                   
                    
                    <div class="pictures">
                        <h1>Images</h1>
                    <Pictures/>
                    </div>
                </div>
                </div>
                                );
                                }