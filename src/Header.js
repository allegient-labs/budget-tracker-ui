import React, { Component} from 'react';
import logo from './DMI_Logo.svg';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo col-md-12" alt="logo" />

          <h2>DMI Budget Tracker</h2>
          <Link to={`/people`}>People</Link>
          <Link to={`/timeoffs`}>Timeoffs</Link>
          <Link to={`/practice`}>Practice</Link>
          <Link to={`/budgets`}>Budgets</Link>
          <Link to={`/timelogs`}>Timelogs</Link>
          <Link to={`/projects`}>Projects</Link>
          <Link to={`/assignments`}>Assignments</Link>          
          <Link to={`/about`}>About</Link>
        </div>
    );
  }
}

export default Header;