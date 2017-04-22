import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu-root">
        <div className="Menu-menu">
          <ul>
            <li>
              <NavLink to="/status" activeClassName="active">Status</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Menu;
