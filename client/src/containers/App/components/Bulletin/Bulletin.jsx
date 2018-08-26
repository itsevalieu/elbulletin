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
    this.state = {
      creative: this.props.posts.creative,
      research: this.props.posts.research,
      literature: this.props.posts.literature,
      technical: this.props.posts.technical
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log(e.target.dataset.article);
  }
  render() {
    return (
      <Switch>
        <div id='bulletin' className='bulletin'>
          <Header name={'E.L Bulletin'}/>
          <div id='posts' className='posts'>
            <section id='posts-creative'>
              <Header name={'Creative Writing'}/>
              { this.state.creative.map((post, index) => ( <Post post={post} index={index} handleClick={this.handleClick}/> )) }
            </section>
            <section id='posts-literature'>
              <Header name={'Literature Analysis'}/>
              { this.state.literature.map((post, index) => ( <Post post={post} index={index}/> )) }
            </section>
            <section id='posts-research'>
              <Header name={'Research Papers'}/>
              { this.state.research.map((post, index) => ( <Post post={post} index={index}/> )) }
            </section>
            <section id='posts-technical'>
              <Header name={'Web Development'}/>
              { this.state.technical.map((post, index) => ( <Post post={post} index={index}/> )) }
            </section>
          </div>
        </div>
      </Switch>
    );
  }
}

export default Bulletin;
