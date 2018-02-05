
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
    this.getClients=this.getClients.bind(this)
    this.getClientRelation=this.getClientRelation.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
  }

  componentDidMount(){
    this.getClients()
    this.getClientRelation()
    // this.props.getClients()
  }

  updateThing(url, closeFunc, payload, callback){

    var updatedPayload = Object.assign(this.props.selectedProject, payload)
    axios.put(url.href, updatedPayload)
    .then((res)=>{
      console.log(res.data._links.client)
      callback(res.data._links.client.href)
    })
    .then(()=>{  
      this.props.rerouteToSelectedProject(updatedPayload)
    })
    closeFunc()
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.selectedProject._links.client.href)
    this.getClientRelation(nextProps.selectedProject._links.client.href)
  }


  getClients(){
    axios.get(API_URL+'/clients')
    .then((clients)=>{
      this.setState({clients: clients.data._embedded.clients}, ()=>{
      var arr = [];
      this.state.clients.map((client, i)=>{
        arr.push({key:i, text:client.name, value:client._links.self.href})
      })
      this.setState({clientsDropDown:arr})
    })})
  }

  getClientRelation(uri){
    const existing = this.props.selectedProject._links?this.props.selectedProject._links.client.href:null
    const urizzle = uri?uri:existing

    urizzle?this.setState({clientURI:urizzle},()=>{
      axios.get(this.state.clientURI)
      .then((client)=>{this.setState({linkedClient:client.data})})
      .catch((err)=>{console.log(err)})
    }):null
  }

  changeHandler(evt, selection){
    this.setState({selectedDropdownURI:selection.value})
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin/projects')}}></Button>
      {this.props.selectedProject.name?
        <div>
        <h3>Edit Project Details</h3>
        <div className="projects">
          <div>Name: {this.props.selectedProject.name}</div>
          <div>Description: {this.props.selectedProject.description}</div>
          <div>StartDate: {this.props.selectedProject.startDate}</div>  
          <div>EndDate: {this.props.selectedProject.endDate}</div>
          <div>Client:{this.state.linkedClient.name}</div>
          <br/>
        </div>
        <div className="buttons">
          <EditProjectCard thingName="Project" thing={this.props.selectedProject} linkedClient={this.state.linkedClient} updateF={this.updateThing}/>
          <Button color="red" icon='erase'></Button>          
        </div>
        </div>
      :<div>Go back and select project</div>
      }
      </div>
    );
  }
}

export default SingleProjectComponent;

