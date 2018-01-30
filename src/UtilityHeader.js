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
          <img src={logo} className="App-logo col-md-12" alt="logo" />

          <h2>DMI Budget Tracker</h2>
          <NavLink to={`/personscrud`} activeClassName="active">People</NavLink>
          <NavLink to={`/timeoffs`} activeClassName="active">Timeoffs</NavLink>
          <NavLink to={`/practice`} activeClassName="active">Practice</NavLink>
          <NavLink to={`/budgets`} activeClassName="active">Budgets</NavLink>
          <NavLink to={`/timelogs`} activeClassName="active">Timelogs</NavLink>
          <NavLink to={`/projectscrud`} activeClassName="active">Projects</NavLink>
          <NavLink to={`/assignments`} activeClassName="active">Assignments</NavLink>          
          <NavLink to={`/about`} activeClassName="active">About</NavLink>
<br/>
          <NavLink to={`/stats`} activeClassName="active">Statistics</NavLink>
          <NavLink to={`/projects`} activeClassName="active">Projects</NavLink>
          <NavLink to={`/myinfo`} activeClassName="active">MyInfo</NavLink>
          <NavLink to={`/admin`} activeClassName="active">Admin</NavLink>
          <NavLink to={`/about`} activeClassName="active">About</NavLink>
        </div>
    );
  }
}

export default UtilityHeader;