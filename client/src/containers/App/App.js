import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Bulletin from './components/Bulletin/Bulletin';
import Article from './components/Article/Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Bulletin/>
        <Article/>
      </div>
    );
  }
}

export default App;
