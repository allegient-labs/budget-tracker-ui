import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import AboutComponent from './About/AboutComponent'
import PeopleComponent from './People/PeopleComponent'
import ProjectsComponent from './Projects/ProjectsComponent'
import ClientsComponent from './Clients/ClientsComponent'
import PracticeComponent from './Practice/PracticeComponent'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="App-intro">
            <Route exact path="/" component={AboutComponent}/>
            <Route exact path="/about" component={AboutComponent}/>
            <Route exact path="/people" component={PeopleComponent}/>
            <Route exact path="/projects" component={ProjectsComponent}/>
            <Route exact path="/clients" component={ClientsComponent}/>
            <Route exact path="/practice" component={PracticeComponent}/>            
          </div>      
        </div>
      </Router>
    )
  }
}

export default App;
