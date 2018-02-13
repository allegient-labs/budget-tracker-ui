import React from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
/**
*This component enables the inclusion of certain modal properties by props and passes modal close handler to children
*
*props: submitAction
*/
class PersonCard extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    if(!this.props.submitAction){
      console.log("Required props: submitAction fn")
    }else{
      this.props.submitAction({name:evt.target.name.value})
      this.props.handleClose()
    }
  }

  render() {
    return (
      <Modal.Content>
        {this.props.crudType==="delete"?
        <Button color="red" onClick={this.handleSubmit}>Delete</Button>
        :<Form onSubmit={this.handleSubmit}>
          <label color="white">Name</label>
          <Form.Field>
            <Form.Input
              name="name"
              placeholder={"Insert Name"}
              required
            />
          </Form.Field>
          <br/>
          <Form.Button
            type="submit"
            color="green"
            inverted
          >
            <Icon name="checkmark" /> Submit
          </Form.Button>
        </Form>}
      </Modal.Content>
    );
  }
}

export default PersonCard;