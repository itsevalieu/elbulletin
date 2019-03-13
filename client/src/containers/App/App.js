import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Bulletin from './components/Bulletin/Bulletin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      filteredPosts: {
        creative: [],
        research: [],
        literature: [],
        technical: []
      },
      posts: [],
      projects: {}
    }
  }
  componentDidMount(){
    this._getPosts();
    this._getProjects();
  }
  _getPosts () {
    axios(`https://elbulletin-db.herokuapp.com/api/posts/`)
		.then(({data}) => {
      let posts = data.data;
      let creativeResults = posts.filter(post => post.category === 'creative');
      let researchResults = posts.filter(post => post.category === 'research');
      let literatureResults = posts.filter(post => post.category === 'literature');
      let technicalResults = posts.filter(post => post.category === 'technical');
      let projectResults = posts.filter(post => post.category === 'project');
    
      this.setState({
        isLoading: false,
        posts: posts,
        filteredPosts: {
          creative: creativeResults,
          research: researchResults,
          literature: literatureResults,
          technical: technicalResults,
          project: projectResults
        }
      });
    }, (err) =>{
      this.setState({
        loading: false,
        err
      });
    });
  }
  _getProjects() {
    axios(`https://elbulletin-db.herokuapp.com/api/articles/`)
		.then(({data}) => {
      let projects = data.data;
      
      this.setState({
        isLoaded: true,
        projects: projects
      });
    }, (err) =>{
      this.setState({
        isLoaded: true,
        err
      });
    });
  }
  render() {
    return (
        <div className="App">
          <Bulletin posts={this.state.posts} filteredPosts={this.state.filteredPosts} projects={this.state.projects} />
        </div>
    );
  }
}

export default App;
