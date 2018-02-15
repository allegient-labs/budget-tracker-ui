import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/admin/persons">Manage People</NavLink>
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
