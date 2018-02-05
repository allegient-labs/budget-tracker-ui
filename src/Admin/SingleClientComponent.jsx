import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import EditPeopleCard from './EditPeopleCard'

class SingleClientComponent extends Component {
  constructor(){
    super()
    this.state={}

    this.updateThing=this.updateThing.bind(this)
  }

  updateThing(url, closeFunc, payload){
    axios.put(url.href, payload)
    .then((res)=>{
      this.props.setSelectedClient(res.data)
    })
    closeFunc()
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin/clients')}}></Button>
        {this.props.selectedClient.name?<div className="thingCard">
            <h3>Selected Client:</h3>
            <div className="info">
              <div className="people">
                <h3>{this.props.selectedClient.name?this.props.selectedClient.name:"No Client Selected"}</h3>
              </div>              
            </div> 
            <div className="buttons">
              <EditPeopleCard thingName="Client" thing={this.props.selectedClient} updateF={this.updateThing}/>
            </div>
            <br/>      
        </div>:null}
      </div>
    );
  }
}

export default SingleClientComponent;
