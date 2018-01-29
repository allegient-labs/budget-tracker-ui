import React, { Component } from 'react';
import './About.css'

class AboutComponent extends Component {
  render() {
    return (
      <div className="about">
        <h2>About:</h2>
        <h4>The aim of this project is to create a budget tracking web application for use internally and for use as a learning tool for those new to React</h4>
      </div>
    );
  }
}

export default AboutComponent;