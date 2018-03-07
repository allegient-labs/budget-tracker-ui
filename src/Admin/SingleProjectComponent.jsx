import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../commonVars';
import EnhancedUpdateModal from '../utils/EnhancedUpdateModal';
import EnhancedDeleteModal from '../utils/EnhancedDeleteModal';
import ProjectForm from '../utils/ProjectForm';
import { adalApiFetch, adalApiUpdate } from '../adalConfig';
class SingleProjectComponent extends Component {
  constructor() {
    super();
    this.state = {
      selectedProject: {},
      showEdit: false,
      clients: [],
      clientsDropDown: [],
      selectedDropdownURI: '',
      linkedClient: {}
    };
    this.getClients = this.getClients.bind(this);
    this.getClientRelation = this.getClientRelation.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.getProject = this.getProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
  }

  componentDidMount() {
    this.getProject();
    this.getClients();
  }

  getProject() {
    adalApiFetch(
      axios.get,
      API_URL + '/projects/' + this.props.match.params.projectId,
      {}
    ).then(res => {
      this.setState({ selectedProject: res.data }, this.getClientRelation);
    });
  }

  getClientRelation() {
    const clientURI = this.state.selectedProject._links.client.href;
    adalApiFetch(axios.get, clientURI, {})
      .then(client => {
        this.setState({ linkedClient: client.data });
      })
      .catch(err => {
        console.log(err);
      });
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

  updateProject(payload, selectedDropdownURI) {
    adalApiUpdate(
      axios.put,
      this.state.selectedProject._links.self.href,
      payload,
      {}
    ).then(res => {
      const clientURI = res.data._links.client.href;
      this.setState({ selectedProject: res.data });
      adalApiUpdate(axios.put, clientURI, selectedDropdownURI, {
        headers: { 'Content-Type': 'text/uri-list' }
      }).then(() => {
        adalApiFetch(axios.get, clientURI, {})
          .then(client => {
            this.setState({ linkedClient: client.data });
          })
          .catch(err => {
            console.log(err);
          });
      });
    });
  }

  changeHandler(evt, selection) {
    this.setState({ selectedDropdownURI: selection.value });
  }

  render() {
    return (
      <div>
        {this.state.selectedProject.name ? (
          <div>
            <h3>Edit Project Details</h3>
            <div className="projects">
              <div>Name: {this.state.selectedProject.name}</div>
              <div>Description: {this.state.selectedProject.description}</div>
              <div>StartDate: {this.state.selectedProject.startDate}</div>
              <div>EndDate: {this.state.selectedProject.endDate}</div>
              <div>Client:{this.state.linkedClient.name}</div>
              <br />
            </div>
            <div className="buttons">
              <EnhancedUpdateModal crudType="edit">
                <ProjectForm
                  clientsDropDown={this.state.clientsDropDown}
                  linkedClient={this.state.linkedClient}
                  thing={this.state.selectedProject}
                  submitAction={this.updateProject}
                />
              </EnhancedUpdateModal>
              <EnhancedDeleteModal crudType="delete">
                <ProjectForm />
              </EnhancedDeleteModal>
            </div>
          </div>
        ) : (
          <div>Go back and select project</div>
        )}
      </div>
    );
  }
}

export default SingleProjectComponent;
