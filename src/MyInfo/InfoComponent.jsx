import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class InfoComponent extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <div>
        <h1>MyInfo Component</h1>
        <li><NavLink to="/myinfo/profile">Manage My Profile</NavLink></li>                
        <li><NavLink to="/myinfo/timeoffs">Manage Time Off</NavLink></li>
        <li><NavLink to="/myinfo/timelogs">Manage Time Logs</NavLink></li>                
      </div>
    );
  }
}

export default InfoComponent;