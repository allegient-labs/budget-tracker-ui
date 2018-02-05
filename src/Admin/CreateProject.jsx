import React from 'react'
import { Button, Header, Icon, Modal, Form, Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import {API_URL} from '../commonVars'

//requires a thing prop, a createF prop, a thingName prop
class CreateButton extends React.Component {
  constructor(){
    super()
    this.state = { 
      modalOpen:false,
      name:"",
      description:"",
      startDate:0,
      endDate:0,
      clients:[],
      clientsDropDown:[],
      selectedDropdownURI:""
     }
     this.handleOpen=this.handleOpen.bind(this)
     this.handleClose=this.handleClose.bind(this)
     this.handleName=this.handleName.bind(this)
     this.handleDescription=this.handleDescription.bind(this)
     this.handleStartDate=this.handleStartDate.bind(this)
     this.handleEndDate=this.handleEndDate.bind(this)
     this.getClients=this.getClients.bind(this)
     this.putClientAssociation=this.putClientAssociation.bind(this)
     this.changeHandler=this.changeHandler.bind(this)
  }

  componentDidMount(){
    this.getClients()
  }

  handleOpen(){this.setState({ modalOpen: true })}

  handleClose(){this.setState({ modalOpen: false })}

  handleName(evt){
    this.setState({name:evt.target.value})
  }

  handleDescription(evt){
    this.setState({description:evt.target.value})
  }

  handleStartDate(evt){
    this.setState({startDate:evt.target.value})
  }

  handleEndDate(evt){
    this.setState({endDate:evt.target.value})    
  }

  getClients(){
    axios.get(API_URL+'/clients')
    .then((clients)=>{
      this.setState({clients: clients.data._embedded.clients}, ()=>{
      var arr = [];
      this.state.clients.map((client, i)=>{
        arr.push({key:i, text:client.name, value:client._links.self.href})
      })
      this.setState({clientsDropDown:arr})
    })})
  }

  changeHandler(evt, selection){
    this.setState({selectedDropdownURI:selection.value})
  }

  putClientAssociation(clientURI){
    axios({  method: 'put',
    url: clientURI,
    data: this.state.selectedDropdownURI,
    headers:{'Content-Type':'text/uri-list'}})
    .then((client)=>{console.log(client)})
    .then(()=>{
      axios.get(clientURI)
      .then((client)=>{this.setState({linkedClient:client.data})})
      .catch((err)=>{console.log(err)})     
    })
  }

  render(){
    return(
    <Modal trigger={<Button color='green' onClick={this.handleOpen}>Add a {this.props.thingName}</Button>}         
      onClose={()=>this.setState({modalOpen:false})}
      open={this.state.modalOpen}
      basic size='small'>
      <Header icon='add circle' content={this.props.thingName}/>
      <Modal.Content>
      <Form>
        <label>Name:</label>
        <Form.Field>
          <input onChange={this.handleName} value={this.state.name} required/>
        </Form.Field>
        <label>Description:</label>
        <Form.Field>
          <input onChange={this.handleDescription} value={this.state.description} required/>
        </Form.Field>
        <label>StartDate:</label>
        <Form.Field>
          <input onChange={this.handleStartDate} value={this.state.startDate} required/>
        </Form.Field>
        <label>EndDate:</label>
        <Form.Field>
          <input onChange={this.handleEndDate} value={this.state.endDate} required/>
        </Form.Field>
        <label>Client:</label>
        <Form.Field>
          <Dropdown placeholder="Set client" fluid search selection onChange={this.changeHandler} options={this.state.clientsDropDown} required/>
        </Form.Field>
        <Button onClick={this.props.createF.bind(null, null, this.handleClose, 
          {name: this.state.name, description: this.state.description, startDate: this.state.startDate, endDate: this.state.endDate}, 
          this.putClientAssociation)}
           type='submit' color='green' inverted>
          <Icon name='checkmark' /> Submit
        </Button>
      </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.handleClose} basic color='red' inverted>
          <Icon name='remove' /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
    )
  }
}

export default CreateButton