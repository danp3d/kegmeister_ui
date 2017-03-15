import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="Header-wrapper">
        <div className="Header-body">
          <h2>Ze KegMeister</h2>
          <span>By <a href="https://github.com/danp3d" target="_blank">danp3d</a></span>
        </div>
      </div>
    );
  }
}

export default Header;
