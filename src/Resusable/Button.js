import React from 'react';
import './Button.css';

const Button = ({words, white,}) => {
  return (
    <button className={white ? 'white' : 'button'} >
        {words}
    </button>
  )
}

export default Button