import React, { Component } from 'react';
import {API_URL} from '../commonVars'
import axios from 'axios'
import {Dropdown, Button} from 'semantic-ui-react'

class AdminComponent extends Component {
  constructor(){
    super()
    this.state={
      persons:[],
      projects:[],
      selectedUser:{},
      personDropDown:[]

    }

    this.getHTTP=this.getHTTP.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount(){
    this.getHTTP('projects', 'project')
    this.getHTTP('persons', 'person')
  }

  buildPersonDropdown(){
    const arr = []
    this.state.persons.map((person)=>{
      arr.push({key:person.name, text:person.name, value:person})
    })
    this.setState({personDropDown:arr})
  }

  getHTTP(URL_Ext, inObjectIdentifier){
    const inobj = inObjectIdentifier?inObjectIdentifier:URL_Ext

    axios.get(API_URL+'/'+URL_Ext)
    .then((things)=>{
      this.setState({[URL_Ext]:things.data._embedded[inobj]}, ()=>{
            this.state.persons.length?this.buildPersonDropdown():null
      })
    })
  }

  handleChange(evt, { value }){
    console.log("changed", value)
    this.setState({selectedUser:value})
  }

  render() {
    return (
      <div>
        <p>Select User</p>
        <h2>AdminComponent:</h2>
        <div><Button color="green">Add User</Button></div>
        <Dropdown onChange={this.handleChange} palceholder='Select User' fluid search selection options={this.state.personDropDown}/>
        {this.state.selectedUser.name?<div><Button color='blue'>Edit User</Button></div>:null}
      </div>
    );
  }
}

export default AdminComponent;

