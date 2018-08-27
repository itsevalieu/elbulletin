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
    if(this.props.article === null || this.props.article === undefined) return null;

    return (
      <Switch>
        <div id='article' className='article'>
          <div id='details' className='article-details'>
            <h1 id='title'>{this.props.article.title}</h1>
            <p id='author'>{this.props.article.author}</p>
            <p id='year'>{this.props.article.year}</p>
            <p id='summary'>{this.props.article.summary}</p>
          </div>
          <div id='body' className='article-body'> 
            <p>{this.props.article.body}</p> 
          </div>
        </div>
      </Switch>
    );
  }
}

export default Article;