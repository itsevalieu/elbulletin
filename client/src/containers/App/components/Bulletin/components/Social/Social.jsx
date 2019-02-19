import React from 'react';
import {
    Link
  } from 'react-router-dom';
import './Social.css';
import Header from '../Header/Header';
import twitter from './twitter.png';
import github from './github.png';
import linkedin from './linkedin.png';

function Social(){
    return (
        <div className='social-media'>
            <div><Header className='social-media-header' name={'Follow me:'}/></div>
            <div className='sm'><a href='/' target='_blank'><img src={github} alt='github'/></a></div>
            <div className='sm'><a href='/' target='_blank'><img src={linkedin} alt='linkedin'/></a></div>
            <div className='sm'><a href='/' target='_blank'><img src={twitter} alt='twitter'/></a></div>
        </div>
    );
}

export default Social;
/* Needs:
1. a => Link
2. links for social media
3. Restyle for tab on side om click
*/