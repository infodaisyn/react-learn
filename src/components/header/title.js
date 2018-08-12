import React, { Component } from 'react';
import '../../App.scss';

class Title extends Component { 
  render() {
    return (
    <h1>Title of the website {this.props.title}</h1>
    );
  }
}

export default Title;