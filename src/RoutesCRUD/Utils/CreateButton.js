import React from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

//requires a thing prop, a createF prop, a thingName prop
class CreateButton extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      name: ""
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

  changeHandler(evt) {
    this.setState({ name: evt.target.value });
  }

  handleSubmit() {
    if (this.state.name) {
      this.props.createF(null, this.handleClose, {
        name: this.state.name,
        description: this.state.description,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      });
    }
  }

  render() {
    return (
      <Modal
        trigger={
          <Button color="green" onClick={this.handleOpen}>
            Add a {this.props.thingName}
          </Button>
        }
        onClose={this.handleClose}
        open={this.state.modalOpen}
        basic
        size="small"
      >
        <Header icon="add circle" content={this.props.thingName} />
        <Modal.Content>
          <Form>
            <label color="white">Name</label>
            <Form.Field>
              <Form.Input
                onChange={this.changeHandler}
                value={this.state.value}
                placeholder={"Insert Name"}
                required
              />
            </Form.Field>
            <Form.Button
              onClick={this.handleSubmit}
              type="submit"
              color="green"
              inverted
            >
              <Icon name="checkmark" /> Submit
            </Form.Button>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} basic color="red" inverted>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CreateButton;
