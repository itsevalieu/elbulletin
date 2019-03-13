import React, { Component } from 'react';
import './Project.css';
import gdrive from '../../../../../../assets/gdrive.png';
import githubRound from '../../../../../../assets/github-round.png';

class Project extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.project !== prevProps.project) {
      console.log('render updated');
    } else {
      console.log('render did not update', this.props.project);
    }
  }
  render() {
    if(this.props.project === '' || this.props.project === undefined) return null;

    return (
        <div>
          <div className='project'>
            <p className='project__title'>{this.props.project.title}</p>
            <p className='project__year'>{this.props.project.year}</p>
            <p className='project__body'>{this.props.project.summary}</p>  
          </div>
          <a className='project__link' href={this.props.project.body} target='_blank' rel='noopener noreferrer'><img className='project__icon project__icon--gdrive' src={gdrive} alt='icon'/></a>
          <a className='project__link' href={this.props.project.body} target='_blank' rel='noopener noreferrer'><img className='project__icon project__icon--github' src={githubRound} alt='icon'/></a>
        </div>
    );
  }
}

export default Project;