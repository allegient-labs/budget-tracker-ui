import React, { Component } from "react";

class AssignmentCard extends Component {
  render() {
    return (
      <div className="assignments">
        <div>Allocation:{this.props.thing.allocation}</div>
        <div>BillRate:{this.props.thing.billRate}</div>
        <div>ForecastAllocation:{this.props.thing.forecastAllocation}</div>
        <div>Notes:{this.props.thing.notes}</div>
        <div>Role:{this.props.thing.role}</div>
        <div>StartDate:{this.props.thing.startDate}</div>
        <div>EndDate:{this.props.thing.endDate}</div>
        <br />
      </div>
    );
  }
}

export default AssignmentCard;
