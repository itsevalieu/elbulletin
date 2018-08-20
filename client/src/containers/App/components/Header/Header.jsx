import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id='header' className='header'>
        <div className='pushpin'></div>
        <a href='/'>E.L Bulletin</a>
        <div className='pushpin'></div>
      </div>
    );
  }
}

export default Header;
