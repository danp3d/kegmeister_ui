import React, { Component } from 'react';
import Header from '../header';
import Status from '../status';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Status />
      </div>
    );
  }
}

export default App;
