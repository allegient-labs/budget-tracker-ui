import { connect } from 'react-redux'
import ProjectsComponent from '../ProjectsComponent'
import {rerouteToSelectedProject, getProjects} from '../../actions'
import {withRouter} from 'react-router-dom'

const mapState = (state) => ({
  selectedProject:state.projects
});

const mapDispatch = (dispatch) => {
  return {
    getProjects(projects){
      dispatch(getProjects(projects))
    },
    rerouteToSelectedProject(project){
      dispatch(rerouteToSelectedProject(project))
    },
  }
}


export default withRouter(connect(mapState, mapDispatch)(ProjectsComponent));