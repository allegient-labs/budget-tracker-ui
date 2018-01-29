import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'


//requires a thing prop, a createF prop, a thingName prop
class CreatePerson extends React.Component {
  constructor(){
    super()
    this.state = { 
      modalOpen:false,
      name:""
     }

    this.handleOpen=this.handleOpen.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.changeHandler=this.changeHandler.bind(this)

  }

  handleOpen(){this.setState({ modalOpen: true })}

  handleClose(){this.setState({ modalOpen: false })}

  changeHandler(evt){
    this.setState({name:evt.target.value})
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
        <label color="white">Name</label>
        <Form.Field>
          <input onChange={this.changeHandler} value={this.state.value} placeholder={"Insert Name"} />
        </Form.Field>
      </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.props.createF.bind(null, null, this.handleClose, {name:this.state.name})} type='submit' color='green' inverted>
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

export default CreatePerson