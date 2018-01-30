import React, { Component } from 'react';
import './Practice.css'
import GenericCrudComponent from '../Utils/GenericCrudComponent'
import TimeoffsCard from './TimeoffsCard'
import EditGenericCard from './EditGenericCard'

class TimeoffsComponent extends Component {
  render() {
    return (
      <div>
        <h1>TIMEOFFS</h1>
        <GenericCrudComponent thingName={'Timeoff'} URL_Ext={'timeoffs'} inObjectExt={'timeoffs'}>
          <TimeoffsCard/>
          <EditGenericCard/>          
        </GenericCrudComponent>
      </div>
    );
  }
}

export default TimeoffsComponent;