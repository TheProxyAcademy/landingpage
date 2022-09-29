import React from 'react';
import './Button.css';

const Button = ({words, white,}) => {
  return (
    <button className={white ? 'white' : 'button'}  >
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSceBtAQ4Yt5BtjgK89Vk07SS_nhWs56oGTQvv4raTFMnuZaJg/viewform'>
          {words}
        </a>
    </button>
  )
}

export default Button