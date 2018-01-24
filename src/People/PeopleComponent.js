import React, { Component } from 'react';
import axios from "axios"
import './People.css'
class PeopleComponent extends Component {
  constructor(){
    super()
    this.state={users:[]}
    this.clickDelete = this.clickDelete.bind(this)
    this.getReq = this.getReq.bind(this)
    this.clickSubmit = this.clickSubmit.bind(this)
    this.clickUpdate = this.clickUpdate.bind(this)
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((users)=>{this.setState({users: users.data})})
  }

  getReq(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((users)=>{this.setState({users: users.data})})    
  }

  clickSubmit(){
    axios.post()
  }

  clickDelete(){
    axios.delete()
  }

  clickUpdate(){
    axios.put()
  }

  render() {
    return (
      <div className="people">
      {this.state.users.map((user)=>{return (<div>{user.id} - {user.name} - {user.username} - {user.email}<button type="button" class="btn btn-danger" onClick={this.clickDelete}>delete</button></div>)})}
        <h3>PEOPLE LIST</h3>
      </div>
    );
  }
}

export default PeopleComponent;