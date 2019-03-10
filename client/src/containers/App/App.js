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
      posts: {}
    }
  }
  componentDidMount(){
    this._loadPosts();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.posts === null) {
      this._loadPosts();
    }
  }
  _loadPosts() {
    axios(`https://elbulletin-db.herokuapp.com/api/posts/`)
		.then(({data}) => {
      console.log('posts', data);
      this.setState({
        isLoaded: true,
        posts: data.data
      });
      console.log(this.state.posts);
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
          <Bulletin posts={this.state.posts}/>
          {/* <Bulletin posts={this.state.posts} handleClick={this.handleClick} article={this.state.article} articleId= {this.state.articleId}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
