import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      <div className="projects">
        <div>Description: {this.props.thing.descr}</div>
        <div>EndDate: {this.props.thing.endDate}</div>
        <div>StartDate: {this.props.thing.startDate}</div>    
        <br/>    
      </div>
    );
  }
}

export default ProjectCard;
