import React from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

//requires a thing prop, an updateF prop, a message prop
class EditTimeoffsCard extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      name: ""
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
    this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  changeNameHandler(evt) {
    this.setState({ name: evt.target.value });
  }
  changeStartDateHandler(evt) {
    this.setState({ name: evt.target.value });
  }
  changeEndDateHandler(evt) {
    this.setState({ name: evt.target.value });
  }

  render() {
    return (
      <Modal
        trigger={<Button color="teal" icon="write" onClick={this.handleOpen} />}
        onClose={() => this.setState({ modalOpen: false })}
        open={this.state.modalOpen}
        basic
        size="small"
      >
        <Header icon="write" content={`Edit ${this.props.thingName}`} />
        <Header content={this.props.thing.name} />
        <Modal.Content>
          <Form>
            <label>Name</label>
            <Form.Field>
              <input
                onChange={this.changeNameHandler}
                value={this.state.value}
                placeholder={this.props.thing.name}
              />
            </Form.Field>
            <label>StartDate</label>
            <Form.Field>
              <input
                onChange={this.changeStartDateHandler}
                value={this.state.value}
                placeholder={this.props.thing.name}
              />
            </Form.Field>
            <label>EndDate</label>
            <Form.Field>
              <input
                onChange={this.changeEndDateHandler}
                value={this.state.value}
                placeholder={this.props.thing.name}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.updateF.bind(
              null,
              this.props.thing._links.self,
              this.handleClose,
              { name: this.state.name }
            )}
            type="submit"
            color="green"
            inverted
          >
            <Icon name="checkmark" /> Submit
          </Button>
          <Button onClick={this.handleClose} basic color="red" inverted>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
        <div>Set PersonTimeoff</div>
        <div>Set Person</div>
      </Modal>
    );
  }
}

export default EditTimeoffsCard;
