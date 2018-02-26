import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import history from "../history";
import { withRouter } from "react-router-dom";
import EnhancedCreateModal from '../utils/EnhancedCreateModal'
import CalendarCard from '../utils/CalendarCard'

class OffsComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button
          color="blue"
          icon="arrow circle left"
          onClick={() => {
            this.props.history.push("/myinfo");
          }}
        />
        <h3>OffsComponent</h3>
        <EnhancedCreateModal>
          <CalendarCard/>
        </EnhancedCreateModal>
      </div>
    );
  }
}

export default withRouter(OffsComponent);
