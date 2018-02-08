import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import EditPeopleCard from './EditPeopleCard'

class SingleClientComponent extends Component {
  constructor(){
    super()
    this.state={showHolidays:false}

    this.updateThing=this.updateThing.bind(this)
    this.toggleShowHolidays=this.toggleShowHolidays.bind(this)
  }

  componentDidMount(){
    axios.get()
  }

  updateThing(url, closeFunc, payload){
    axios.put(url.href, payload)
    .then((res)=>{
      this.props.setSelectedClient(res.data)
    })
    closeFunc()
  }

  toggleShowHolidays(){
    this.setState({showHolidays: !this.state.showHolidays})
  }

  render() {
    return (
      <div>
        {this.props.selectedClient.name?<div>
          <div className="thingCard">
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
          </div>
          <Button color="yellow" onClick={this.toggleShowHolidays}>Manage Client Holidays</Button>
          {this.state.showHolidays?<div>Manage Holidays not yet implemented</div>:null}     
        </div>:null}
      </div>
    );
  }
}

export default SingleClientComponent;
