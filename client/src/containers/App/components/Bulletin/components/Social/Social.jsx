import React from 'react';
import {
    Link
  } from 'react-router-dom';
import './Social.css';
import twitter from './twitter.png';
import github from './github.png';
import linkedin from './linkedin.png';

function Social() {
    return (
        <div className='social'>
            <Link to='https://github.com/itsevalieu' target='_blank'><img className='social__icon' src={github} alt='github'/></Link>
            <Link to='https://www.linkedin.com/in/eva-lieu/' target='_blank'><img className='social__icon' src={linkedin} alt='linkedin'/></Link>
            <Link to='https://twitter.com/itsevalieu' target='_blank'><img className='social__icon' src={twitter} alt='twitter'/></Link>
        </div>
    );
}

export default Social;