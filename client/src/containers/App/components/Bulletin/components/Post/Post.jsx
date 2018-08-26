import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import './Post.css';

class Post extends Component {
  render() {
    return (
        <Link key={this.props.index} to={this.props.post.path}>
            <div className='post' onClick={this.props.handleClick} data-article={this.props.post.path}>
                <div className='pushpin'></div>
                <p data-article={this.props.post.path}>{this.props.post.title}</p>
                <p data-article={this.props.post.path}>{this.props.post.summary}</p>
            </div>
        </Link>
    );
  }
}

export default Post;
