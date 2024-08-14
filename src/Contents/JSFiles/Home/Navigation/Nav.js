import React from 'react';
import {Link} from "react-router-dom";
import '../../../../Contents/CSSFiles/Nav.css';
import {useState, useEffect} from 'react';
import {ContactMe} from './../ContactMe.js';
import {View} from './../View.js'
import {CiSettings} from "react-icons/ci";
import {toast} from "react-toastify";
import image from '../../../Images/link2.jpeg';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const Nav = () => {
    const navigate = useNavigate();
    const [data,
        SetData] = useState([]);
    const [cvs,
        setCvs] = useState([]);
        const [loginStatus,
            setLoginStatus] = useState(false);

    const logout = () => {
            const yes = window.localStorage.setItem('login', JSON.stringify(false));
            navigate('/')
            window.location.reload();
        }
    useEffect(() => {
            const data = window.localStorage.getItem('login')
            if (data != null) 
                setLoginStatus(JSON.parse(data))
        }, [loginStatus]);

    useEffect(() => {
       axios.get(`${process.env.REACT_APP_URL}/register`).then((res) => {
            if(res)
            SetData(res.data);
        }).catch(err => {
            toast.warning("Couldn't fetch data: make sure there is network or call the admin on: +447751776" +
                    "483")
        })
    }, []);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_URL}/cvs`).then((res) => {
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
                    <div>
                    <img src={image}  width={50} alt="Not an image"/>
                    </div>
                    <div class="container-fluid navi">
                        <div class="navbarSupportedContent">
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
                               {loginStatus && <li class="nav-item ">
                                    <button
                                        onClick={logout}
                                        class="navItem1"
                                        style={{
                                            fontSize:'20px',
                                        textDecoration: 'none',
                                        background:'none',
                                        border:'none'
                                    }}
                                        title='Logout'>
                                        Logout
                                    </button>
                                </li>
                            }
                                <Link
                                    to="/Register"
                                    class="navItem1"
                                    style={{
                                        fontSize:'20px',
                                    textDecoration: 'none'
                                }}
                                    title='Admin'>
                                    <CiSettings/>
                                </Link>
                            </ul>

                        </div>
                    </div>
                </nav>
                </div>
    );
}
