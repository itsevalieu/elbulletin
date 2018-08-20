import React, { Component } from 'react';
import './App.css';

import Bulletin from './components/Bulletin/Bulletin';
import Article from './components/Article/Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bulletin/>
        <Article/>
      </div>
    );
  }
}

export default App;
