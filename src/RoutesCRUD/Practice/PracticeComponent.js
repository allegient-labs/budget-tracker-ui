import React, { Component } from 'react';
import './Practice.css'
import GenericCrudComponent from '../Utils/GenericCrudComponent'
import PracticeCard from './PracticeCard'
import EditGenericCard from './EditGenericCard'

class PracticeComponent extends Component {
  render() {
    return (
      <div>
        <h1>PRACTICES</h1>
        <GenericCrudComponent thingName={'Practice'} URL_Ext={'practices'} inObjectExt={'practices'}>
          <PracticeCard/>
          <EditGenericCard/>          
        </GenericCrudComponent>
     </div>
    );
  }
}

export default PracticeComponent;