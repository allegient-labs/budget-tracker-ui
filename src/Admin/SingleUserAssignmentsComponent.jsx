import React, { Component } from 'react';
import axios from "axios"
import { Button } from 'semantic-ui-react'
import DeleteButton from '../RoutesCRUD/Utils/DeleteButton'
import history from '../history.jsx'
import {API_URL} from '../commonVars'
class SingleUserComponent extends Component {
  constructor(){
    super()
    this.state={assignments:[]}
    this.getAssignments=this.getAssignments.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }

  componentDidMount(){
    if(this.props.selectedUser._links){
      const id = this.props.selectedUser._links.person.href.split('/')[this.props.selectedUser._links.person.href.split('/').length-1];
      axios.get(API_URL+'/assignments/search/findByPersonId?person_id='+id)
      .then((assignments)=>{
        this.setState({assignments:assignments.data._embedded.assignments})
      })
    }
  }

  getAssignments(){
    if(this.props.selectedUser._links){
      const id = this.props.selectedUser._links.person.href.split('/')[this.props.selectedUser._links.person.href.split('/').length-1];
      axios.get(API_URL+'/assignments/search/findByPersonId?person_id='+id)
      .then((assignments)=>{
        this.setState({assignments:assignments.data._embedded.assignments})
      })
    }
  }

  handleDelete(url, closeFunc){
    axios.delete(url.href)
    .then(()=>{
      this.getAssignments()
    })
    closeFunc()
  }

  render() {
    return (
      <div>
        {this.props.selectedUser.name?<div><div className="thingCard">
            <h3>Assigned to {this.props.selectedUser.name}</h3> 
          </div>
          {this.state.assignments.map((assign, i)=>{
            return (<div key={i}>
              <DeleteButton thing={assign} deleteF={this.handleDelete}/>
              <div>{'Role: '+assign.role}</div>
              <div>{'Bill Rate: '+assign.billRate}</div>
              <div>{'Notes: '+assign.notes}</div>
              <div>{'Allocation: '+assign.allocation}</div>
              <div>{'Forecast Allocation: '+assign.forecastAllocation}</div>
              <div>{'Start Date: '+assign.startDate}</div>
              <div>{'End Date: '+assign.endDate}</div>
              <br/>
            </div>)
          })}
        </div>:null}
      </div>
    );
  }
}

export default SingleUserComponent;