import React from 'react';
import {Link} from "react-router-dom";
import '../../../../Contents/CSSFiles/Nav.css';
import {useState, useEffect} from 'react';
import {ContactMe} from './../ContactMe.js';
import {View} from './../View.js'
import {CiSettings} from "react-icons/ci";
import {toast, ToastContainer} from "react-toastify";
import image2 from '../../../Images/HoUw.gif';

export const Nav = () => {
    const [data,
        SetData] = useState([]);
    const [cvs,
        setCvs] = useState([]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_URL}/register`).then(res => {
            return res.json();
        }).then((data) => {
            SetData(data);
        }).catch(err => {
            toast.warning("Couldn't fetch data: make sure there is network or call the admin on: +447751776" +
                    "483")
        })
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/cvs`).then(res => {
            return res.json();
        }).then((data) => {
            setCvs(data);
        }).catch(err => {
            toast.warning("Couldn't fetch data: make sure there is network or call the admin on: +447751776" +
                    "483")
        })
    }, []);

    return (
        <div >
            <div>
                <Link to="/" class="logo1">
                    <strong class="logo2">ONAH GODWIN😎</strong>
                </Link>
                <img class="welcomeLogo" src={image2} alt="This is a logo"/>
            </div>
            <div>
                <nav class="navbar navbar-expand bg-body-tertiary  sticky-top">
                    <div class="container-fluid navi">
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
                                        About
                                    </Link>
                                </li>
                                <li class="nav-item navItem1" title='Want to hire me?'>
                                    <ContactMe/>
                                </li>
                                <li class="nav-item navItem1">
                                    {cvs
                                        ?.map((cv) => (<View item={`${process.env.REACT_APP_URL}/CV_images/` + cv.cv} what="Resume"/>))}
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
        </div>
    );
}
