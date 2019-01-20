import React, { Component } from 'react';
import {
  Switch
} from 'react-router-dom';
import './Bulletin.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import './components/Article/Article.css';

class Bulletin extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.posts === this.props.posts) {
      return false;
    } else {
      return true;
    }
    if(nextProps.articleId === this.props.articleId) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log('bulletin renders');
    console.log('article render');
    // if(this.props.articleId === '' || this.props.articleId === undefined) return null;
    return (
      <Switch>
        <div id='bulletin' className='bulletin'>
          {/* <Header name={'E.L Bulletin'}/> */}
          <div>
            <div className='tabs tab1'>Creative Writing</div>
            <div className='tabs tab2'>Literature Analysis</div>
            <div className='tabs tab3'>Research Papers</div>
            <div className='tabs tab4'>Web Development</div>
          </div>
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
          <div id='article' className='article'>
            <div id='details' className='article-details'>
              <h1 id='title'>{this.props.article.title}</h1>
              <p id='author'>{this.props.article.author}</p>
              <p id='year'>{this.props.article.year}</p>
              <p id='summary'>{this.props.article.summary}</p>
            </div>
            <iframe src={this.props.article.body} frameBorder="0" title='article'></iframe>
          </div>
        </div>
      </Switch>
    );
  }
}

export default Bulletin;
