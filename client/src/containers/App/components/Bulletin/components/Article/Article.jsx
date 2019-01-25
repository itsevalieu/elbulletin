import React, { Component } from 'react';
import {
  Switch
} from 'react-router-dom';
import './Article.css';

// Paper will rerender onClick
class Paper extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.articleId === this.props.articleId) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    if(this.props.articleId === '' || this.props.articleId === undefined) return null;
    console.log('article render');
    return (
      <Switch>
        <div id='article' className='article'>
          <div id='details' className='article-details'>
            <h1 id='title'>{this.props.article.title}</h1>
            <p id='author'>{this.props.article.author}</p>
            <p id='year'>{this.props.article.year}</p>
            <p id='summary'>{this.props.article.summary}</p>
          </div>
          <iframe src={this.props.article.body} frameBorder="0"></iframe>
        </div>
      </Switch>
    );
  }
}

export default Paper;