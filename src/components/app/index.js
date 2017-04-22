import React, { Component } from 'react';
import Header from '../header';
import Menu from '../menu';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default App;
