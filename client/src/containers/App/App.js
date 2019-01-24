import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Bulletin/components/Header/Header';
import Bulletin from './components/Bulletin/Bulletin';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

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
    return axios(`https://elbulletin-db.herokuapp.com/api/articles/${id}`)
    .then((data) => {
      return data.data.article;
    }).then((article) => {
      this.setState({
        article: article
      });
    });
  }
  componentDidMount(){
    axios(`https://elbulletin-db.herokuapp.com/api/posts/`)
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
          <div className='bulletin-header'>
            <Header name={'E.L Bulletin'}/>
          </div>
          <div className='social-media'>
              <div><Header className='social-media-header' name={'Follow me:'}/></div>
              <div className='sm'><a href='/' target='_blank'><img src={github} alt='github'/></a></div>
              <div className='sm'><a href='/' target='_blank'><img src={linkedin} alt='linkedin'/></a></div>
              <div className='sm'><a href='/' target='_blank'><img src={twitter} alt='twitter'/></a></div>
          </div>
          <Bulletin posts={this.state.posts} handleClick={this.handleClick} article={this.state.article} articleId= {this.state.articleId}/>
        </div>
      </Router>
    );
  }
}

export default App;
