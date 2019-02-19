import React from 'react';
import './Social.css';
import twitter from './twitter.png';
import github from './github.png';
import linkedin from './linkedin.png';

function Social() {
    return (
        <div className='social'>
            <a className='social__link' href='https://github.com/itsevalieu' target='_blank' rel='noopener noreferrer'><img className='social__icon' src={github} alt='github'/></a>
            <a className='social__link' href='https://www.linkedin.com/in/eva-lieu/' target='_blank' rel='noopener noreferrer'><img className='social__icon' src={linkedin} alt='linkedin'/></a>
            <a className='social__link' href='https://twitter.com/itsevalieu' target='_blank' rel='noopener noreferrer'><img className='social__icon' src={twitter} alt='twitter'/></a>
        </div>
    );
}

export default Social;