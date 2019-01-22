import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    let randomDeg = (Math.random() * (3 * plusOrMinus)) + 'deg';
    let postStyle = {
        transform: `rotateZ(${randomDeg})`
    };
    return (
      <div id='header' className='header' style={postStyle}>
        <div className='pushpin'></div>
        <a href='/'>{this.props.name}</a>
        <div className='pushpin'></div>
      </div>
    );
  }
}

export default Header;
