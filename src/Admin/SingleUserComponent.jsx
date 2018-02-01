
import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import EditProjectCard from './EditProjectCard'

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
        <div className="peopleCard">
            <h3>Selected Person:</h3>
            <div className="info">
              <div className="people">
                <h3>{this.props.selectedUser.name?this.props.selectedUser.name:"No User Selected"}</h3>
              </div>              
            </div> 
            <div className="buttons">
              <EditProjectCard thingName="Project" thing={this.props.selectedUser} updateF={this.updateThing}/>
            </div>
            <br/>      
        </div>
      </div>
    );
  }
}

export default SingleUserComponent;