import React, { Component } from 'react';
import './Practice.css'
import GenericCrudComponent from '../Utils/GenericCrudComponent'
import BudgetsCard from './BudgetsCard'
import EditBudgetCard from './EditBudgetCard'

class BudgetsComponent extends Component {
  render() {
    return (
      <div>
        <h1>BUDGETS</h1>
        <GenericCrudComponent thingName={'Budget'} URL_Ext={'budgets'} inObjectExt={'budget'}>
          <BudgetsCard/>
          <EditBudgetCard/>          
        </GenericCrudComponent>
      </div>
    );
  }
}

export default BudgetsComponent;