import React from 'react';
import Logo from '../Icons/Logo'
import Facebook from '../Icons/Facebook';
import Youtube from '../Icons/Youtube';
import Twitter from '../Icons/Twitter';
import Pinterest from '../Icons/Pinterest'
import Instagram from '../Icons/Instagram';
import Button from '../Resusable/Button';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <div className='footer'>
                    <div className='footer-nav'>
                        <div className='media-container'>
                            <h3>Proxy Academy</h3>

                            <div className='media'>
                                <Facebook />
                                <Youtube />
                                <Twitter />
                                <Pinterest />
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

                            <div>
                                
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