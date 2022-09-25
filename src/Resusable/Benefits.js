import React from 'react';
import './Benefits.css';

const Benefits = ({id, headings, words}) => {
  return (
    <div className='benefits-container'>
        <div className='numbered'>
            {id}
        </div>

        <div className='diff-diff'>
            <h6>{headings}</h6>
            <p>
               {words}
            </p>
        </div>
    </div>
  )
}

export default Benefits