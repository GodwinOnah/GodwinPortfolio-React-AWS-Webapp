import '../../../../Contents/CSSFiles/Footer.css';
import image1 from '../../../Images/obandeedit.jpeg'
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import {MdMarkEmailUnread} from "react-icons/md";
import axios from 'axios';
import {useState, useEffect} from 'react';

export const Footer = () => {

    const [phone,
        setPhone] = useState([]);

    useEffect(() => {
            axios.get(`${process.env.REACT_APP_URL}/phone`).then((res) => {
                if(res)
                setPhone(res.data);
            }).catch(err => {
                console.log(err);
            })
        }, []);
    

    return (

        <div class="container ">
            <footer
                class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img height="80px" width="80px" src={image1} alt=""/>
                    </a>
                    <span
                        style={{
                            color: 'grey'
                    }}
                        class="mb-3 mb-md-0 ">&copy; 2024 Obande Development, Inc</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                {phone && phone?.map((phone) => (
                        <div class="d-flex ">                      
                            <a class="icons-icons" target="blank" href={`https://wa.me/${phone.phone}`} title='Whatsapp'>
                                <strong
                                    class="dIcons"
                                    style={{
                                    color: 'grey'
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
                                        color: 'grey'
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
                                        color: 'grey'
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
                                        color: 'grey'
                                }}><MdMarkEmailUnread/></strong>
                            </a>

                        </div>
                        ))}
                </ul>
            </footer>
        </div>

    )
}