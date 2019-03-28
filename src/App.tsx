import React, { Component } from 'react';
import './App.css';
import {Title} from './title/Title'

class App extends Component {
  render() {
    return (
      <div>
        <div>Welcome</div>
        <Title/>
      </div>
    );
  }
}

export default App;
