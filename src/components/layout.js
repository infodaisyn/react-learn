import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import '../App.scss';

class Layout extends Component { 
  constructor () {
      super();
      this.state = {name:'jack'};
  }  

  render() {
    setTimeout(()=>{
        this.setState({name:'baba'});
    },3000)  
    return (
     <div>
         My name is {this.state.name}
         <Header />
         <Footer />
     </div>    
    );
  }
}

export default Layout;