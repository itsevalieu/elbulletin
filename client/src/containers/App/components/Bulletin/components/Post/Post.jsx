import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import './Post.css';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
        this.toggleHover = this.toggleHover.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.post === this.props.post) {
          return false;
        } else {
          return true;
        }
    }
    toggleHover() {
        this.setState({hover: !this.state.hover });
    }
    render() {
        let color = {
            1: '#ffff99',
            2: '#ffbcd9',
            3: '#ccff00',
            4: '#00b9fb',
            5: '#cda4de',
            6: '#ffcc00'
        };
        let bkgdColor = color[Math.floor(Math.random()*7)];
        let pinColor = {
            backgroundColor: bkgdColor
        };
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        let randomDeg = (Math.random() * (5 * plusOrMinus)) + 'deg';
        let postStyle = {
            backgroundColor: bkgdColor,
            transform: `rotateZ(${randomDeg})`
        }
        // console.log('posts render');
        return (
            <Link to={`/${this.props.match.url}`}>
                <div className='post' onClick={this.props.handleClick} data-project={this.props.post.article} style={postStyle}>
                    <div className='pushpin' style={pinColor}></div>
                    <p data-project={this.props.post.article}>{this.props.post.title}</p>
                    <p data-project={this.props.post.article}>{this.props.post.summary}</p>
                </div>
            </Link>
        );
    }
}

export default Post;
