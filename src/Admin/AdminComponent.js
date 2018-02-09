import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import UsersComponent from "./UsersComponent";
import { NavLink } from "react-router-dom";

class AdminComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Admin Tab</h1>
        <li>
          <NavLink to="/admin/users">Manage Users</NavLink>
        </li>
        <li>
          <NavLink to="/admin/projects">Manage Projects</NavLink>
        </li>
        <li>
          <NavLink to="/admin/clients">Manage Clients</NavLink>
        </li>
        <li>
          <NavLink to="/admin/holidays">
            Manage Company and Client Holidays
          </NavLink>
        </li>
      </div>
    );
  }
}

export default AdminComponent;
