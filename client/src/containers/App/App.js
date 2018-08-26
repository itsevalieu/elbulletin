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
      }
    }
  }
  componentDidMount(){
    let posts = axios(`http://elbulletin-db.herokuapp.com/api/posts/`)
		.then(({data}) => {
      console.log(data.data);
      this.setState({
        isLoaded: true,
        posts: data.data
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
          <Bulletin posts={this.state.posts} />
          {
            // if(artPath.match()) {
            // }
          }
          {/* <Route exact path={this.state.renderPath} component={Article} article={this.state.articles}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
