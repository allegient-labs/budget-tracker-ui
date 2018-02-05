
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class LogsComponent extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/myinfo')}}></Button>
        <h3>LogsComponent</h3>
      </div>
    );
  }
}

export default withRouter(LogsComponent);