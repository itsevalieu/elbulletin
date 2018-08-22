import React, { Component } from 'react';
import {
  Link,
  Switch
} from 'react-router-dom';
import './Bulletin.css';
import Header from '../Header/Header';

class Bulletin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creative: this.props.posts.creative,
      research: this.props.posts.research,
      literature: this.props.posts.literature,
      technical: this.props.posts.technical
    }
  }
  render() {
    return (
      <Switch>
        <div id='bulletin' className='bulletin'>
          <Header/>
          <div id='posts' className='posts'>
            <section id='posts-creative'>
              <div id='header' className='header'>
                <div className='pushpin'></div>
                  <a href='/'>Creative Writing</a>
                <div className='pushpin'></div>
              </div>
              { 
                this.state.creative.map((post, index) => (
                  <Link key={index} to={post.path}>
                    <div className='post' onClick={this.props.handleClick} data-article={post.path}>
                        <div className='pushpin'></div>
                        <p data-article={post.path}>{post.title}</p>
                        <p data-article={post.path}>{post.summary}</p>
                    </div>
                  </Link>
                ))
              }
            </section>
            <section id='posts-literature'>
              <div id='header' className='header'>
                <div className='pushpin'></div>
                  <a href='/#article'>Literature Analysis</a>
                <div className='pushpin'></div>
              </div>
              { 
                this.state.literature.map((post, index) => (
                  <Link key={index} to={post.path}>
                    <div className='post' onClick={this.props.handleClick} data-article={post.path}>
                        <div className='pushpin'></div>
                        <p data-article={post.path}>{post.title}</p>
                        <p data-article={post.path}>{post.summary}</p>
                    </div>
                  </Link>
                ))
              }
            </section>
            <section id='posts-research'>
              <div id='header' className='header'>
                <div className='pushpin'></div>
                  <a href='/'>Research Papers</a>
                <div className='pushpin'></div>
              </div>
              { 
                this.state.research.map((post, index) => (
                  <Link key={index} to={post.path}>
                    <div className='post' onClick={this.props.handleClick} data-article={post.path}>
                        <div className='pushpin'></div>
                        <p data-article={post.path}>{post.title}</p>
                        <p data-article={post.path}>{post.summary}</p>
                    </div>
                  </Link>
                ))
              }
            </section>
            <section id='posts-technical'>
              <div id='header' className='header'>
                <div className='pushpin'></div>
                  <a href='/'>Web Development</a>
                <div className='pushpin'></div>
              </div>
              { 
                this.state.technical.map((post, index) => (
                  <Link key={index} to={post.path}>
                    <div className='post' onClick={this.props.handleClick} data-article={post.path}>
                        <div className='pushpin'></div>
                        <p data-article={post.path}>{post.title}</p>
                        <p data-article={post.path}>{post.summary}</p>
                    </div>
                  </Link>
                ))
              }
            </section>
          </div>
        </div>
      </Switch>
    );
  }
}

export default Bulletin;
