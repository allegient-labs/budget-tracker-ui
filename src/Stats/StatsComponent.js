import React, { Component } from 'react';
import StatsStyle from './StatsStyle.css'
class StatsComponent extends Component {
  render() {
    return (
      <div className="about">
        <h2>StatsComponent</h2>
        <h5>Aggregate budget information and build charts to display trends</h5>        
        <div className="chart one">Sample Chart</div>
        <div className="chart two">Sample Chart</div>
      </div>
    );
  }
}

export default StatsComponent;