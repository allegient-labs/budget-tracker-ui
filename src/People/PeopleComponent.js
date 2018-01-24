import React, { Component } from 'react';
import axios from "axios"
import './People.css'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import EditPerson from './EditPerson'
import CreatePerson from './CreatePerson'
import DeletePerson from './DeletePerson'

class PeopleComponent extends Component {
  constructor(){
    super()
    this.state={
      users:[],
      deletesShown: false
    }

    this.clickDelete = this.clickDelete.bind(this)
    this.getPeople = this.getPeople.bind(this)
    this.clickSubmit = this.clickSubmit.bind(this)
    this.clickUpdate = this.clickUpdate.bind(this)
    this.showDeletes = this.showDeletes.bind(this)
  }

  componentDidMount(){
    this.getPeople()
  }

  getPeople(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((users)=>{this.setState({users: users.data})})    
  }

  clickSubmit(){
    axios.post()
  }

  clickDelete(id){
    axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
    .then((res)=>{
      this.getPeople()
    })
  }

  showDeletes(){
    if(this.state.deletesShown){
      this.setState({deletesShown: false})
    }else{
      this.setState({deletesShown: true})
    }
  }

  clickUpdate(){
    axios.put()
  }

  render() {
    return (
      <div className="people">
      <CreatePerson/>
      <Button color="red" onClick={this.showDeletes}>Modify A User</Button>
      {this.state.users.length?this.state.users.map((user)=>{
        return (
          <div className="peopleCard" key = {user.id}>
            <div className="info overflow-ellipsis">
              {user.id} - {user.name}
            </div>
            <div className="buttons">
              {this.state.deletesShown?
                <div className="buttons">
                  <EditPerson user={user} func={this.clickUpdate.bind(this, user.id)}/>
                  <DeletePerson user={user} func={this.clickDelete.bind(this, user.id)}/>
                </div>
                :null}
            </div>
          </div>
          )
      }):<h2>Retrieving users...</h2>}
      </div>
    );
  }
}

export default PeopleComponent;