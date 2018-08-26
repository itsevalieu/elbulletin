import React, { Component } from 'react';
import {
  Switch
} from 'react-router-dom';
import './Article.css';
import axios from 'axios';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.articleId,
      article: {}
    }
  }
  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      console.log(this.state);
      if(nextProps.value !== this.state) {
        this.setState({
          isLoaded: true,
          articleId: this.props.articleId
        });
      }
    }
  componentDidMount() {
    console.log('cats', this.state.articleId);
    axios.get(`http://elbulletin-db.herokuapp.com/api/articles/`, {
      params: {
        id: this.state.articleId
      }
    }).then(({data}) => {
      console.log('article data', data);
      this.setState({
        isLoaded: true,
        article: data.data
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
      <Switch>
        <div id='article' className='article'>
          <div id='details' className='article-details'>
            <h1 id='title'>{this.state.article.title}</h1>
            <p id='author'>{this.state.article.author}</p>
            <p id='year'>{this.state.article.year}</p>
            <p id='summary'>{this.state.article.summary}</p>
          </div>
          <div id='body' className='article-body'>{this.state.article.body}</div>
        </div>
      </Switch>
    );
  }
}

export default Article;
