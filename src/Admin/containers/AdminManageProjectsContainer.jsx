import React from 'react'
import { connect } from 'react-redux'
import AdminManageProjectsComponent from '../AdminManageProjectsComponent'
import {rerouteToSelectedProject} from '../../actions'
import {withRouter} from 'react-router-dom'

const mapState = (state) => ({
  selectedProject:state.projects
});

const mapDispatch = (dispatch) => {
  return {
    rerouteToSelectedProject(project){
      dispatch(rerouteToSelectedProject(project))
    }
  }
}


export default withRouter(connect(mapState, mapDispatch)(AdminManageProjectsComponent));