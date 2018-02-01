import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

//requires a thing prop, an updateF prop, a thingName prop
class EditProjectCard extends React.Component {
  constructor(){
    super()
    this.state = { 
      modalOpen:false,
      name:this.props&&this.props.thing.name?this.props.thing.name:"",
      description:this.props&&this.props.thing.description?this.props.thing.description:"",
      startDate:this.props&&this.props.thing.startDate?this.props.thing.startDate:0,
      endDate:this.props&&this.props.thing.endDate?this.props.thing.endDate:0
     }

    this.handleOpen=this.handleOpen.bind(this)
    this.handleClose=this.handleClose.bind(this)
    
    this.handleName=this.handleName.bind(this)
    this.handleDescription=this.handleDescription.bind(this)
    this.handleStartDate=this.handleStartDate.bind(this)
    this.handleEndDate=this.handleEndDate.bind(this)
    
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

  render(){
    console.log(this.props&&this.props.thing.name?this.props.thing.name:"")
    return(
    <Modal trigger={<Button color='teal' icon='write' onClick={this.handleOpen}></Button>}         
      onClose={()=>this.setState({modalOpen:false})}
      open={this.state.modalOpen}
      basic size='small'>
      <Header icon='write' content={`Edit ${this.props.thingName}`} />
      <Header content={this.props.thing.name}/>
      <Modal.Content>
      <Form>
        <label>Name:</label>
        <Form.Field>
          <input onChange={this.handleName} value={this.state.name} />
        </Form.Field>
        <label>Description:</label>
        <Form.Field>
          <input onChange={this.handleDescription} value={this.state.description}  />
        </Form.Field>
        <label>StartDate:</label>
        <Form.Field>
          <input onChange={this.handleStartDate} value={this.state.startDate}  />
        </Form.Field>
        <label>EndDate:</label>
        <Form.Field>
          <input onChange={this.handleEndDate} value={this.state.endDate} />
        </Form.Field>
      </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.props.thing._links?this.props.updateF.bind(null, this.props.thing._links.self, this.handleClose, 
          {name:this.state.name,
          client:this.state.client, 
            description:this.state.description, 
            startDate:this.state.startDate, 
            endDate:this.state.endDate
          }):null} type='submit' color='green' inverted>
          <Icon name='checkmark' /> Submit
        </Button>
        <Button onClick={this.handleClose} basic color='red' inverted>
          <Icon name='remove' /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
    )
  }
}

export default EditProjectCard