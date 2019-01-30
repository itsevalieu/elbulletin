import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import './Tab.css';

class Tab extends Component {
    render() {
        return (
            <Link to={this.props.tab.href} className={`${'tab '+ this.props.tab.class}`}>{this.props.tab.name}</Link>
        );
    }
}

export default Tab;
// {`${this.props.tab.endpoint}`}{this.props.tab.name}