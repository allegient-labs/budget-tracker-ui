
import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'

class HolidaysComponent extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin')}}></Button>
        <h3>AdminManageHolidaysComponent</h3>
        <h5>AdminManageClientsHolidaysComponent</h5>
      </div>
    );
  }
}

export default HolidaysComponent;