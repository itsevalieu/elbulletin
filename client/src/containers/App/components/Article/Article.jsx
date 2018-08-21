import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div id='article' className='article'>
        <div id='details' className='article-details'>
          <h1 id='title'></h1>
          <p id='author'></p>
          <p id='year'></p>
          <p id='summary'></p>
        </div>
        <div id='body'>
          <p id='text'></p>
        </div>
      </div>
    );
  }
}

export default Article;
