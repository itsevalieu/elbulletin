import React, { Component } from 'react';
import {
  Switch
} from 'react-router-dom';
import './Bulletin.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

class Bulletin extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps === this.props) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return (
      <Switch>
        <div id='bulletin' className='bulletin'>
          <Header name={'E.L Bulletin'}/>
          <div id='posts' className='posts'>
            <section id='posts-creative'>
              <Header name={'Creative Writing'}/>
              { this.props.posts.creative.map((post, index) => ( <Post id='post' key={index} post={post} index={index} handleClick={this.props.handleClick}/> )) }
            </section>
            <section id='posts-literature'>
              <Header name={'Literature Analysis'}/>
              { this.props.posts.literature.map((post, index) => ( <Post key={index} post={post} index={index} handleClick={this.props.handleClick}/> )) }
            </section>
            <section id='posts-research'>
              <Header name={'Research Papers'}/>
              { this.props.posts.research.map((post, index) => ( <Post key={index} post={post} index={index} handleClick={this.props.handleClick}/> )) }
            </section>
            <section id='posts-technical'>
              <Header name={'Web Development'}/>
              { this.props.posts.technical.map((post, index) => ( <Post key={index} post={post} index={index} handleClick={this.props.handleClick}/> )) }
            </section>
          </div>
        </div>
      </Switch>
    );
  }
}

export default Bulletin;
