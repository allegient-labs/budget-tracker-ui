import React, { Component } from 'react';
import './Practice.css'
import GenericCrudComponent from '../Utils/GenericCrudComponent'
import PracticeCard from './PracticeCard'

class PracticeComponent extends Component {
  render() {
    return (
      <div>
        <h1>PRACTICES</h1>
        <GenericCrudComponent thingName={'Practice'} URL_Ext={'practices'} inObjectExt={'practices'}>
          <PracticeCard/>
        </GenericCrudComponent>
     </div>
    );
  }
}

export default PracticeComponent;