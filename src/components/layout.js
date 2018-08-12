import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import '../App.scss';

class Layout extends Component { 
  constructor () {
      super();
      this.state = {
          title:"welcome",
      };
  }
  
  render() {
    // const title = "welcome";
    // setTimeout(()=>{
    //     this.setState({name:'baba'});
    // },3000)  
    setTimeout(()=> {
        this.setState({title:'goan'});
    },3000)
    return (
     <div>
         {/* My name is {this.state.name} */}
         <Header name={"name is something"} title={this.state.title}/>
         <Header name={"name is something"} title={"welcome1"}/>         
         <Footer />
     </div>    
    );
  }
}

export default Layout;