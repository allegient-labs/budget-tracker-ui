import React, { Component } from 'react';
import './Practice.css'
import GenericCrudComponent from '../Utils/GenericCrudComponent'
import BudgetsCard from './BudgetsCard'
class BudgetsComponent extends Component {
  render() {
    return (
      <div>
        <h1>BUDGETS</h1>
        <GenericCrudComponent thingName={'Budget'} URL_Ext={'budgets'} inObjectExt={'budget'}>
          <BudgetsCard/>
        </GenericCrudComponent>
      </div>
    );
  }
}

export default BudgetsComponent;