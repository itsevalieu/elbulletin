import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import './Post.css';

class Post extends Component {
  render() {
    return (
        <Link to={`${this.props.post.article}`}>
            <div className='post' onClick={this.props.handleClick} data-article={this.props.post.article}>
                <div className='pushpin'></div>
                <p data-article={this.props.post.article}>{this.props.post.title}</p>
                <p data-article={this.props.post.article}>{this.props.post.summary}</p>
            </div>
        </Link>
    );
  }
}

export default Post;
