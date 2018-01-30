import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';

import AboutComponent from './RoutesCRUD/About/AboutComponent'
import PeopleComponent from './RoutesCRUD/People/PeopleComponent'
import TimeoffsComponent from './RoutesCRUD/Timeoffs/TimeoffsComponent'
import PracticeComponent from './RoutesCRUD/Practice/PracticeComponent'
import BudgetsComponent from './RoutesCRUD/Budgets/BudgetsComponent'
import TimelogsComponent from './RoutesCRUD/Timelogs/TimelogsComponent'
import CRUDProjectsComponent from './RoutesCRUD/Projects/ProjectsComponent'
import AssignmentsComponent from './RoutesCRUD/Assignments/AssignmentsComponent'

import UtilityHeader from './UtilityHeader'

import StatsComponent from './Stats/StatsComponent'
import ProjectComponent from './Project/ProjectComponent'
import MyInfoComponent from './MyInfo/MyInfoComponent'
import AdminComponent from './Admin/AdminComponent'

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <UtilityHeader/>
          <div className="App-intro">
            <Route exact path="/" component={AboutComponent}/>
            <Route exact path="/personscrud" component={PeopleComponent}/>
            <Route exact path="/timeoffs" component={TimeoffsComponent}/>
            <Route exact path="/practice" component={PracticeComponent}/>            
            <Route exact path="/budgets" component={BudgetsComponent}/>
            <Route exact path="/timelogs" component={TimelogsComponent}/>
            <Route exact path="/projectscrud" component={CRUDProjectsComponent}/>
            <Route exact path="/assignments" component={AssignmentsComponent}/>
            
            <Route exact path="/stats" component={StatsComponent}/>
            <Route exact path="/projects" component={ProjectComponent}/>
            <Route exact path="/myinfo" component={MyInfoComponent}/>
            <Route exact path="/admin" component={AdminComponent}/>
            <Route exact path="/about" component={AboutComponent}/>
          </div>      
        </div>
      </Router>
    )
  }
}

export default App;
