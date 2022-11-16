import React from 'react';
import './Button.css';

const Button = ({words, white,}) => {
  return (
        <a className={white ? 'white' : 'button'} href='https://tinyurl.com/theproxyacademy' target='_blank' rel='noreferrer'>
          {words}
        </a>
  )
}

export default Button