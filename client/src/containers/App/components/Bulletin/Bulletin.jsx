import React, { Component } from 'react';
import './Bulletin.css';
import Header from '../Header/Header';

class Bulletin extends Component {
  render() {
    return (
      <div id='bulletin' className='bulletin'>
        <Header/>
        <div id='posts' className='posts'>
          <section id='posts-creative'>
            <div id='header' className='header'>
              <div className='pushpin'></div>
                <a href='/'>Creative Writing</a>
              <div className='pushpin'></div>
            </div>
            <div className='post'>
              <div className='pushpin'></div>
              <p>The Monk</p><p>Short story about a father telling a story to his child about his days as a refugee living on an island.</p>
            </div>
            <div className='post'>Post</div>
            <div className='post'>Post</div>
          </section>
          <section id='posts-literature'>
            <div id='header' className='header'>
              <div className='pushpin'></div>
                <a href='/'>Literature Analysis</a>
              <div className='pushpin'></div>
            </div>
            <div className='post'>Post</div>
            <div className='post'>Post</div>
          </section>
          <section id='posts-research'>
            <div id='header' className='header'>
              <div className='pushpin'></div>
                <a href='/'>Research Papers</a>
              <div className='pushpin'></div>
            </div>
            <div className='post'>Post</div>
            <div className='post'>Post</div>
            <div className='post'>Post</div>
          </section>
          <section id='posts-technical'>
            <div id='header' className='header'>
              <div className='pushpin'></div>
                <a href='/'>Technical Writing</a>
              <div className='pushpin'></div>
            </div>
            <div className='post'>Post</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Bulletin;
