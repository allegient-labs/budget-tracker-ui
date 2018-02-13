import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import EditPeopleCard from "./EditPeopleCard";
import AddAssignmentCard from "./AddAssignmentCard";
import history from "../history.jsx";
import EnhancedCUDModal from '../EnhancedCUDModal'
import PersonCard from '../PersonCard'
class SingleUserComponent extends Component {
  constructor() {
    super();
    this.state = {};

    this.updateThing = this.updateThing.bind(this);
  }

  updateThing(payload) {
    axios.put(this.props.selectedUser._links.self.href, payload).then(res => {
      this.props.setSelectedUser(payload);
    });
  }

  render() {
    return (
      <div>
        {this.props.selectedUser.name ? (
          <div>
            <div className="thingCard">
              <h3>Selected Person:</h3>
              <div className="info">
                <div className="people">
                  <h3>{this.props.selectedUser.name}</h3>
                </div>
              </div>
              <div className="buttons">
                <EnhancedCUDModal crudType="edit">
                  <PersonCard submitAction={this.updateThing}/>
                </EnhancedCUDModal>                
              </div>
            </div>
            <Button
              color="yellow"
              onClick={() => {
                history.push("/admin/users/singleuser/assignments");
              }}
            >
              See this person's assignments
            </Button>
            <AddAssignmentCard person={this.props.selectedUser} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SingleUserComponent;
