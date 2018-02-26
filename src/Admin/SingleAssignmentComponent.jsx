import React, { Component } from 'react';
import axios from 'axios';
import EnhancedUpdateModal from '../utils/EnhancedUpdateModal';
import EnhancedDeleteModal from '../utils/EnhancedDeleteModal';
import PersonAssignmentForm from '../utils/PersonAssignmentForm';

class SingleUserComponent extends Component {
  constructor() {
    super();
    this.state = {
      assignment: {},
      message: '',
      asmtPerson: {},
      asmtProject: {},
      asmtPractice: {}
    };
    this.getAssignment = this.getAssignment.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.editAssignment = this.editAssignment.bind(this);
  }

  componentDidMount() {
    this.getAssignment();
  }

  getAssignment() {
    axios
      .get(
        'http://localhost:8080/assignments/search/findById?id=' +
          this.props.match.params.assignmentId
      )
      .then(asmt => {
        this.setState({ assignment: asmt.data });
        axios.get(asmt.data._links.person.href).then(person => {
          this.setState({ asmtPerson: person.data });
        });
        axios.get(asmt.data._links.practice.href).then(practice => {
          this.setState({ asmtPractice: practice.data });
        });
        axios.get(asmt.data._links.project.href).then(project => {
          this.setState({ asmtProject: project.data });
        });
      });
  }

  handleDelete() {
    axios.delete(this.state.assignment._links.self.href).then(() => {
      this.setState({ assignment: {}, message: 'Assignment deleted' });
    });
  }

  editAssignment(payload) {
    axios.put(this.state.assignment._links.self.href, payload).then(res => {
      if (payload.practiceURI && payload.projectURI) {
        axios({
          method: 'put',
          url: res.data._links.practice.href,
          data: payload.practiceURI,
          headers: { 'Content-Type': 'text/uri-list' }
        })
          .then(() => {
            return axios({
              method: 'put',
              url: res.data._links.project.href,
              data: payload.projectURI,
              headers: { 'Content-Type': 'text/uri-list' }
            });
          })
          .then(() => {
            this.getAssignment();
          });
      }
      if (payload.practiceURI && !payload.projectURI) {
        axios({
          method: 'put',
          url: res.data._links.practice.href,
          data: payload.practiceURI,
          headers: { 'Content-Type': 'text/uri-list' }
        }).then(() => {
          this.getAssignment();
        });
      }
      if (payload.projectURI && !payload.practiceURI) {
        axios({
          method: 'put',
          url: res.data._links.project.href,
          data: payload.projectURI,
          headers: { 'Content-Type': 'text/uri-list' }
        }).then(() => {
          this.getAssignment();
        });
      }
      if (!payload.practiceURI && !payload.projectURI) {
        this.getAssignment();
      }
    });
  }

  render() {
    const assign = this.state.assignment;
    return (
      <div>
        <div className="thingCard">
          <h3>Selected Assignment</h3>
        </div>
        {!this.state.message ? (
          <div>
            <div>Person: {this.state.asmtPerson.name}</div>
            <div>Project: {this.state.asmtProject.name}</div>
            <div>Practice: {this.state.asmtPractice.name}</div>
            <br />
            <div>{'Role: ' + assign.role}</div>
            <div>{'Bill Rate: ' + assign.billRate}</div>
            <div>{'Notes: ' + assign.notes}</div>
            <div>{'Allocation: ' + assign.allocation}</div>
            <div>{'Forecast Allocation: ' + assign.forecastAllocation}</div>
            <div>{'Start Date: ' + assign.startDate}</div>
            <div>{'End Date: ' + assign.endDate}</div>
            <EnhancedUpdateModal>
              <PersonAssignmentForm
                assignment={this.state.assignment}
                submitAction={this.editAssignment}
              />
            </EnhancedUpdateModal>
            <EnhancedDeleteModal>
              <PersonAssignmentForm submitAction={this.handleDelete} />
            </EnhancedDeleteModal>
            <br />
          </div>
        ) : (
          <h3>Assignment Deleted</h3>
        )}
      </div>
    );
  }
}

export default SingleUserComponent;
