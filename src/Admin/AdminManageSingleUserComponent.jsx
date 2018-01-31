
import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'

class AdminManageSingleUserComponent extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin/users')}}></Button>
        <div className="peopleCard">
            <h3>Selected Person:</h3>
            <div className="info">
              <div className="people">
                <h3>{this.props.selectedUser.name?this.props.selectedUser.name:"No User Selected"}</h3>
              </div>              
            </div> 

            <div className="buttons">
            </div>
            <br/>      
        </div>
      </div>
    );
  }
}

export default AdminManageSingleUserComponent;