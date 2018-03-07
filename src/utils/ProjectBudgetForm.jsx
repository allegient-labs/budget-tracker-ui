import React from 'react';
import { Button, Header, Icon, Modal, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { API_URL } from '../commonVars';
import history from '../history.jsx';
import { adalApiFetch } from '../adalConfig';

//requires a thing prop, an updateF prop, a thingName prop
class ProjectBudgetForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      practices: [],
      projects: [],
      allocation: '',
      billrate: '',
      ForecastAllocation: '',
      notes: '',
      role: '',
      startDate: 0,
      endDate: 0,
      selectedProjectURI: '',
      selectedPracticeURI: ''
    };
    this.changeProjectHandler = this.changeProjectHandler.bind(this);
    this.changePracticeHandler = this.changePracticeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getPersons();
    this.getProjects();
    this.getPractices();
  }

  getProjects() {
    adalApiFetch(axios.get, API_URL + '/projects?size=100', {}).then(res => {
      const projects = res.data._embedded.project;
      const builtDropdown = projects.map((project, i) => {
        return { key: i, text: project.name, value: project._links.self.href };
      });
      this.setState({ projects: builtDropdown });
    });
  }

  getPractices() {
    adalApiFetch(axios.get, API_URL + '/practices?size=50', {}).then(res => {
      const practices = res.data._embedded.practices;
      const builtDropdown = practices.map((practice, i) => {
        return {
          key: i,
          text: practice.name,
          value: practice._links.self.href
        };
      });

      this.setState({ practices: builtDropdown });
    });
  }

  handleSubmit(evt) {
    if (!this.props.submitAction) {
      console.log('Required props: submitAction fn');
    } else {
      let payload = null;
      if (this.props.crudType !== 'delete') {
        payload = {
          allocation: evt.target.allocation.value,
          billRate: evt.target.billrate.value,
          forecastAllocation: evt.target.forecastallocation.value,
          notes: evt.target.notes.value,
          role: evt.target.role.value,
          startDate: evt.target.startdate.value,
          endDate: evt.target.enddate.value,
          practiceURI: this.state.selectedPracticeURI,
          projectURI: this.state.selectedProjectURI,
          personURI: this.props.person._links.self.href
        };
      }
      this.props.submitAction(payload);
      this.setState(
        {
          modalOpen: false,
          name: '',
          showEdit: false,
          practices: [],
          projects: [],
          allocation: '',
          billrate: '',
          ForecastAllocation: '',
          notes: '',
          role: '',
          startDate: 0,
          endDate: 0,
          selectedProjectURI: '',
          selectedPracticeURI: ''
        },
        this.props.handleClose()
      );
    }
  }

  changeProjectHandler(evt, selection) {
    this.setState({ selectedProjectURI: selection.value });
  }

  changePracticeHandler(evt, selection) {
    this.setState({ selectedPracticeURI: selection.value });
  }

  render() {
    const asmt = this.props.assignment ? this.props.assignment : {};
    return (
      <div>
        {this.props.crudType === 'delete' ? (
          <Button color="red" onClick={this.handleSubmit}>
            Delete
          </Button>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <label>Project:</label>
            <Form.Field>
              <Dropdown
                placeholder={asmt.project ? asmt.project.name : 'Set Project'}
                fluid
                search
                selection
                onChange={this.changeProjectHandler}
                options={this.state.projects}
                required
              />
            </Form.Field>
            <label>Practice:</label>
            <Form.Field>
              <Dropdown
                placeholder={asmt.practice ? asmt.project.name : 'Set Practice'}
                fluid
                search
                selection
                onChange={this.changePracticeHandler}
                options={this.state.practices}
                required
              />
            </Form.Field>
            <label>Allocation:</label>
            <Form.Field>
              <input
                onChange={this.handleAllocation}
                name="allocation"
                defaultValue={asmt.allocation}
                required
              />
            </Form.Field>
            <label>BillRate:</label>
            <Form.Field>
              <input
                onChange={this.handleBillRate}
                name="billrate"
                defaultValue={asmt.billRate}
                required
              />
            </Form.Field>
            <label>ForecastAllocation:</label>
            <Form.Field>
              <input
                onChange={this.handleForecastAllocation}
                name="forecastallocation"
                defaultValue={asmt.forecastAllocation}
                required
              />
            </Form.Field>
            <label>Notes:</label>
            <Form.Field>
              <input
                onChange={this.handleNotes}
                name="notes"
                defaultValue={asmt.notes}
                required
              />
            </Form.Field>
            <label>Role:</label>
            <Form.Field>
              <input
                onChange={this.handleRole}
                name="role"
                defaultValue={asmt.role}
                required
              />
            </Form.Field>
            <label>StartDate:</label>
            <Form.Field>
              <input
                onChange={this.handleStartDate}
                name="startdate"
                defaultValue={asmt.startDate}
                required
              />
            </Form.Field>
            <label>EndDate:</label>
            <Form.Field>
              <input
                onChange={this.handleEndDate}
                name="enddate"
                defaultValue={asmt.endDate}
                required
              />
            </Form.Field>
            <Button type="submit" color="green">
              <Icon name="checkmark" /> Submit
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

export default ProjectBudgetForm;
