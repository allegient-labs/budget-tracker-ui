import React, { Component } from "react";
import logo from "./DMI_Logo.svg";
import { NavLink, Link } from "react-router-dom";
import { Menu, Button, Icon } from "semantic-ui-react";
import Breadcrumb from "./Breadcrumb";
import BudgetStatusMenu from "./BudgetStatusMenu";

class UtilityHeader extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App-header">
        <div className="titleHeader">
          <img src={logo} className="App-logo col-md-12" alt="logo" />
          <h2>DMI Budget Tracker</h2>
        </div>
        <Menu id="projectNav">
          <NavLink to={`/stats`} activeClassName="active">
            Statistics
          </NavLink>
          <NavLink to={`/projects`} activeClassName="active">
            Projects
          </NavLink>
          <NavLink to={`/myinfo`} activeClassName="active">
            MyInfo
          </NavLink>
          <NavLink to={`/admin`} activeClassName="active">
            Admin
          </NavLink>
          <NavLink to={`/about`} activeClassName="active">
            About
          </NavLink>
        </Menu>
        <Menu id="historyNav">
          <Breadcrumb />
        </Menu>
        <br />
        <BudgetStatusMenu />
      </div>
    );
  }
}

export default UtilityHeader;
