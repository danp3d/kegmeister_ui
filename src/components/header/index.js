import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="Header-wrapper">
        <div className="Header-body">
          <h2>Ze KegMeister</h2>
          <span>By <a href="http://danp3d.io">danp3d</a></span>
        </div>
      </div>
    );
  }
}

export default Header;
