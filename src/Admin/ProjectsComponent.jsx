import React, { Component } from 'react';
import axios from "axios"
import CreateButton from '../RoutesCRUD/Utils/CreateButton'
import DeleteButton from '../RoutesCRUD/Utils/DeleteButton'
import {API_URL} from '../commonVars'
import EditPeopleCard from '../RoutesCRUD/People/EditPeopleCard'
import CreateProject from './CreateProject'
import { Button, Image, List } from 'semantic-ui-react'


class ProjectsComponent extends Component {
  constructor(){
    super()
    this.state={
      things: [], 
      currPageNo:0,
      totalPages:0,
      isNext:false,
      nextURL:"",
      prevURL:"",
      modalOpen:false,
    }
    this.deleteThing = this.deleteThing.bind(this)
    this.updateThing = this.updateThing.bind(this)
    this.createThing = this.createThing.bind(this)
    this.getThings = this.getThings.bind(this)
    this.showDeletes = this.showDeletes.bind(this)
    this.toPrevPage = this.toPrevPage.bind(this)
    this.toNextPage = this.toNextPage.bind(this)
    this.selectPerson = this.selectPerson.bind(this)
    this.unselectPerson = this.unselectPerson.bind(this)
  }

  getThings(url){
    const nav_url = url?url.href:API_URL+'/projects';

    axios.get(nav_url)
    .then((things)=>{    
      this.setState({
        totalPages: things.data.page.totalPages, 
        currPageNo:things.data.page.number, 
        things: things.data._embedded['project'], 
        nextURL:things.data._links.next, 
        prevURL:things.data._links.prev
      })
    })  
  }

  componentDidMount(){
    this.getThings()
  }

  showDeletes(){
    if(this.state.deletesShown){
      this.setState({deletesShown: false})
    }else{
      this.setState({deletesShown: true})
    }
  }

  toNextPage(){
    this.getThings(this.state.nextURL)
  }

  toPrevPage(){
    this.getThings(this.state.prevURL)
  }

  deleteThing(url, closeFunc){
    axios.delete(url.href)
    .then((res)=>{
      this.getThings()
    })
    closeFunc()
  }

  updateThing(url, closeFunc, payload){
    axios.put(url.href, payload)
    .then((res)=>{
      this.getThings()
    })
    closeFunc()
  }

  createThing(url, closeFunc, payload, assocationCallback){
    const nav_url = url?url.href:API_URL+'/projects';

    axios.post(nav_url, payload)
    .then((res)=>{
      assocationCallback(res.data._links.client.href)
    })
    .then(()=>{
      this.getThings()
    })
    closeFunc()    
  }

  selectPerson(thing){
    this.props.rerouteToSelectedProject(thing)
  }

  unselectPerson(){
    this.setState({selectedPerson:{}})
  }

  render() {
    return (
      <div>
        <div className="thing">
          <h3>Select a Project</h3>
          <CreateProject thingName="Project" createF={this.createThing}/>
          {this.state.things.length?this.state.things.map((thing, i)=>{
            return (
              <div className="thingCard" key = {i}>
                <div className="info">
                  <div className="people">
                    <div>{thing.name}</div>
                    <br/>      
                  </div>              
                </div>
                <div className="buttons">
                    <div className="buttons">
                      <Button color="blue" icon="arrow circle right" onClick={this.selectPerson.bind(this, thing)}></Button>
                    </div>
                </div>
              </div>
              )
          }):<h2>Retrieving {this.props.thingName}...</h2>}
          {!!this.state.nextURL?<Button onClick={this.toNextPage}>Next Page</Button>:null}
          {!!this.state.prevURL?<Button onClick={this.toPrevPage}>Previous Page</Button>:null}
          <h1>Page: {this.state.currPageNo+1}/{this.state.totalPages}</h1>
        </div>
      </div>
    );
  }
}

export default ProjectsComponent;
