import React from 'react';
import { useState } from 'react';
import Button from './Button';
import './Nav.css';
import Ham from '../Icons/Hamburger';
import Close from '../Icons/Close';
import Logo from '../Icons/Logo.png';

const Nav = () => {

    const [toggle, setToggle] = useState(false);

    function isToggle(params) {
        setToggle(!toggle)
    }

    return (
        <div className='nav-container'>
            <div className='logo'>
             <img src={Logo} className='logo-act' alt ='Logo'/>
                <h3>Proxy Academy</h3>
            </div>

            <ul className='ul'>
                <li>
                    About Us
                </li>

                <li>
                    Testimonials
                </li>

                <li>
                    Contact Us
                </li>
            </ul>

            <Button words={'Enroll'} />

            
            <div className='ham-container' >
                <Ham onClick={isToggle}  className={toggle ? 'hide' : 'white-ham'}/>

                <Close onClick={isToggle} className={toggle ? 'shown' : 'hidden'} />
    
            </div>


            <div className={toggle ? 'mobile nav' : 'mobile'} >
                <ul className='mobile-list'>

                <li>
                    About Us
                </li>

                <li>
                    Testimonials
                </li>

                <li>
                    Contact Us
                </li>

             
                </ul>

                <Button words={'Enroll'} white='white' />
            </div>
        </div>
    )
}

export default Nav