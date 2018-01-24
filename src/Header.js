import React, { Component} from 'react';
import logo from './DMI_Logo.svg';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo col-md-12" alt="logo" />

          <h2>DMI Sample Project</h2>
          <Link to={`/people`}>People</Link>
          <Link to={`/clients`}>Clients</Link>
          <Link to={`/projects`}>Projects</Link>
          <Link to={`/practice`}>Practice</Link>
          <Link to={`/about`}>About</Link>
        </div>
    );
  }
}

export default Header;