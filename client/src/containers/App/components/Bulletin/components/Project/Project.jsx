import React, { Component } from 'react';
// import {
//   Switch
// } from 'react-router-dom';
import './Project.css';
import gdrive from '../../../../../../assets/gdrive.png';
import githubRound from '../../../../../../assets/github-round.png';

class Project extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.article !== prevProps.article) {
      console.log('render updated');
    } else {
      console.log(this.props.article);
    }
  }
  render() {
    if(this.props.article === '' || this.props.article === undefined) return null;

    return (
      // <Switch>
        <div className='bulletin__chalkboard'>
          <div className='project'>
            <p className='project__title'>{this.props.article.title}</p>
            <p className='project__year'>{this.props.article.year}</p>
            <p className='project__body'>{this.props.article.summary}</p>  
          </div>
          <a className='project__link' href={this.props.article.body} target='_blank' rel='noopener noreferrer'><img className='project__icon project__icon--gdrive' src={gdrive} alt='icon'/></a>
          <a className='project__link' href={this.props.article.body} target='_blank' rel='noopener noreferrer'><img className='project__icon project__icon--github' src={githubRound} alt='icon'/></a>
        </div>
      // </Switch>
    );
  }
}

export default Project;