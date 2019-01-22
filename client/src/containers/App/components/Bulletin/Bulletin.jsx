import React, { Component } from 'react';
import {
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import './Bulletin.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import './components/Article/Article.css';
import twitter from '../../../../assets/twitter.png';
import github from '../../../../assets/github.png';
import linkedin from '../../../../assets/linkedin.png';

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
    document.getElementsByClassName('tabs', function(e){
      document
      e.preventDefault();
    });
    return (
      <Switch>
        <div id='bulletin' className='bulletin'>
          <Router>
            <div>
              <div className='tabs tab1'><a href='/creative_writing'>Creative Writing</a></div>
              <div className='tabs tab2'><a href='/literature_analysis'>Literature Analysis</a></div>
              <div className='tabs tab3'><a href='/research_papers'>Research Papers</a></div>
              <div className='tabs tab4'><a href='/web_development'>Web Development</a></div>
            </div>
          </Router>
          <div id='posts' className='posts'>
            <section className='posts1'>
              {/* <Header name={'Creative Writing'}/>
              <Header name={'Literature Analysis'}/>
              <Header name={'Research Papers'}/>
              <Header name={'Web Development'}/> */}
              { this.props.posts.creative.map((post, index) => ( <Post key={index} post={post} index={index} handleClick={this.props.handleClick}/> )) }
            </section>
            <section className='posts2'>
              { this.props.posts.literature.map((post, index) => ( <Post key={index} post={post} index={index} handleClick={this.props.handleClick}/> )) }
            </section>
            <section className='posts3'>
              { this.props.posts.research.map((post, index) => ( <Post key={index} post={post} index={index} handleClick={this.props.handleClick}/> )) }
            </section>
            <section className='posts4'>
              { this.props.posts.technical.map((post, index) => ( <Post key={index} post={post} index={index} handleClick={this.props.handleClick}/> )) }
            </section>
          </div>
          <div id='article' className='article'>
            <div className='paper'>
              <div className='pushpin paper-pushpin1'></div>
              <div className='pushpin paper-pushpin2'></div>
              <div className='pushpin paper-pushpin3'></div>
              <div className='pushpin paper-pushpin4'></div>
              <div id='details' className='article-details'>
                <h2 id='title' className='paper-title'>{this.props.article.title}Title</h2>
                <p id='author' className='paper-author'>{this.props.article.author}Author</p>
                <p id='year' className='paper-year'>{this.props.article.year}Year</p>
                <p id='summary' className='paper-summary'>{this.props.article.summary}Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem dolores recusandae at, voluptas qui harum pariatur, odit sint repellat cum tenetur nam, accusamus obcaecati impedit asperiores! Perspiciatis, doloremque ipsum.</p>
              </div>
              <iframe src={this.props.article.body} frameBorder="0" title='article'></iframe>
            </div>
            <div className='pseudo-paper'></div>
          </div>
          <div className='social-media'>
              <div><Header className='social-media-header' name={'Follow me:'}/></div>
              <div className='sm'><a href='/' target='_blank'><img src={github} alt='github'/></a></div>
              <div className='sm'><a href='/' target='_blank'><img src={linkedin} alt='linkedin'/></a></div>
              <div className='sm'><a href='/' target='_blank'><img src={twitter} alt='twitter'/></a></div>
          </div>
        </div>
      </Switch>
    );
  }
}

export default Bulletin;
