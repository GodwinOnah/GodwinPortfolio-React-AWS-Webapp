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
    const [phone,
        setPhone] = useState([]);
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
        axios.get(`${process.env.REACT_APP_URL}/register`).then((res) => {
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
        axios.get(`${process.env.REACT_APP_URL}/pmessages`).then((res) => {
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
        axios.get(`${process.env.REACT_APP_URL}/phone`).then((res) => {
            if(res)
            setPhone(res.data);
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
                    color: 'Black',
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
                    {phone && phone?.map((phone) => (
                        <div class="flex icons shadow p-3  bg-white rounde">                      
                            <a class="icons-icons" target="blank" href={`https://wa.me/${phone.phone}`} title='Whatsapp'>
                                <strong
                                    class="dIcons"
                                    style={{
                                    color: 'green'
                                }}><FaWhatsapp/></strong>
                            </a>
                            <a
                                class="icons-icons"
                                href={`https://www.instagram.com/${phone.instagramname}/`}
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
                                href={`${phone.linkedin}/`}
                                target="blank"
                                title='LinkedIn ID'>
                                <strong
                                    class="dIcons"
                                    style={{
                                    color: 'blue'
                                }}><FaLinkedin/></strong>
                            </a>
                            <a
                                class="icons-icons"
                                href={`mailto:${phone.myemail}`}
                                target="blank"
                                title='Email'>
                                <strong
                                    class="dIcons"
                                    style={{
                                    color: 'red'
                                }}><MdMarkEmailUnread/></strong>
                            </a>

                        </div>
                        ))}
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
                            'A Full-stack Developer and business expert',
                            2500,
                            'Can work solely as a frontend Developer',
                            4000,
                            'A Devop engineer',
                            6000
                        ]}
                            loop={Infinity}
                            wrapper="p"/>
                    </div>
                </div>
                <hr/>
                <div >
                    <div class="div1">
                        <h2 class="header1">Skills Section</h2>
                        <div>
                            <Skills/>
                        </div>
                    </div>

                    <div class="shadow p-3  bg-white rounded">
                        <h2 class="header1">Projects Section</h2>
                        
                        <div>
                            <Projects/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}