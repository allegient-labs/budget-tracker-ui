import React, { Component } from 'react';

class TimelogsCard extends Component {
  render() {
    return (
      <div className="projects">
        <div>Date: {this.props.thing.date}</div>
        <div>Description: {this.props.thing.description}</div>
        <div>Hours: {this.props.thing.hours}</div>  
        <br/>    
      </div>
    );
  }
}

export default TimelogsCard;
