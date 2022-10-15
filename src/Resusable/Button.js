import React from 'react';
import './Button.css';

const Button = ({words, white,}) => {
  return (
        <a className={white ? 'white' : 'button'} href='https://docs.google.com/forms/d/e/1FAIpQLSceBtAQ4Yt5BtjgK89Vk07SS_nhWs56oGTQvv4raTFMnuZaJg/viewform' target='_blank' rel='noreferrer'>
          {words}
        </a>
  )
}

export default Button