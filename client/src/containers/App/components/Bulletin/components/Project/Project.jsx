import React, { Component } from 'react';
// import {
//   Switch
// } from 'react-router-dom';
import './Project.css';

class Project extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.articleId === this.props.articleId) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    // if(this.props.articleId === '' || this.props.articleId === undefined) return null;

    return (
      // <Switch>
        <div className='bulletin__chalkboard'>
          <div className='project'>
            <p className='project__title'>Title</p>
            <p className='project__year'>Year</p>
            <p className='project__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem dolores recusandae at, voluptas qui harum pariatur, odit sint repellat cum tenetur nam, accusamus obcaecati impedit asperiores! Perspiciatis, doloremque ipsum..</p>  
          </div>
        </div>
      // </Switch>
    );
  }
}

export default Project;
/* 
<h2 className='paper-title'>{this.props.article.title}Title</h2>
<p className='paper-author'>{this.props.article.author}Author</p>
<p className='paper-year'>{this.props.article.year}Year</p>
<p className='paper-summary'>{this.props.article.summary}Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem dolores recusandae at, voluptas qui harum pariatur, odit sint repellat cum tenetur nam, accusamus obcaecati impedit asperiores! Perspiciatis, doloremque ipsum.</p> */