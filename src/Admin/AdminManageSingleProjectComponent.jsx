
import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import EditProjectCard from './EditProjectCard'

class AdminManageSingleProjectComponent extends Component {
  constructor(){
    super()
    this.state={
      showEdit: false,
    }
    this.updateThing=this.updateThing.bind(this)
  }

  updateThing(url, closeFunc, payload){
    axios.put(url.href, payload)
    .then((res)=>{
      this.props.rerouteToSelectedProject(payload)
    })
    closeFunc()
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin/projects')}}></Button>
        <h3>AdminManageSingleProjectComponent</h3>
        <div className="projects">
          <div>Client: {this.props.selectedProject.client}</div>
          <div>Description: {this.props.selectedProject.description}</div>
          <div>EndDate: {this.props.selectedProject.endDate}</div>
          <div>Name: {this.props.selectedProject.name}</div>
          <div>StartDate: {this.props.selectedProject.startDate}</div>  
          <br/>
        </div>
        <div className="buttons">
          <EditProjectCard thingName="Project" thing={this.props.selectedProject} updateF={this.updateThing}/>
          <Button color="red" icon='erase'></Button>          
        </div>
      </div>
    );
  }
}

export default AdminManageSingleProjectComponent;