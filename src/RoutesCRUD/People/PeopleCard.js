import React, { Component } from "react";

class PeopleCard extends Component {
  render() {
    return (
      <div className="people">
        <div>{this.props.thing.name}</div>
        <div>**Add Another Field Here</div>
        <br />
      </div>
    );
  }
}

export default PeopleCard;
