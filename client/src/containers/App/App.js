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
      posts: {
        creative: [],
        research: [],
        literature: [],
        technical: []
      },
      articles: {}
    }
  }
  componentDidMount(){
    this._getPosts();
    this._getArticles();
  }
  _getPosts () {
    axios(`https://elbulletin-db.herokuapp.com/api/posts/`)
		.then(({data}) => {
      let results = data.data;
      let creativeResults = results.filter(post => post.category === 'creative');
      let researchResults = results.filter(post => post.category === 'research');
      let literatureResults = results.filter(post => post.category === 'literature');
      let technicalResults = results.filter(post => post.category === 'technical');
      let projectResults = results.filter(post => post.category === 'project');
    
      this.setState({
        isLoading: false,
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
        loading: false,
        err
      });
    });
  }
  _getArticles() {
    axios(`https://elbulletin-db.herokuapp.com/api/articles/`)
		.then(({data}) => {
      let articles = data.data;
      console.log('articles', articles);
      
      this.setState({
        isLoaded: true,
        articles: articles
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
          <Bulletin posts={this.state.posts} articles={this.state.articles} />
        </div>
      </Router>
    );
  }
}

export default App;
