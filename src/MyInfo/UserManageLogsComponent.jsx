
import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class UserManageLogsComponent extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/myinfo')}}></Button>

        <h3>UserManageLogsComponent</h3>
      </div>
    );
  }
}

export default withRouter(UserManageLogsComponent);