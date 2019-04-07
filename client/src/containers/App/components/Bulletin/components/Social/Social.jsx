import React from 'react';
import './Social.css';
import twitter from './twitter.png';
import github from './github.png';
import linkedin from './linkedin.png';
import eraser from './eraser.png';
import chalk from './chalk.png';

function Social() {
    return (
        <div className='social'>
            <div className='prop__box'>
                <img className='prop' src={eraser} alt='eraser'/>
                <img className='prop prop-chalk' src={chalk} alt='chalk'/>
            </div>
            <div className='clipboard'>
                <a className='social__link' href='https://github.com/itsevalieu' target='_blank' rel='noopener noreferrer'><img className='social__icon' src={github} alt='github'/></a>
                <a className='social__link' href='https://www.linkedin.com/in/eva-lieu/' target='_blank' rel='noopener noreferrer'><img className='social__icon' src={linkedin} alt='linkedin'/></a>
                <a className='social__link' href='https://twitter.com/itsevalieu' target='_blank' rel='noopener noreferrer'><img className='social__icon' src={twitter} alt='twitter'/></a>
            </div>
            {/* <img className='social__icon social__link' src={clipboard} /> */}

        </div>
    );
}

export default Social;