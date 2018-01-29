import React, { Component } from 'react';
import './Practice.css'
import GenericCrudComponent from '../Utils/GenericCrudComponent'
import TimeoffsCard from './TimeoffsCard'

class TimeoffsComponent extends Component {
  render() {
    return (
      <div>
        <h1>TIMEOFFS</h1>
        <GenericCrudComponent thingName={'Timeoff'} URL_Ext={'timeoffs'} inObjectExt={'timeoffs'}>
          <TimeoffsCard/>
        </GenericCrudComponent>
      </div>
    );
  }
}

export default TimeoffsComponent;