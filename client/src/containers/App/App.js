import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Bulletin from './components/Bulletin/Bulletin';
import Article from './components/Article/Article';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: {
        creative: [],
        research: [],
        literature: [],
        technical: []
      },
      articleId: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      articleId: e.target.dataset.article
    });
  }
  componentDidMount(){
    axios(`http://elbulletin-db.herokuapp.com/api/posts/`)
		.then(({data}) => {
      let results = data.data;
      let creativeResults = results.filter(post => post.category === 'creative');
      let technicalResults = results.filter(post => post.category === 'technical');
      let literatureResults = results.filter(post => post.category === 'literature');
      let projectResults = results.filter(post => post.category === 'project');
      let researchResults = results.filter(post => post.category === 'research');

      this.setState({
        isLoaded: true,
        posts: {
          creative: creativeResults,
          research: researchResults,
          literature: literatureResults,
          technical: technicalResults,
          project: projectResults
        }
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
      <Router>
        <div className="App">
          <Bulletin posts={this.state.posts} handleClick={this.handleClick}/>
          <Article articleId={this.state.articleId}/>
        </div>
      </Router>
    );
  }
}

export default App;
