import React, { Component } from 'react';
import './People.css'
import GenericCrudComponent from '../Utils/GenericCrudComponent'
import PeopleCard from './PeopleCard'
import EditPeopleCard from './EditPeopleCard'

class PeopleComponent extends Component {
  render() {
    return (
      <div className="projects">
        <h1>PEOPLE</h1>
        <GenericCrudComponent thingName={'People'} URL_Ext={'persons'} inObjectExt={'person'}>
          <PeopleCard/>
          <EditPeopleCard/>
        </GenericCrudComponent>
      </div>
    );
  }
}

export default PeopleComponent;