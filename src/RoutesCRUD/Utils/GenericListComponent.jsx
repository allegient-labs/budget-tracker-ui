import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import CreateButton from '../RoutesCRUD/Utils/CreateButton'
import DeleteButton from '../RoutesCRUD/Utils/DeleteButton'
import {API_URL} from '../commonVars'
import EditPeopleCard from '../RoutesCRUD/People/EditPeopleCard'

//give props: lowerPlural, lowerSingular

class UsersComponent extends Component {
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
    const nav_url = url?url.href:API_URL+'/' + this.props.lowerPlural;
    const inObj = this.props.lowerSingular?this.props.lowerSingular:this.props.lowerPlural
    axios.get(nav_url)
    .then((things)=>{    
      this.setState({
        totalPages: things.data.page.totalPages, 
        currPageNo:things.data.page.number, 
        things: things.data._embedded[inObj], 
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

  createThing(url, closeFunc, payload){
    const nav_url = url?url.href:API_URL+'/'+this.props.lowerPlural;

    axios.post(nav_url, payload)
    .then((res)=>{
      this.getThings()
    })
    closeFunc()    
  }

  selectPerson(thing){
    this.props.rerouteToSelectedUser(thing)
  }

  unselectPerson(){
    this.setState({selected:{}})
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin')}}></Button>

        <div className="thing">
          <h3>Select a Person</h3>
          <CreateButton thingName="Person" createF={this.createThing}/>
          {this.state.things.length?this.state.things.map((thing, i)=>{
            return (
              <div className="peopleCard" key = {i}>
                <div className="info">
                  <div className="people">
                    <div>{thing.name}</div> 
                    <br/>      
                  </div>              
                </div>
                <div className="buttons">
                    <div className="buttons">
                      {this.state.deletesShown?null:<Button color="blue" icon="arrow circle right" onClick={this.selectPerson.bind(this, thing)}></Button>}
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

export default UsersComponent;
