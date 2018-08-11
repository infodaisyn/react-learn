import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import '../App.scss';

class Layout extends Component { 
  render() {
    return (
     <div>
         <Header />
         <Footer />
     </div>    
    );
  }
}

export default Layout;