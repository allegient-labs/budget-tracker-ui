import React from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
/**
*This component enables the inclusion of certain modal properties by props and passes modal close handler to children
*
*props: crudType, thingName, action
*/
class EnhancedCUDModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    const type = this.props.crudType
    const thingName = this.props.thingName?this.props.thingName:"Item"
    let triggerButtonColor = null
    let triggerButtonText = ""
    let triggerButtonIcon = null
    let inModalText = ""
    let inModalIcon = null

    if(type==="create"){
      triggerButtonColor = "green"
      triggerButtonText = "Add"
      triggerButtonIcon = "plus"
      inModalText = "Create A New "+thingName
      inModalIcon = "add circle"

    }else if(type==="edit"){
      triggerButtonColor = "teal"
      triggerButtonText = "Edit"
      triggerButtonIcon = "write"
      inModalText = "Edit "+thingName
      inModalIcon = "write"

    }else if(type==="delete"){
      triggerButtonColor = "red"
      triggerButtonText = "Delete"
      triggerButtonIcon = "cancel"
      inModalText = "Are you sure you want to delete "+thingName+"?"
      inModalIcon = "minus"      
    }else{
      triggerButtonColor = null
      triggerButtonText = "No crud prop"
      triggerButtonIcon = null
      inModalText = "No crud type prop"    
      inModalIcon = null   
    }
    
    const children = this.props.children;
    return (
      <Modal
        trigger={
          <Button color={triggerButtonColor} onClick={this.handleOpen}>
            {triggerButtonIcon?<Icon name={triggerButtonIcon}/>:null}{triggerButtonText}
          </Button>
        }
        onClose={this.handleClose}
        open={this.state.modalOpen}
        basic
        size="small"
      >
        <Header icon={inModalIcon} content={inModalText} />
        {children?React.cloneElement(children, {handleClose: this.handleClose, crudType:type}):null}
        <Modal.Actions>
          <Button onClick={this.handleClose} basic color="red" inverted>
            <Icon name="close" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EnhancedCUDModal;
