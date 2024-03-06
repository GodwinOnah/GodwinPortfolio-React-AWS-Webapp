import React from 'react';
import {Link} from "react-router-dom";
import '../../../../Contents/CSSFiles/Nav.css';
import {useState, useEffect} from 'react';
import {ContactMe} from './../ContactMe.js';
import {View} from './../View.js'
import {CiSettings} from "react-icons/ci";
import {toast} from "react-toastify";
import image2 from '../../../Images/HoUw.gif';
import axios from 'axios';

export const Nav = () => {
    const [data,
        SetData] = useState([]);
    const [cvs,
        setCvs] = useState([]);

    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/register`).then((res) => {
            if(res)
            SetData(res.data);
        }).catch(err => {
            toast.warning("Couldn't fetch data: make sure there is network or call the admin on: +447751776" +
                    "483")
        })
    }, []);

    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/cvs`).then((res) => {
            if(res)
            setCvs(res.data);
        }).catch(err => {
            toast.warning("Couldn't fetch data: make sure there is network or call the admin on: +447751776" +
                    "483")
        })    
    }, []);

    return (
        <div >            
                <nav class="navbar navbar-expand bg-body-tertiary  sticky-top shadow p-3  bg-white rounde">
                    <div class="container-fluid navi ">
                        <div id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item ">
                                    <Link
                                        to="/"
                                        class="navItem1"
                                        style={{
                                        textDecoration: 'none'
                                    }}
                                        title='Back to homepage'>
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item ">
                                    <Link
                                        to="/AboutMe"
                                        class="navItem1"
                                        style={{
                                        textDecoration: 'none',
                                        color: ''
                                    }}
                                        title='My history'>
                                        About Me
                                    </Link>
                                </li>
                                <li class="nav-item navItem1" title='Want to hire me?'>
                                    <ContactMe/>
                                </li>
                                <li class="nav-item navItem1" >
                                    {
                                  
                                        cvs
                                        ?.map((cv) => (<View item={`${process.env.REACT_APP_URL}/CV_images/` + cv.cv} what="CV"/>))
                                    }
                                    
                                </li>
                                <Link
                                    to="/Admin"
                                    class="navItem1"
                                    style={{
                                    textDecoration: 'none'
                                }}
                                    title='Visit admin today'>
                                    <CiSettings/>Settings
                                </Link>
                            </ul>

                        </div>
                    </div>
                </nav>
                </div>
    );
}
