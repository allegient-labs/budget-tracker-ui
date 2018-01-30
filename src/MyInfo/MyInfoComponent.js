import React, { Component } from 'react';
import {API_URL} from '../commonVars'
import axios from 'axios'

class MyInfoComponent extends Component {
  constructor(){
    super()
    this.state={persons:[], projects:[]}

    this.getHTTP=this.getHTTP.bind(this)
  }

  componentDidMount(){
    this.getHTTP('projects')
    this.getHTTP('persons')
  }

  getHTTP(URL_Ext, inObjectIdentifier){
    const inobj = inObjectIdentifier?inObjectIdentifier:URL_Ext

    axios.get(API_URL+'/'+URL_Ext)
    .then((persons)=>{
      console.log(persons)
      this.setState({URL_Ext:persons.data[URL_Ext]})
    })
  }

  handleChange(evt){
    console.log(evt.target)
  }

  render() {
    return (
      <div>
        <p>Select who you are **(Later will be done with auth)</p>
        <select onChange={this.handleChange} className="ui dropdown">
          <option value="" className="default_dropdown">Person</option>
          {this.state.persons.map((person)=>{
           return <option value={person.name}>{person.name}</option>
          })
        }
        </select>

        <div className="about">
          <h2>MyInfoComponent:</h2>
          <h4>The aim of this project is to create a budget tracking web application for use internally and for use as a learning tool for those new to React</h4>
        </div>
      </div>
    );
  }
}

export default MyInfoComponent;