import React from 'react';
import { Button, Icon, Modal, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { API_URL } from '../commonVars';
import { adalApiFetch } from '../adalConfig';
/**
 *This component enables the inclusion of certain modal properties by props and passes modal close handler to children
 *
 *props: submitAction
 */
class ProjectForm extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDropdownURI: '',
      clientsDropDown: [],
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.getClients = this.getClients.bind(this);
  }

  componentDidMount() {
    this.getClients();
  }

  handleSubmit(evt) {
    if (!this.props.submitAction) {
      console.log('Required props: submitAction fn');
    } else {
      if (this.state.selectedDropdownURI) {
        this.props.submitAction(
          {
            name: evt.target.name.value,
            description: evt.target.description.value,
            startDate: evt.target.startDate.value,
            endDate: evt.target.endDate.value
          },
          this.state.selectedDropdownURI
        );
        this.props.handleClose();
      } else {
        this.setState({ message: 'Please select client from dropdown' });
      }
    }
  }

  getClients() {
    adalApiFetch(axios.get, API_URL + '/clients', {}).then(clients => {
      this.setState({ clients: clients.data._embedded.clients }, () => {
        var arr = [];
        this.state.clients.map((client, i) => {
          return arr.push({
            key: i,
            text: client.name,
            value: client._links.self.href
          });
        });
        this.setState({ clientsDropDown: arr });
      });
    });
  }

  changeHandler(evt, selection) {
    this.setState({ selectedDropdownURI: selection.value });
  }

  render() {
    const thing =
      this.props.thing && this.props.thing.name
        ? this.props.thing
        : { name: '', description: '', startDate: '', endDate: '' };
    return (
      <Modal.Content>
        {this.props.crudType === 'delete' ? (
          <Button color="red" onClick={this.handleSubmit}>
            Delete
          </Button>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <label color="white">Name</label>
            <Form.Field>
              <Form.Input
                name="name"
                defaultValue={thing.name}
                placeholder={'Name'}
                required
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                name="description"
                defaultValue={thing.description}
                placeholder={'Description'}
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                name="startDate"
                defaultValue={thing.startDate}
                placeholder={'Start Date'}
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                name="endDate"
                defaultValue={thing.endDate}
                placeholder={'End Date'}
                required
              />
            </Form.Field>
            <Form.Field>
              <Dropdown
                placeholder={
                  this.props.linkedClient ? this.props.linkedClient.name : null
                }
                fluid
                search
                selection
                name="client"
                onChange={this.changeHandler}
                options={this.state.clientsDropDown}
              />
            </Form.Field>
            <br />
            <Form.Button type="submit" color="green" inverted>
              <Icon name="checkmark" /> Submit
            </Form.Button>
          </Form>
        )}
        {this.state.message ? <h3>{this.state.message}</h3> : null}
      </Modal.Content>
    );
  }
}

export default ProjectForm;
