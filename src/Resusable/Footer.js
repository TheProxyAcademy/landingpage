import React from 'react';
import Facebook from '../Icons/Facebook';
import Linkedin from '../Icons/linkedin';
import Twitter from '../Icons/Twitter';
import Instagram from '../Icons/Instagram';
import Logo from '../Icons/Logo.png'
import Button from '../Resusable/Button';
import './Footer.css'



const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <div className='footer'>
                    <div className='footer-nav'>
                        <div className='media-container'>
                            <div className='footer-logo'>
                                <img src={Logo} className='logo-act' alt='Logo' />
                                <h3>Proxy Academy</h3>
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
                                    <li>
                                        Home
                                    </li>

                                    <li>
                                        Testimonials
                                    </li>

                                    <li>
                                        Contact Us
                                    </li>

                                    <li>
                                        About Us
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