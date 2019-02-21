import React, { Component } from 'react';
import {
  Link,
  // Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import './Bulletin.css';
import Post from './components/Post/Post';
import Project from './components/Project/Project';
import Social from './components/Social/Social';
import Tab from './components/Tab/Tab';

class Bulletin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: '',
      article: {},
      tabs: [
        {
          name: 'Creative Writing',
          href: '/creative_writing',
          class: 'tab1'
        },
        {
          name: 'Literature Analysis',
          href: '/literature_analysis',
          class: 'tab2'
        },
        {
          name: 'Research Papers',
          href: '/research_papers',
          class: 'tab3'
        },
        {
          name: 'Web Development',
          href: '/web_development',
          class: 'tab4'
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      articleId: e.target.dataset.article
    }, () => {
      this._getArticle(this.state.articleId);
    });
  }
  _getArticle(id) {
    if(id === '') return null;
    let article = this.props.articles.filter( article => article._id === id);
    this.setState({
      article: article[0]
    });
    if(this.state.article === '') return null;
  }
  componentDidUpdate(nextProps, nextState) {
    if(nextProps.posts === this.props.posts) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return (
      // <Switch>
        <div className='bulletin'>
          <div className='bulletin__corkboard'>
            <div className='bulletin__header'>
              <Link to='/' className='bulletin__header--logo'>E.L Bulletin</Link>
            </div>
            <div className='bulletin__posts'>
              { this.props.posts.creative.map((post, index) => ( <Post key={index} post={post} handleClick={this.handleClick} articleId= {this.state.articleId}/> )) }
              { this.props.posts.literature.map((post, index) => ( <Post key={index} post={post} handleClick={this.handleClick} articleId= {this.state.articleId}/> )) }
              { this.props.posts.research.map((post, index) => ( <Post key={index} post={post} handleClick={this.handleClick} articleId= {this.state.articleId}/> )) }
              { this.props.posts.technical.map((post, index) => ( <Post key={index} post={post} handleClick={this.handleClick} articleId= {this.state.articleId}/> )) }
            </div>
          </div>
          <Project article={this.state.article} />
          <div className='bulletin__footer'>
            <Social/>
          </div>
          <Router>
            <div className='bulletin__tab'>
              { this.state.tabs.map((tab, index) =>(<Tab key={index} tab={tab} />))}
            </div>
          </Router>
        </div>
      // </Switch>
    );
  }
}

export default Bulletin;
// Page loads = get all posts from database
// Click tab = filter specific posts and z-index first, making others grey out and behind the filtered posts
// Web dev tabs should show frontend/ backend tabs under it
// Click on postit = get project and show on paper