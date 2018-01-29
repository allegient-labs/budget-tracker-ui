import React, { Component } from 'react';
import './Practice.css'
import GenericCrudComponent from '../Utils/GenericCrudComponent'
import TimelogsCard from './TimelogsCard'

class TimelogsComponent extends Component {
  render() {
    return (
      <div>
        <h1>TIMELOGS</h1>
        <GenericCrudComponent thingName={'Timelogs'} URL_Ext={'timelogs'} inObjectExt={'timelogs'}>
          <TimelogsCard/>
        </GenericCrudComponent>
      </div>
    );
  }
}

export default TimelogsComponent;