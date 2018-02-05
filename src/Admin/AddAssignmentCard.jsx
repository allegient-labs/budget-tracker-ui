import React from 'react'
import { Button, Header, Icon, Modal, Form, Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import {API_URL} from '../commonVars'

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
    console.log( {allocation:evt.target.allocation.value} )
    const data = new FormData(evt.target);
    console.log(data)
  }

  changeProjectHandler(){

  }

  changePracticeHandler(){

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