import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';

import AboutComponent from './About/AboutComponent'
import PeopleComponent from './People/PeopleComponent'
import TimeoffsComponent from './Timeoffs/TimeoffsComponent'
import PracticeComponent from './Practice/PracticeComponent'
import BudgetsComponent from './Budgets/BudgetsComponent'
import TimelogsComponent from './Timelogs/TimelogsComponent'
import ProjectsComponent from './Projects/ProjectsComponent'
import AssignmentsComponent from './Assignments/AssignmentsComponent'

import Header from './Header'

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="App-intro">
            <Route exact path="/" component={AboutComponent}/>
            <Route exact path="/people" component={PeopleComponent}/>
            <Route exact path="/timeoffs" component={TimeoffsComponent}/>
            <Route exact path="/practice" component={PracticeComponent}/>            
            <Route exact path="/budgets" component={BudgetsComponent}/>
            <Route exact path="/timelogs" component={TimelogsComponent}/>
            <Route exact path="/projects" component={ProjectsComponent}/>
            <Route exact path="/assignments" component={AssignmentsComponent}/>
            <Route exact path="/about" component={AboutComponent}/>
          </div>      
        </div>
      </Router>
    )
  }
}

export default App;
