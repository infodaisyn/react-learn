import React, { Component } from 'react';
import '../../App.scss';

class Title extends Component { 
  render() {
    return (
    <div>  
    <h1>Title of the website {this.props.title}</h1>
    </div>
    );
  }
}

export default Title;