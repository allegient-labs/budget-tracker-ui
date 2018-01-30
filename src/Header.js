import React, { Component} from 'react';
import logo from './DMI_Logo.svg';
import { NavLink, Link} from 'react-router-dom'

class UtilityHeader extends Component {
  constructor(){
    super()
  }
  render() {
    return (
        <div className="App-header">
          <NavLink to={`/persons`} activeClassName="active">Persons</NavLink>
          <NavLink to={`/projects`} activeClassName="active">Timeoffs</NavLink>
          <NavLink to={`/admin`} activeClassName="active">Admin</NavLink>
          <NavLink to={`/stats`} activeClassName="active">Statistics</NavLink>
          <NavLink to={`/about`} activeClassName="active">About</NavLink>
        </div>
    );
  }
}

export default UtilityHeader;