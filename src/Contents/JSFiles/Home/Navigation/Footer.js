
import '../../../../Contents/CSSFiles/Footer.css'; 
import image1 from '../../../Images/obandeedit.jpeg'
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMarkEmailUnread } from "react-icons/md";


export const Footer = () => {

    return (
       
        <div class="container ">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
                    <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img height="80px" width="80px"src={image1} alt=""/>
                    </a>
                    <span style={{color:'white'}} class="mb-3 mb-md-0 ">&copy; 2024 Obande Development, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <div class="d-flex">
                                            <a class="icons-icons" href="https://www.facebook.com/obande2" target="blank" title='Facebook'>
                                            <FaFacebook />
                                            </a>
                                            <a class="icons-icons" href=" https://wa.me/+447751776483" title='Whatsapp'>
                                            <FaWhatsapp />
                                            </a>
                                            <a class="icons-icons" href="https://www.instagram.com/billions_deal/" target="blank" title='Instagram'>
                                            <FaInstagram />
                                            </a>
                                            <a class="icons-icons" href="https://github.com/GodwinOnah" target="blank" title='GitHub'>
                                            <FaGithub/>
                                            </a>
                                            <a class="icons-icons" href="https://www.linkedin.com/in/godwin-onah-120b8221a/" target="blank" title='LinkedIn'>
                                            <FaLinkedin/>
                                            </a>
                                            <a class="icons-icons" href="mailto:thisaremyfiles@gmail.com" target="blank" title='Email'>
                                            <MdMarkEmailUnread/>
                                            </a>                        
                                        </div>
                    </ul>
  </footer>
</div>

    )}