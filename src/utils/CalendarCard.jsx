import React from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

class CalendarForm extends React.Component {
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
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
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

export default CalendarForm;