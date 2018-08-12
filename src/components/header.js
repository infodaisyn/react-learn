import React, { Component } from 'react';
import Title from './header/title';
import '../App.scss';

class Header extends Component { 
  render() {
    console.log(this.props);
    return (
     <Title title={this.props.title}/>
    );
  }
}

export default Header;