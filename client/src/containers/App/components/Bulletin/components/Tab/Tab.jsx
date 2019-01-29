import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import './Tab.css';

class Tab extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Link to='/cats' className='tab'>Cat</Link>
        );
    }
}

export default Tab;
// {`${this.props.tab.endpoint}`}{this.props.tab.name}