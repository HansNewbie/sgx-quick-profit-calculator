import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import Config from './Config';

class App extends Component {
  render() {
    return (
      <div>
        <Input></Input>
        <Output></Output>
        <Config></Config>
      </div>
    );
  }
}

export default App;
