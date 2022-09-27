import React from 'react';
import { useState } from 'react';
import Button from './Button';
import './Nav.css';
import Ham from '../Icons/Hamburger';
import Close from '../Icons/Close'

const Nav = () => {

    const [toggle, setToggle] = useState(false);

    function isToggle(params) {
        setToggle(!toggle)
    }

    return (
        <div className='nav-container'>
            <div className='logo'>
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav