import React from 'react'
import { Button, Header, Icon, Modal, Form, Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import {API_URL} from '../commonVars'
import history from '../history.jsx'

//requires a thing prop, an updateF prop, a thingName prop
class AddAssignmentCard extends React.Component {
  constructor(){
    super()
    this.state = { 
      modalOpen:false,
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
      selectedPracticeURI:"",

     }
     this.changeProjectHandler=this.changeProjectHandler.bind(this)
     this.changePracticeHandler=this.changePracticeHandler.bind(this)
     this.handleSubmit=this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.getProjects()
    this.getPractices()
  }

  getProjects(){
    axios.get(API_URL+'/projects?size=100')
    .then((res)=>{
      const projects = res.data._embedded.project
      const builtDropdown = projects.map((project, i)=>{return {key:i, text:project.name, value:project._links.self.href}})
      this.setState({projects:builtDropdown})
    })
  }

  getPractices(){
    axios.get(API_URL+'/practices?size=50')
    .then((res)=>{
      const practices = res.data._embedded.practices
      const builtDropdown = practices.map((practice, i)=>{return {key:i, text:practice.name, value:practice._links.self.href}})

      this.setState({practices: builtDropdown})
    })
  }

  handleSubmit(evt){

    const form = {allocation:evt.target.allocation.value, 
      billRate:evt.target.billrate.value,  
      forecastAllocation:evt.target.forecastallocation.value, 
      notes:evt.target.notes.value, role:evt.target.role.value, 
      startDate:evt.target.startdate.value, 
      endDate:evt.target.enddate.value, 
      practiceURI: this.state.selectedPracticeURI,
      projectURI: this.state.selectedProjectURI,
      personURI: this.props.person._links.self.href
    }
    axios.post(API_URL+'/assignments', form)
    .then((assignment)=>{
      const arr1 = [assignment.data._links.person.href, assignment.data._links.project.href, assignment.data._links.practice.href]
      const arr2 = [this.props.person._links.self.href, this.state.selectedProjectURI, this.state.selectedPracticeURI]
      axios({
          method: 'put',
          url: arr1[0],
          data: arr2[0],
          headers:{'Content-Type':'text/uri-list'}
        })
      .then((res)=>{
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

  changeProjectHandler(evt, selection){
    this.setState({selectedProjectURI:selection.value})
  }

  changePracticeHandler(evt, selection){
    this.setState({selectedPracticeURI:selection.value})
  }

  render(){
    return(
    <div>
      <Button color="orange" icon="add" onClick={ ()=>{this.setState({showEdit:!this.state.showEdit})} }></Button>
      <div>Assign {this.props.person.name}</div>
      {this.state.showEdit?<Form onSubmit={this.handleSubmit}>
        <label>Project:</label>
        <Form.Field>
          <Dropdown placeholder="Set Project" fluid search selection onChange={this.changeProjectHandler} options={this.state.projects} required/>
        </Form.Field>
        <label>Practice:</label>
        <Form.Field>
          <Dropdown placeholder="Set Practice" fluid search selection onChange={this.changePracticeHandler} options={this.state.practices} required/>
        </Form.Field>        
        <label>Allocation:</label>
        <Form.Field>
          <input onChange={this.handleAllocation} name="allocation" required/>
        </Form.Field>
        <label>BillRate:</label>
        <Form.Field>
          <input onChange={this.handleBillRate} name="billrate" required/>
        </Form.Field>
        <label>ForecastAllocation:</label>
        <Form.Field>
          <input onChange={this.handleForecastAllocation} name="forecastallocation" required/>
        </Form.Field>
        <label>Notes:</label>
        <Form.Field>
          <input onChange={this.handleNotes} name="notes" required/>
        </Form.Field>
        <label>Role:</label>        
        <Form.Field>
          <input onChange={this.handleRole} name="role" required/>
        </Form.Field>
        <label>StartDate:</label>
        <Form.Field>
          <input onChange={this.handleStartDate} name="startdate" required/>
        </Form.Field>
        <label>EndDate:</label>
        <Form.Field>
          <input onChange={this.handleEndDate} name="enddate" required/>
        </Form.Field>       
        <Button type='submit' color='green'>
          <Icon name='checkmark' /> Submit
        </Button>
        <br/>
        <br/>
      </Form>:null}
    </div>
    )
  }
}

export default AddAssignmentCard