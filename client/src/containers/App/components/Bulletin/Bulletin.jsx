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
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>The Monk</p>
                <p>Short story about a father telling a story to his child about his days as a refugee living on an island.</p>
              </a>
            </div>
            <div className='post'>
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>Plastic Ring</p>
                <p>Short story about a father telling a story to his child about his days as a refugee living on an island.</p>
              </a>
            </div>
            <div className='post'>
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>Countdown</p>
                <p>Short story about a father telling a story to his child about his days as a refugee living on an island.</p>
              </a>
            </div>
          </section>
          <section id='posts-literature'>
            <div id='header' className='header'>
              <div className='pushpin'></div>
                <a href='/#article'>Literature Analysis</a>
              <div className='pushpin'></div>
            </div>
            <div className='post'>
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>What's it going to be then, eh?</p>
                <p>Short story about a father telling a story to his child about his days as a refugee living on an island.</p>
              </a>
            </div>
            <div className='post'>
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>Fight Club and Consumerism</p>
                <p>Short story about a father telling a story to his child about his days as a refugee living on an island.</p>
              </a>
            </div>
          </section>
          <section id='posts-research'>
            <div id='header' className='header'>
              <div className='pushpin'></div>
                <a href='/'>Research Papers</a>
              <div className='pushpin'></div>
            </div>
            <div className='post'>
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>Silence on the Los Angeles Front Lines</p>
                <p>Immigrant Garment Workers and Rampant Wage Theft in Los Angeles</p>
              </a>
            </div>
            <div className='post'>
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>Justice for Janitors</p>
                <p>Archival report on the Pasadena Justice for Janitors campaign.</p>
              </a>
            </div>
            <div className='post'>
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>The Gig Economy</p>
                <p>Uber, Lyft, and the changing economy surrounding independent contractors and tech companies.</p>
              </a>
            </div>
          </section>
          <section id='posts-technical'>
            <div id='header' className='header'>
              <div className='pushpin'></div>
                <a href='/'>Technical Writing</a>
              <div className='pushpin'></div>
            </div>
            <div className='post'>
              <a href='/#article'>
                <div className='pushpin'></div>
                <p>Revel Cheat Sheet</p>
                <p>Short story about a father telling a story to his child about his days as a refugee living on an island.</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Bulletin;
