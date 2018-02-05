import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import EditPeopleCard from './EditPeopleCard'
import AddAssignmentCard from './AddAssignmentCard'
class SingleUserComponent extends Component {
  constructor(){
    super()
    this.state={}

    this.updateThing=this.updateThing.bind(this)
  }

  updateThing(url, closeFunc, payload){
    axios.put(url.href, payload)
    .then((res)=>{
      this.props.setSelectedUser(payload)
    })
    closeFunc()
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin/users')}}></Button>
        {this.props.selectedUser.name?<div><div className="thingCard">
            <h3>Selected Person:</h3>
            <div className="info">
              <div className="people">
                <h3>{this.props.selectedUser.name}</h3>
              </div>              
            </div> 
            <div className="buttons">
              <EditPeopleCard thingName="People" thing={this.props.selectedUser} updateF={this.updateThing}/>
            </div>
            </div>           
            <AddAssignmentCard person={this.props.selectedUser}/>     
        </div>:null}
      </div>
    );
  }
}

export default SingleUserComponent;