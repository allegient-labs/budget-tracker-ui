import React, { Component } from 'react';
import axios from "axios"
import './People.css'
import { Button } from 'semantic-ui-react'
import EditPerson from './EditPerson'
import CreatePerson from './CreatePerson'
import DeletePerson from './DeletePerson'
import {API_URL} from '../commonVars'
class PeopleComponent extends Component {
  constructor(){
    super()
    this.state={
      persons: [],
      timeoffs: [],
      practices: [],
      budgets: [],
      timelogs: [],
      projects: [],
      assignments: [],
      deletesShown: false,
      currPageNo:0,
      totalPages:0,
      isNext:false,
      nextURL:"",
      prevURL:"",
      modalOpen:false
    }
    
    this.deletePerson = this.deletePerson.bind(this)
    this.updatePerson = this.updatePerson.bind(this)
    this.createPerson = this.createPerson.bind(this)

    this.getPersons = this.getPersons.bind(this)
    this.getTimeoffs = this.getTimeoffs.bind(this)
    this.getPractices = this.getPractices.bind(this)
    this.getBudgets = this.getBudgets.bind(this)
    this.getTimelogs = this.getTimelogs.bind(this)
    this.getProjects = this.getProjects.bind(this)
    this.getAssignments = this.getAssignments.bind(this)

    this.showDeletes = this.showDeletes.bind(this)

    this.toPrevPage = this.toPrevPage.bind(this)
    this.toNextPage = this.toNextPage.bind(this)

  }

  componentDidMount(){
    this.getPersons()
    this.getTimeoffs()
    this.getAssignments()
    this.getBudgets()
    this.getProjects()
    this.getTimelogs()
    this.getPractices()
  }

  getPersons(url){
    const nav_url = url?url.href:API_URL+'/persons';
    axios.get(nav_url)
    .then((persons)=>{
      console.log(persons)
      this.setState({
        totalPages: persons.data.page.totalPages, 
        currPageNo:persons.data.page.number, 
        persons: persons.data._embedded.person, 
        nextURL:persons.data._links.next, 
        prevURL:persons.data._links.prev
      })
    })    
  }

  getTimeoffs(){
    axios.get(API_URL+'/timeoffs')
    .then((users)=>{this.setState({timeoffs: users.data._embedded})})    
  }

  getPractices(){
    axios.get(API_URL+'/practices')
    .then((users)=>{this.setState({practices: users.data._embedded})})    
  }

  getBudgets(){
    axios.get(API_URL+'/budgets')
    .then((users)=>{this.setState({budgets: users.data._embedded})})    
  }

  getTimelogs(){
    axios.get(API_URL+'/timelogs')
    .then((users)=>{this.setState({timelogs: users.data._embedded})})    
  }

  getProjects(){
    axios.get(API_URL+'/projects')
    .then((users)=>{this.setState({projects: users.data._embedded})})    
  }

  getAssignments(){
    axios.get(API_URL+'/assignments')
    .then((users)=>{this.setState({assignments: users.data._embedded})})    
  }

  deletePerson(url, closeFunc){
    axios.delete(url.href)
    .then((res)=>{
      this.getPersons()
    })
    closeFunc()
  }

  updatePerson(url, closeFunc, payload){
    axios.put(url.href, payload)
    .then((res)=>{
      this.getPersons()
    })
    closeFunc()
  }

  createPerson(url, closeFunc, payload){
    const nav_url = url?url.href:API_URL+'/persons';

    axios.post(nav_url, payload)
    .then((res)=>{
      this.getPersons()
    })
    closeFunc()    
  }

  showDeletes(){
    if(this.state.deletesShown){
      this.setState({deletesShown: false})
    }else{
      this.setState({deletesShown: true})
    }
  }

  toNextPage(){
    this.getPersons(this.state.nextURL)
  }

  toPrevPage(){
    this.getPersons(this.state.prevURL)
  }

  render() {
    return (
      <div className="people">
        <CreatePerson createF={this.createPerson}/>
        <Button color="red" onClick={this.showDeletes}>Modify A Person</Button>
        {this.state.persons.length?this.state.persons.map((user, i)=>{
          return (
            <div className="peopleCard" key = {i}>
              <div className="info">
                {user.id} - {user.name}
              </div>
              <div className="buttons">
                {this.state.deletesShown?
                  <div className="buttons">
                    <EditPerson user={user} updateF={this.updatePerson}/>
                    <DeletePerson user={user} deleteF={this.deletePerson}/>
                  </div>
                  :null}
              </div>
            </div>
            )
        }):<h2>Retrieving users...</h2>}
        {!!this.state.nextURL?<Button onClick={this.toNextPage}>Next Page</Button>:null}
        {!!this.state.prevURL?<Button onClick={this.toPrevPage}>Previous Page</Button>:null}
        <h1>Page: {this.state.currPageNo+1}/{this.state.totalPages}</h1>
      </div>
    );
  }
}

export default PeopleComponent;