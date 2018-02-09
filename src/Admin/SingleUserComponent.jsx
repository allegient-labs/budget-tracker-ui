import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import EditPeopleCard from "./EditPeopleCard";
import AddAssignmentCard from "./AddAssignmentCard";
import history from "../history.jsx";
import EnhancedCUDModal from '../utils/EnhancedCUDModal'
import PersonCard from '../utils/PersonCard'
import {API_URL} from '../commonVars'
class SingleUserComponent extends Component {
  constructor() {
    super();
    this.state = {selectedUser:{}};

    this.updateThing = this.updateThing.bind(this);
  }

  componentDidMount(){
    axios.get(API_URL+'/persons/'+this.props.match.params.personId)
    .then((res)=>{this.setState({selectedUser:res.data})})
  }

  updateThing(payload) {
    axios.put(this.props.selectedUser._links.self.href, payload).then(res => {
      this.props.setSelectedUser(payload);
    });
  }

  render() {
    return (
          <div>
            <div className="thingCard">
              <h3>Selected Person:</h3>
              <div className="info">
                <div className="people">
                  <h3>{this.state.selectedUser.name}</h3>
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
                history.push('./'+this.state.selectedUser.id+'/assignments');
              }}
            >
              See this person's assignments
            </Button>
            <AddAssignmentCard person={this.state.selectedUser} />
          </div>
    );
  }
}

export default SingleUserComponent;
