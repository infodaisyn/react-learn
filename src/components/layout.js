import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import {Button} from 'react-bootstrap';
import '../App.scss';

class Layout extends Component { 
  constructor () {
      super();
      this.state = {
          title:"welcome",
      };
  }

  changeTitle(title){
      this.setState({title});
  }

  render() {
    // const title = "welcome"; 
    // setTimeout(()=> {
    //     this.setState({title:'goan'});
    // },3000)
    return (
     <div>
          <Button bsStyle="success">Success</Button>
         {/* My name is {this.state.name} */}
         <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
         {/* <Header name={"name is something"} title={"welcome1"}/>          */}
         <Footer />
     </div>    
    );
  }
}

export default Layout;