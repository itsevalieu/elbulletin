import React, { Component } from 'react';
import {
  Link,
  Switch,
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
      projectId: '',
      project: {},
      tabs: [
        {
          name: 'About',
          href: '/about',
          class: 'tab1'
        },
        {
          name: 'Portfolio',
          href: '/portfolio',
          class: 'tab2'
        },
        {
          name: 'Creative Writing',
          href: '/creative_writing',
          class: 'tab3'
        },
        {
          name: 'Literature Analysis',
          href: '/literature_analysis',
          class: 'tab4'
        },
        {
          name: 'Research Papers',
          href: '/research_papers',
          class: 'tab5'
        },
        {
          name: 'Web Development',
          href: '/web_development',
          class: 'tab6'
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      projectId: e.target.dataset.project
    }, () => {
      this._getProject(this.state.projectId);
    });
  }
  _getProject(id) {
    if(id === '') return null;
    let project = this.props.projects.filter( project => project._id === id);

    this.setState({
      project: project[0]
    });
    if(this.state.project === '') return null;
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
      <Switch>
        <div className='bulletin'>
          <div className='bulletin__corkboard'>
            <div className='bulletin__header'>
              <Link to='/' className='bulletin__header--logo'>E.L Bulletin</Link>
            </div>
            <div className='bulletin__posts'>
              { this.props.posts.creative.map((post, index) => ( <Post key={index} post={post} handleClick={this.handleClick} projectId= {this.state.projectId}/> )) }
              { this.props.posts.literature.map((post, index) => ( <Post key={index} post={post} handleClick={this.handleClick} projectId= {this.state.projectId}/> )) }
              { this.props.posts.research.map((post, index) => ( <Post key={index} post={post} handleClick={this.handleClick} projectId= {this.state.projectId}/> )) }
              { this.props.posts.technical.map((post, index) => ( <Post key={index} post={post} handleClick={this.handleClick} projectId= {this.state.projectId}/> )) }
            </div>
          </div>
          <div className='bulletin__chalkboard'>
            <Project project={this.state.project} />
          </div>
          <div className='bulletin__footer'>
            <Social/>
          </div>
          <Router>
            <div className='bulletin__tab'>
              { this.state.tabs.map((tab, index) =>(<Tab key={index} tab={tab} />))}
            </div>
          </Router>
        </div>
      </Switch>
    );
  }
}

export default Bulletin;
// Page loads = get all posts from database
// Click tab = filter specific posts and z-index first, making others grey out and behind the filtered posts
// Web dev tabs should show frontend/ backend tabs under it
// Click on postit = get project and show on paper