
import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import AdminManageUsersComponent from './AdminManageUsersComponent'
import {NavLink} from 'react-router-dom'

class AdminComponent extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <div>
        <li><NavLink to="/admin/users">Manage Users</NavLink></li>
        <li><NavLink to="/admin/projects">Manage Projects</NavLink></li>
        <li><NavLink to="/admin/holidays">Manage Holidays</NavLink></li>   
      </div>
    );
  }
}

export default AdminComponent;

