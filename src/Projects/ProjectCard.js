import React, { Component } from 'react';
import './Projects.css'

class ProjectCard extends Component {
  render() {
    console.log("project card props", this.props)
    return (
      <div className="projects">
        <div>Client: {this.props.thing.client}</div>
        <div>Description: {this.props.thing.description}</div>
        <div>EndDate: {this.props.thing.endDate}</div>
        <div>Name: {this.props.thing.name}</div>
        <div>StartDate: {this.props.thing.startDate}</div>  
        <br/>      
      </div>
    );
  }
}

export default ProjectCard;
