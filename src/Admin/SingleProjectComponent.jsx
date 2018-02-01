
import React, { Component } from 'react';
import axios from "axios"
import { Button, Dropdown } from 'semantic-ui-react'
import EditProjectCard from './EditProjectCard'
import {API_URL} from '../commonVars'


class SingleProjectComponent extends Component {
  constructor(){
    super()
    this.state={
      showEdit: false,
      clients:[],
      clientsDropDown:[]
    }
    this.updateThing=this.updateThing.bind(this)
  }

  componentDidMount(){
    axios.get(API_URL+'/clients')
    .then((clients)=>{
      console.log(clients)
      this.setState({clients: clients.data._embedded.clients}, ()=>{
      var arr = [];
      this.state.clients.map((client, i)=>{
        arr.push({key:i, text:client.name, value:client.url})
      })
      this.setState({clientsDropDown:arr})
    })})

  }

  updateThing(url, closeFunc, payload){
    console.log(payload)
    axios.put(url.href, payload)
    .then((res)=>{
      this.props.rerouteToSelectedProject(payload)
    })
    closeFunc()
  }

  render() {
    console.log(this.state.clientsDropDown)
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin/projects')}}></Button>
        <h3>AdminManageSingleProjectComponent</h3>
        <div className="projects">
          <div>Name: {this.props.selectedProject.name}</div>
          <div>Description: {this.props.selectedProject.description}</div>
          <div>StartDate: {this.props.selectedProject.startDate}</div>  
          <div>EndDate: {this.props.selectedProject.endDate}</div>
          <br/>
        </div>
        <div className="buttons">
          <EditProjectCard thingName="Project" thing={this.props.selectedProject} updateF={this.updateThing}/>
          <Button color="red" icon='erase'></Button>          
        </div>
        <Dropdown text='Set Client' options={this.state.clientsDropDown}/>
        <Button color="green">Confirm</Button>
      </div>
    );
  }
}

export default SingleProjectComponent;


// import React from 'react'
// import { Dropdown } from 'semantic-ui-react'

// const options = [
//   { key: 1, text: 'Choice 1', value: 1 },
//   { key: 2, text: 'Choice 2', value: 2 },
// ]

// const DropdownExampleDisabled = () => (
//   <Dropdown text='Dropdown' options={options} disabled />
// )

// export default DropdownExampleDisabled