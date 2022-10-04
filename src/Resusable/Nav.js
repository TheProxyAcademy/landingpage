import React from 'react';
import { useState } from 'react';
import Button from './Button';
import './Nav.css';
import Ham from '../Icons/Hamburger';
import Close from '../Icons/Close';
import Logo from '../Icons/Logo.png';
import { Link } from 'react-scroll';

const Nav = () => {

    const [toggle, setToggle] = useState(false);

    function isToggle(params) {
        setToggle(!toggle)
    }

    return (
        <div className='nav-container'>
            <div className='logo'>
                <img src={Logo} className='logo-act' alt='Logo' />
                <h3>Proxy Academy</h3>
            </div>

            <ul className='ul'>



                <Link to="us" spy={true} smooth={true} offset={-10} duration={500}>
                    <li>
                        About Us
                    </li>
                </Link>

                <Link to="test" spy={true} smooth={true} offset={-100} duration={500}>
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

            <Button words={'Enroll'} />


            <div className='ham-container' >
                <Ham onClick={isToggle} className={toggle ? 'hide' : 'white-ham'} />

                <Close onClick={isToggle} className={toggle ? 'shown' : 'hidden'} />

            </div>


            <div className={toggle ? 'mobile nav' : 'mobile'} >
                <ul className='mobile-list'>

                    <Link to="us" spy={true} smooth={true} offset={10} duration={500}>
                        <li>
                            About Us
                        </li>
                    </Link>

                    <Link to="test" spy={true} smooth={true} offset={10} duration={500}>
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

                <Button words={'Enroll'} white='white' />
            </div>
        </div>
    )
}

export default Nav