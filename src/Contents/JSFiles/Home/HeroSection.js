import React from 'react';
import { ContactMe } from './ContactMe';
import { Pictures } from './Pictures';
import { Login } from './Login';
import '../../../Contents/CSSFiles/HeroSection.css';
import image1 from '../../Images/Obande3.jpeg'


export const HeroSection = () => {
            return(
                            <div>
                            
                            <h1 style={{fontSize:"70px"}}>ONAH GODWIN</h1><div>
                    <h2 style={{fontSize:"40px"}}>Full-Stack Developer</h2>
                    <hr />
                    <div class="divC"><ContactMe/></div>
                   
                    <div class="Image">
                        <div>
                        <img src={image1} height="500px"  width="500px" alt="Image here.."/>
                        </div>
                        <div>
                        <strong>Hard work pays</strong>
                        </div>
                    </div>
                    <div class="pictures">
                    <Pictures/>
                    </div>
                </div>
                </div>
                                );
                                }