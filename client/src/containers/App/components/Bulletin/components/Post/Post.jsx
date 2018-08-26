import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import './Post.css';

class Post extends Component {
  render() {
    return (
        <Link to={`/api/articles/${this.props.post.article}`}>
            <div className='post' onClick={this.props.handleClick}>
                <div className='pushpin'></div>
                <p>{this.props.post.title}</p>
                <p>{this.props.post.summary}</p>
            </div>
        </Link>
    );
  }
}

export default Post;
