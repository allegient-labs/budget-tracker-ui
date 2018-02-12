import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import history from "../history.jsx";
import { API_URL } from "../commonVars";
import EnhancedCUDModal from "../utils/EnhancedCUDModal";
import PersonAssignmentForm from "../utils/PersonAssignmentForm";

class SingleUserComponent extends Component {
  constructor() {
    super();
    this.state = { assignment: {}, message: "" };
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
        "http://localhost:8080/assignments/search/findById?id=" +
          this.props.match.params.assignmentId
      )
      .then(asmt => {
        this.setState({ assignment: asmt.data });
      });
  }

  handleDelete() {
    axios.delete(this.state.assignment._links.self.href).then(() => {
      this.setState({ assignment: {}, message: "Assignment deleted" });
    });
  }

  editAssignment(payLoad) {
    axios.put(this.state.assignment._links.self.href).then(() => {
      this.getAssignment();
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
            <div>{"Role: " + assign.role}</div>
            <div>{"Bill Rate: " + assign.billRate}</div>
            <div>{"Notes: " + assign.notes}</div>
            <div>{"Allocation: " + assign.allocation}</div>
            <div>{"Forecast Allocation: " + assign.forecastAllocation}</div>
            <div>{"Start Date: " + assign.startDate}</div>
            <div>{"End Date: " + assign.endDate}</div>
            <EnhancedCUDModal crudType="edit">
              <PersonAssignmentForm
                assignment={this.state.assignment}
                submitAction={this.editAssignment}
              />
            </EnhancedCUDModal>
            <EnhancedCUDModal crudType="delete">
              <PersonAssignmentForm submitAction={this.handleDelete} />
            </EnhancedCUDModal>
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
