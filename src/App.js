import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import history from './history';
import { Provider } from 'react-redux';
import Header from './Header';

import StatsComponent from './Stats/StatsComponent';
import ProjectComponent from './Project/ProjectComponent';
import AdminComponent from './Admin/AdminComponent';
import PersonsContainer from './Admin/containers/UsersContainer';
import SinglePersonContainer from './Admin/containers/SingleUserContainer';
import ProjectsContainer from './Admin/containers/ProjectsContainer';
import SingleProjectContainer from './Admin/containers/SingleProjectContainer';
import ClientsContainer from './Admin/containers/ClientsContainer';
import SingleClientContainer from './Admin/containers/SingleClientContainer';
import SingleAssignmentContainer from './Admin/containers/SingleAssignmentContainer';
import HolidaysComponent from './Admin/HolidaysComponent';
import ProfileComponent from './MyInfo/ProfileComponent';
import OffsComponent from './MyInfo/OffsComponent';
import SingleOffComponent from './MyInfo/SingleOffComponent';
import LogsComponent from './MyInfo/LogsComponent';
import SingleLogComponent from './MyInfo/SingleLogComponent';
import InfoComponent from './MyInfo/InfoComponent';
import AboutComponent from './AboutComponent';
import configureStore from './store';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Header />
            <div className="App-intro">
              <Route exact path="/stats" component={StatsComponent} />
              <Route exact path="/projects" component={ProjectComponent} />

              <Route exact path="/myinfo" component={InfoComponent} />
              <Route exact path="/myinfo/timeoffs" component={OffsComponent} />
              <Route
                exact
                path="/myinfo/timeoffs/:id"
                component={SingleOffComponent}
              />
              <Route exact path="/myinfo/timelogs" component={LogsComponent} />
              <Route
                exact
                path="/myinfo/timelogs/:id"
                component={SingleLogComponent}
              />
              <Route
                exact
                path="/myinfo/profile"
                component={ProfileComponent}
              />

              <Route exact path="/admin" component={AdminComponent} />
              <Route exact path="/admin/persons" component={PersonsContainer} />
              <Route
                exact
                path="/admin/persons/:personId"
                component={SinglePersonContainer}
              />

              <Route
                exact
                path="/admin/assignments/:assignmentId"
                component={SingleAssignmentContainer}
              />
              <Route exact path="/admin/clients" component={ClientsContainer} />
              <Route
                exact
                path="/admin/clients/:clientId"
                component={SingleClientContainer}
              />
              <Route
                exact
                path="/admin/projects"
                component={ProjectsContainer}
              />
              <Route
                exact
                path="/admin/projects/:projectId"
                component={SingleProjectContainer}
              />
              <Route
                exact
                path="/admin/holidays"
                component={HolidaysComponent}
              />

              <Route exact path="/about" component={AboutComponent} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
