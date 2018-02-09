import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import axios from "axios";

//requires a thing prop, a deleteF prop, a thingName prop
class DeleteButton extends React.Component {
  constructor() {
    super();
    this.state = { modalOpen: false };

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
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} color="red" icon="erase" />}
        onClose={() => this.setState({ modalOpen: false })}
        open={this.state.modalOpen}
        basic
        size="small"
      >
        <Header
          icon="warning"
          content={`Are You Sure You Want To Delete ${this.props.thingName}?`}
        />
        <Modal.Content>
          <p>{this.props.thing.name} will be deleted. This cannot be undone.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={this.handleClose} color="red" inverted>
            <Icon name="remove" /> No
          </Button>
          <Button
            color="green"
            onClick={this.props.deleteF.bind(
              null,
              this.props.thing._links.self,
              this.handleClose
            )}
            inverted
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteButton;
