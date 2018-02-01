
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
      clientsDropDown:[],
      selectedDropdownURI:"",
      clientURI:"",
      linkedClient:{}

    }
    this.updateThing=this.updateThing.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
    this.putClientAssociation=this.putClientAssociation.bind(this)
  }

  componentDidMount(){
    axios.get(API_URL+'/clients')
    .then((clients)=>{
      this.setState({clients: clients.data._embedded.clients}, ()=>{
      var arr = [];
      this.state.clients.map((client, i)=>{
        arr.push({key:i, text:client.name, value:client._links.self.href})
      })
      this.setState({clientsDropDown:arr})
    })})

    this.props.selectedProject._links?this.setState({clientURI:this.props.selectedProject._links.client.href},()=>{
      axios.get(this.state.clientURI)
      .then((client)=>{this.setState({linkedClient:client.data})})
      .catch((err)=>{console.log(err)})
    }):null
  }

  updateThing(url, closeFunc, payload){
    axios.put(url.href, payload)
    .then((res)=>{
      this.props.rerouteToSelectedProject(payload)
    })
    closeFunc()
  }

  changeHandler(evt, selection){
    this.setState({selectedDropdownURI:selection.value})
  }

  putClientAssociation(){
    axios({  method: 'put',
    url: this.state.clientURI,
    data: this.state.selectedDropdownURI,
    headers:{'Content-Type':'text/uri-list'}})
    .then((client)=>{console.log(client)})
    .then(()=>{
      axios.get(this.state.clientURI)
      .then((client)=>{this.setState({linkedClient:client.data})})
      .catch((err)=>{console.log(err)})     
    })
  }

  render() {
    console.log(this.state.linkedClient)
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin/projects')}}></Button>
        <h3>Edit Project Details</h3>
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
        <h4>Current Client:</h4>
        <div>{this.state.linkedClient.name}</div>
        <h4>Set Client:</h4>
        <Dropdown placeholder="Set client" fluid search selection onChange={this.changeHandler} options={this.state.clientsDropDown}/>
        <Button color="green" onClick={this.putClientAssociation}>Confirm</Button>
      </div>
    );
  }
}

export default SingleProjectComponent;

