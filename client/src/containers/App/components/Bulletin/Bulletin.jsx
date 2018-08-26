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
      // posts: {
      //   creative: this.props.posts.creative,
      //   research: this.props.posts.research,
      //   literature: this.props.posts.literature,
      //   technical: this.props.posts.technical
      // }  
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log(e.target.dataset.article);
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //   console.log(this.state);
  //   if(nextProps.value !== this.state) {
  //     this.setState({
  //       isLoaded: true,
  //       posts: {
  //         creative: this.props.posts.creative,
  //         research: this.props.posts.research,
  //         literature: this.props.posts.literature,
  //         technical: this.props.posts.technical
  //       }
  //     });
  //   }
  // }
  render() {
    return (
      <Switch>
        <div id='bulletin' className='bulletin'>
          <Header name={'E.L Bulletin'}/>
          <div id='posts' className='posts'>
            <section id='posts-creative'>
              <Header name={'Creative Writing'}/>
              { this.props.posts.creative.map((post, index) => ( <Post key={index} post={post} index={index} handleClick={this.handleClick}/> )) }
            </section>
            <section id='posts-literature'>
              <Header name={'Literature Analysis'}/>
              { this.props.posts.literature.map((post, index) => ( <Post key={index}  post={post} index={index}/> )) }
            </section>
            <section id='posts-research'>
              <Header name={'Research Papers'}/>
              { this.props.posts.research.map((post, index) => ( <Post key={index}  post={post} index={index}/> )) }
            </section>
            <section id='posts-technical'>
              <Header name={'Web Development'}/>
              { this.props.posts.technical.map((post, index) => ( <Post key={index}  post={post} index={index}/> )) }
            </section>
          </div>
        </div>
      </Switch>
    );
  }
}

export default Bulletin;
