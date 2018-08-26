import React, { Component } from 'react';
import {
  Switch
} from 'react-router-dom';
import './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <div id='article' className='article'>
          <div id='details' className='article-details'>
            <h1 id='title'>{this.props.article.title}</h1>
            <p id='author'>{this.props.article.author}</p>
            <p id='year'>{this.props.article.year}</p>
            <p id='summary'>{this.props.article.summary}</p>
          </div>
          <div id='body' className='article-body'>{this.props.article.body}</div>
        </div>
      </Switch>
    );
  }
}

export default Article;
