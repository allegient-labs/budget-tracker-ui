import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

//requires a thing prop, an updateF prop, a message prop
class EditGenericCard extends React.Component {
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
    <Modal trigger={<Button color='teal' icon='write' onClick={this.handleOpen}></Button>}         
      onClose={()=>this.setState({modalOpen:false})}
      open={this.state.modalOpen}
      basic size='small'>
      <Header icon='write' content={`Edit ${this.props.thingName}`} />
      <Header content={this.props.thing.name}/>
      <Modal.Content>
      <Form>
        <label>Name</label>
        <Form.Field>
          <input onChange={this.changeHandler} value={this.state.value} placeholder={this.props.thing.name} />
        </Form.Field>
      </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.props.updateF.bind(null, this.props.thing._links.self, this.handleClose, {name:this.state.name})} type='submit' color='green' inverted>
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

export default EditGenericCard