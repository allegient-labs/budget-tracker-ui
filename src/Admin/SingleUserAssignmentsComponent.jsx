import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'

import history from '../history.jsx'

class SingleUserComponent extends Component {
  constructor(){
    super()
    this.state={assignments:[]}
  }

  componentDidMount(){
    if(this.props.selectedUser._links){
      const id = this.props.selectedUser._links.person.href.slice('/')[this.props.selectedUser._links.person.href.slice('/').length-1];
      axios.get('http://localhost:8080/assignments/search/findByPersonId?person_id='+id)
      .then((assignments)=>{
        this.setState({assignments:assignments.data._embedded.assignments})
      })
    }
  }

  render() {
    return (
      <div>
        <Button color="blue" icon="arrow circle left" onClick={()=>{this.props.history.push('/admin/users/singleuser')}}></Button>
        {this.props.selectedUser.name?<div><div className="thingCard">
            <h3>Assigned to {this.props.selectedUser.name}</h3> 
          </div>
          {this.state.assignments.map((assign, i)=>{
            return (<div key={i}>{(i+1)+'. Role: '+assign.role}</div>)
          })}
        </div>:null}
      </div>
    );
  }
}

export default SingleUserComponent;