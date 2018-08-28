import React, { Component } from 'react';
import {
  BrowserRouter as Router
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
      articleId: '',
      article: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      articleId: e.target.dataset.article
    });
    this.getArticle(this.state.articleId);
  }
  getArticle(id) {
    if(id === '') return null;
    console.log(id);
    return axios(`http://elbulletin-db.herokuapp.com/api/articles/${id}`)
    .then((data) => {
      return data.data.article;
    }).then((article) => {
      this.setState({
        article: article
      });
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
          <Article article={this.state.article}/>
            
        </div>
      </Router>
    );
  }
}

export default App;
