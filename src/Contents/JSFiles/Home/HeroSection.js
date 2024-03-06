import React from 'react';
import {useState, useEffect} from 'react';
import {Skills} from './Skills.js';
import {Projects} from './Projects.js';
import {Profile} from './Profile.js';
import '../../../Contents/CSSFiles/HeroSection.css';
import Typical from 'react-typical';
import {toast} from "react-toastify";
import {FaWhatsapp, FaInstagram,FaLinkedin} from 'react-icons/fa';
import {MdMarkEmailUnread} from "react-icons/md";
import image from '../../Images/link2.jpeg';
import axios from 'axios';

export const HeroSection = () => {

    const [pMessages,
        setPMessages] = useState(null);
    const [cvs,
        setCvs] = useState([]);
    const [greater,
        setGreater] = useState(false);
    let message1 = "";

    {
        pMessages
            ?.map((message) => {
                message1 += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
                        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + message.pmessage
            })
    }

    // Get Public user
    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/register`).then((res) => {
            res.data.map((user) => {
                window
                    .localStorage
                    .setItem('Admin', user.name);
            })
        }).catch(err => {
            toast.warning(err);
        })
    }, []);

    // Get Public Message
    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/pmessages`).then((res) => {
            if (res.data.length > 1) 
                setGreater(true)
            if (res) 
                setPMessages(res.data);
            return
        }).catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/cvs`).then((res) => {
            if(res)
            setCvs(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div style={{
            marginTop: '5%'
        }}>

            <marquee scrollamount="5">
                <strong
                    style={{
                    color: 'yellow',
                    fontSize: '15px'
                }}>
                    {message1}
                </strong>
            </marquee>
            <div>
                <div
                    class="profileAndImageSection"
                    style={{
                    marginTop: "5%"
                }}>
                    <div class="profileSummarySection">
                        
                        <div class="flex icons shadow p-3  bg-white rounde">
                         
                            <a class="icons-icons" href=" https://wa.me/+447751776483" title='Whatsapp'>
                                <strong
                                    class="dIcons"
                                    style={{
                                    color: 'green'
                                }}><FaWhatsapp/></strong>
                            </a>
                            <a
                                class="icons-icons"
                                href="https://www.instagram.com/billions_deal/"
                                target="blank"
                                title='Instagram'>
                                <strong
                                    class="dIcons"
                                    style={{
                                    color: 'orange'
                                }}><FaInstagram/></strong>
                            </a>
                            <a
                                class="icons-icons"
                                href="https://www.linkedin.com/in/godwin-onah-120b8221a/"
                                target="blank"
                                title='LinkedIn'>
                                <strong
                                    class="dIcons"
                                    style={{
                                    color: 'blue'
                                }}><FaLinkedin/></strong>
                            </a>
                            <a
                                class="icons-icons"
                                href="mailto:thisaremyfiles@gmail.com"
                                target="blank"
                                title='Email'>
                                <strong
                                    class="dIcons"
                                    style={{
                                    color: 'red'
                                }}><MdMarkEmailUnread/></strong>
                            </a>
                           
                        </div>
                        <p class="shadow p-3  bg-white rounde">
                            <Profile/>
                        </p>

                    </div>
                    <div>
                        <div class="profileImage shadow p-3  bg-white rounde">
                            <img src={image} alt="Not an image"/>
                        </div>
                        <Typical
                            steps={[
                            "Hey!! I am GODWIN... 😎",
                            1000,
                            'A React Expert',
                            2500,
                            'A frontend Developer',
                            4000,
                            'A Backend Developer',
                            6000
                        ]}
                            loop={Infinity}
                            wrapper="p"/>
                    </div>
                </div>
                <hr/>
                <div >
                    <div class="div1">
                        <h2 class="header1">Skills</h2>
                        <div>
                            <Skills/>
                        </div>
                    </div>

                    <div class="shadow p-3  bg-white rounded">
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