import React, { Component } from 'react';

class PracticeCard extends Component {
  render() {
    return (
      <div className="practices">
        <div>{this.props.thing.name}</div> 
        <div>**Add Another Field Here</div>
        <br/>      
      </div>
    );
  }
}

export default PracticeCard;
