import React from 'react';
import Facebook from '../Icons/Facebook';
import Linkedin from '../Icons/linkedin';
import Twitter from '../Icons/Twitter';
import Instagram from '../Icons/Instagram';
import Logo from '../Icons/Logo.png'
import Button from '../Resusable/Button';
import './Footer.css'
import { Link } from 'react-scroll';



const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <div className='footer'>
                    <div className='footer-nav'>
                        <div className='media-container'>
                            <div className='footer-container'>
                                <div className='footer-logo'>
                                    <img src={Logo} className='logo-act' alt='Logo' />
                                    <h3>Proxy Academy</h3>
                                </div>

                                <div className='enquire' id='contact'>
                                    <p>
                                        For further enquries or information, Speak to one of our experts to help you make the
                                        right choice. Reach us here
                                    </p>
                                    <p>Phone/WhatsApp number</p>
                                    <p>+2348174453349/+2349152811014</p>
                                    <p>Email: Support@theproxyacademy.com</p>
                                </div>
                            </div>

                            <div className='media'>
                                <Facebook />
                                <Linkedin />
                                <Twitter />
                                <Instagram />
                            </div>
                        </div>

                    </div>
                    <div className='go'>
                        <div className='nav-links'>

                            <div>
                                <ul className='nav-list'>
                                    <Link to="home" spy={true} smooth={true} offset={10} duration={500}>
                                        <li>
                                            Home
                                        </li>
                                    </Link>

                                    <Link to="us" spy={true} smooth={true} offset={-10} duration={500}>
                                        <li>
                                            About Us
                                        </li>
                                    </Link>

                                    <Link to="test" spy={true} smooth={true} offset={-10} duration={500}>
                                        <li>
                                            Testimonials
                                        </li>
                                    </Link>

                                    <li>
                                        <a href='mailto:support@theproxyacademy.com'>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='go-cont'>
                            <div>
                                <input className='email' placeholder='Update in your inbox...' input='email' />
                                <Button words={`Go`} />
                            </div>
                            <small> Copyright 2022. All rights reserved. </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer