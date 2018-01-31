
import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'

class AdminManageProjectsComponent extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin')}}></Button>
        <h3>AdminManageProjectsComponent</h3>
      </div>
    );
  }
}

export default AdminManageProjectsComponent;