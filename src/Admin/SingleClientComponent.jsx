import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

class SingleClientComponent extends Component {
  constructor() {
    super();
    this.state = { showHolidays: false };

    this.updateThing = this.updateThing.bind(this);
    this.toggleShowHolidays = this.toggleShowHolidays.bind(this);
  }

  componentDidMount() {
    axios.get();
  }

  updateThing(url, closeFunc, payload) {
    axios.put(url.href, payload).then(res => {
      this.props.setSelectedClient(res.data);
    });
    closeFunc();
  }

  toggleShowHolidays() {
    this.setState({ showHolidays: !this.state.showHolidays });
  }

  render() {
    return (
      <div>
        <div className="thingCard">
          <h3>Selected Client:</h3>
          <div className="info">
            <div className="people">
              <h3 />
            </div>
          </div>
          <div className="buttons" />
          <br />
        </div>
        <Button color="yellow" onClick={this.toggleShowHolidays}>
          Manage Client Holidays
        </Button>
        {this.state.showHolidays ? (
          <div>Manage Holidays not yet implemented</div>
        ) : null}
      </div>
    );
  }
}

export default SingleClientComponent;
