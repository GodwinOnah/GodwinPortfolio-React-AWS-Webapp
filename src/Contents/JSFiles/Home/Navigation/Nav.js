import React from 'react';
import {Link } from "react-router-dom";
import '../../../../Contents/CSSFiles/Nav.css'; 
import {Login} from '../../Home/Login.js'
import { ContactMe } from './../ContactMe.js';
import {View} from './../View.js'
import { CiSettings } from "react-icons/ci";


export const Nav = () => {

  let resume ="ONAH_GODWIN_RESUME.pdf";

    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary  sticky-top">
      <div class="container-fluid navi">   
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <Link to="/" class="logo"style={{ textDecoration: 'none',color:'gold', 
        fontFamily:'fantasy',fontSize:'50px',fontWeight:'bolder',padding:'20px' }}> 
          <strong>ONAH GODWIN</strong>
          </Link> 
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">     
          <li class="nav-item ">
            <Link to="/" class="navItem1" style={{ textDecoration: 'none' }}
             title='Back to homepage'>
              Home
              </Link>
            </li>
            <li class="nav-item ">
            <Link to="/AboutMe" class="navItem1" style={{ textDecoration: 'none',color:'' }}
             title='My history'>
              About Me
              </Link>
            </li>
            <li class="nav-item navItem1"  title='Want to hire me?'>
            <ContactMe/>
            </li> 
            <li class="nav-item navItem1" >
            <View image={resume} what="Resume"/>
            </li>   
            <Link to="/Admin" class="navItem1" style={{ textDecoration: 'none' }}
             title='Visit admin today'>
            <CiSettings />
              </Link>
          </ul>
         
        </div>
      </div>
    </nav>


    );
}
