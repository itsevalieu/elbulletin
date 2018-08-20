import React, { Component } from 'react';
import './Bulletin.css';
import Header from '../Header/Header';

class Bulletin extends Component {
  render() {
    return (
      <div id='bulletin' className='bulletin'>
        <Header/>
        <div>Cat</div>
      </div>
    );
  }
}

export default Bulletin;
