import React, { Component } from 'react';
import {
   Router,
  Route
} from 'react-router-dom'
import './App.css';
import history from './history'
import { Provider } from 'react-redux'

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
import AdminComponent from './Admin/AdminComponent'
import AdminManageUsersContainer from './Admin/containers/AdminManageUsersContainer'
import AdminManageSingleUserContainer from './Admin/containers/AdminManageSingleUserContainer'
import AdminManageProjectsContainer from './Admin/containers/AdminManageProjectsContainer'
import AdminManageSingleProjectContainer from './Admin/containers/AdminManageSingleProjectContainer'

import AdminManageHolidaysComponent from './Admin/AdminManageHolidaysComponent'
import UserManageProfileComponent from './MyInfo/UserManageProfileComponent'
import UserManageOffsComponent from './MyInfo/UserManageOffsComponent'
import UserManageSingleOffComponent from './MyInfo/UserManageSingleOffComponent'
import UserManageLogsComponent from './MyInfo/UserManageLogsComponent'
import UserManageSingleLogComponent from './MyInfo/UserManageSingleLogComponent'
import UserManageInfoComponent from './MyInfo/UserManageInfoComponent'

import configureStore from './store'
const store = configureStore()

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router history={history}>
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
            
              <Route exact path="/myinfo" component={UserManageInfoComponent}/>
              <Route exact path="/myinfo/timeoffs" component={UserManageOffsComponent}/>
              <Route exact path="/myinfo/timeoffs/:id" component={UserManageSingleOffComponent}/>
              <Route exact path="/myinfo/timelogs" component={UserManageLogsComponent}/>
              <Route exact path="/myinfo/timelogs/:id" component={UserManageSingleLogComponent}/>
              <Route exact path="/myinfo/profile" component={UserManageProfileComponent}/>
              
              <Route exact path="/admin" component={AdminComponent}/>
              <Route exact path="/admin/users" component={AdminManageUsersContainer}/>
              <Route exact path="/admin/users/singleuser" component={AdminManageSingleUserContainer}/>
              <Route exact path="/admin/projects" component={AdminManageProjectsContainer}/>
              <Route exact path="/admin/projects/singleproject" component={AdminManageSingleProjectContainer}/>
              <Route exact path="/admin/holidays" component={AdminManageHolidaysComponent}/>

              <Route exact path="/about" component={AboutComponent}/>
            </div>      
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
