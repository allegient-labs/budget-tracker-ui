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

import Header from './Header'

import StatsComponent from './Stats/StatsComponent'
import ProjectComponent from './Project/ProjectComponent'
import AdminComponent from './Admin/AdminComponent'
import UsersContainer from './Admin/containers/UsersContainer'
import SingleUserContainer from './Admin/containers/SingleUserContainer'
import ProjectsContainer from './Admin/containers/ProjectsContainer'
import SingleProjectContainer from './Admin/containers/SingleProjectContainer'
import ClientsContainer from './Admin/containers/ClientsContainer'
import SingleClientContainer from './Admin/containers/SingleClientContainer'
import SingleUserAssignmentsContainer from './Admin/containers/SingleUserAssignmentsContainer'
import HolidaysComponent from './Admin/HolidaysComponent'
import ProfileComponent from './MyInfo/ProfileComponent'
import OffsComponent from './MyInfo/OffsComponent'
import SingleOffComponent from './MyInfo/SingleOffComponent'
import LogsComponent from './MyInfo/LogsComponent'
import SingleLogComponent from './MyInfo/SingleLogComponent'
import InfoComponent from './MyInfo/InfoComponent'

import configureStore from './store'
const store = configureStore()

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Header/>
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
            
              <Route exact path="/myinfo" component={InfoComponent}/>
              <Route exact path="/myinfo/timeoffs" component={OffsComponent}/>
              <Route exact path="/myinfo/timeoffs/:id" component={SingleOffComponent}/>
              <Route exact path="/myinfo/timelogs" component={LogsComponent}/>
              <Route exact path="/myinfo/timelogs/:id" component={SingleLogComponent}/>
              <Route exact path="/myinfo/profile" component={ProfileComponent}/>
              
              <Route exact path="/admin" component={AdminComponent}/>
              <Route exact path="/admin/users" component={UsersContainer}/>
              <Route exact path="/admin/users/selectedUser/:id" component={SingleUserContainer}/>

              <Route exact path="/admin/users/singleuser" component={SingleUserContainer}/>
              <Route exact path="/admin/users/singleuser/assignments" component={SingleUserAssignmentsContainer}/>
              <Route exact path="/admin/clients" component={ClientsContainer}/>      
              <Route exact path="/admin/clients/singleclient" component={SingleClientContainer}/>              
              <Route exact path="/admin/projects" component={ProjectsContainer}/>
              <Route exact path="/admin/projects/singleproject" component={SingleProjectContainer}/>
              <Route exact path="/admin/holidays" component={HolidaysComponent}/>

              <Route exact path="/about" component={AboutComponent}/>
            </div>      
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
