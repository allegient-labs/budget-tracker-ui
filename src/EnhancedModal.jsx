import React from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

//props required: color, message, icon, children
class EditorModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    const color = this.props.color ? this.props.color : green;
    const message = this.props.message ? this.props.message : null;
    const iconButton = this.props.iconButton ? this.props.iconButton : null;
    const icon = this.props.icon ? this.props.icon : "checkmark";

    return (
      <Modal
        trigger={
          <Button color={color} icon={iconButton} onClick={this.handleOpen}>
            {message}
          </Button>
        }
        onClose={this.handleClose}
        open={this.state.modalOpen}
        basic
        size="small"
      >
        <Header icon={icon} content={message} />
        {this.props.children}
        <Modal.Actions>
          <Button onClick={this.handleClose} basic color="red" inverted>
            <Icon name="close" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditorModal;
