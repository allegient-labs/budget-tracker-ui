import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import EditPeopleCard from "./EditPeopleCard";
import AddAssignmentCard from "./AddAssignmentCard";
import history from "../history.jsx";
import EnhancedUpdateModal from '../utils/EnhancedUpdateModal'
import EnhancedCreateModal from '../utils/EnhancedCreateModal'
import PersonForm from '../utils/PersonForm'
import PersonAssignmentForm from '../utils/PersonAssignmentForm'
import {API_URL} from '../commonVars'
class SingleUserComponent extends Component {
  constructor() {
    super();
    this.state = {selectedUser:{}, assignments:[], index:0};

    this.updateThing = this.updateThing.bind(this);
    this.submitThing=this.submitThing.bind(this)
    this.getPerson=this.getPerson.bind(this)
  }

  componentDidMount(){
    this.getPerson()
  }

  getPerson(){
    axios.get(API_URL+'/persons/'+this.props.match.params.personId)
    .then((res)=>{this.setState({selectedUser:res.data})})

    this.getAssignments()
  }

  getAssignments(){
    /*Future reference, project and client data should be
    *pre-loaded
    */
    const id = this.props.match.params.personId
    if(id){
      axios.get(API_URL+'/assignments/search/findByPersonId?person_id='+id)
      .then((res)=>{
        if(res.data){
          const assignments = res.data._embedded.assignments
          assignments.map((assignment, i)=>{
            return axios.get(assignment._links.project.href)
            .then((res)=>{
              const project = res.data
              axios.get(project._links.client.href)
              .then(res=>{
                const client = res.data
                assignment.project=project
                assignment.client=client
                this.setState({index:i})
                return assignment
              })
            })
          })
          this.setState({assignments:assignments})
        }
      })
    }
  } 

  submitThing(form){
    axios.post(API_URL+'/assignments', form)
    .then((assignment)=>{
      const arr1 = [assignment.data._links.person.href, assignment.data._links.project.href, assignment.data._links.practice.href]
      const arr2 = [this.state.selectedUser._links.self.href, form.projectURI, form.practiceURI]
      axios({
          method: 'put',
          url: arr1[0],
          data: arr2[0],
          headers:{'Content-Type':'text/uri-list'}
        })
      .then((res)=>{
        console.log(arr1[1], arr2[1])
        return axios({
          method: 'put',
          url: arr1[1],
          data: arr2[1],
          headers:{'Content-Type':'text/uri-list'}
        })
      })
      .then((res)=>{
        return axios({
          method: 'put',
          url: arr1[2],
          data: arr2[2],
          headers:{'Content-Type':'text/uri-list'}
        })
      })
      .then(()=>{
        this.getAssignments()
        this.setState({modalOpen:false,
          name:"",
          showEdit:false,
          practices:[],
          projects:[],
          allocation:"",
          billrate:"",
          ForecastAllocation:"",
          notes:"",
          role:"",
          startDate:0,
          endDate:0,
          selectedProjectURI:"",
          selectedPracticeURI:""})
      })
      .catch((err)=>{console.log(err)})
    })
  }


  updateThing(payload) {
    axios.put(this.state.selectedUser._links.self.href, payload).then(res => {
      this.getPerson()
    });
  }

  render() {
    return (
          <div>
            <div className="thingCard">
              <h3>Selected Person:</h3>
              <div className="info">
                <div className="people">
                  <h3>{this.state.selectedUser.name}</h3>
                </div>
              </div>
              <div className="buttons">
                <EnhancedUpdateModal thingName="Assignment">
                  <PersonForm submitAction={this.updateThing}/>
                </EnhancedUpdateModal> 
              </div>
            </div>
            <br/>
            <div>
              <h3>Current Assignments</h3>
              <EnhancedCreateModal thingName="Assignment">
                <PersonAssignmentForm person={this.state.selectedUser} getAssignments={this.getAssignments} submitAction={this.submitThing}/>
              </EnhancedCreateModal>                 
              {this.state.assignments.map((asmt, i)=>{
                return (<div key={i} className="thingCard"><h3>Role: {asmt.role} - Project: {asmt.project?asmt.project.name:null} - Client: {asmt.client?asmt.client.name:null}</h3><Button
                        color="blue"
                        icon="arrow circle right"
                        onClick={()=>{history.push('/admin/assignments/'+asmt.id)}}
                      /></div>)
              })}
            </div>
          </div>
    );
  }
}

export default SingleUserComponent;

