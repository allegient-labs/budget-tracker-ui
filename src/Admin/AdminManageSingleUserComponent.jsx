
import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'

class AdminManageSingleUserComponent extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <div className="peopleCard">
          <h3>Selected Person:</h3>
          <div className="info">
            <div className="people">
              <div>{this.state.selectedPerson.name}</div> 
            </div>              
          </div> 

          <div className="buttons">
            <Button color="blue" icon="arrow circle left" onClick={this.unselectPerson}></Button>
          </div>
          <br/>      
      </div>
    );
  }
}

export default AdminManageSingleUserComponent;