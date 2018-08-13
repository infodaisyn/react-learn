import React, { Component } from 'react';
import './App.scss';
import {Button} from 'react-bootstrap';
class App extends Component {
  render() {
    const name = 'daisyn';
    return (
      <div>
     <h1>Hello {name}
     </h1>
     <Button bsStyle="primary">Primary</Button>
     </div>
    );
  }
}

export default App;
