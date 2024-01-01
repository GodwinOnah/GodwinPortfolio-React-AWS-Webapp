import React from 'react';
import {Link } from "react-router-dom";
import '../../../../Contents/CSSFiles/Nav.css'; 
import {Login} from '../../Home/Login.js'


export const Nav = () => {

    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary  sticky-top">
      <div class="container-fluid">   
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">       
            
            <li class="nav-item ">
            <Link to="/Admin" class="navItem1" style={{ textDecoration: 'none',color:'' }}>About Me</Link>
            </li>
            <li class="nav-item ">
            <Link to="/" class="navItem1" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li class="nav-item" >
          
            </li>
           
         <div class="navItem1"><Login/></div>
          </ul>
         
        </div>
      </div>
    </nav>


    );
}
