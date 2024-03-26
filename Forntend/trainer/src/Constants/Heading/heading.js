import React from 'react';
import './heading.css';

function Heading({ text }) {
  return <div className='heading-main'>
    <h2 className='head-main'>{text}</h2>
    </div>;
}

export default Heading;
