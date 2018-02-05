import { connect } from 'react-redux'
import SingleProjectComponent from '../SingleProjectComponent'
import {rerouteToSelectedProject} from '../../actions'
import {withRouter} from 'react-router-dom'

const mapState = (state) => ({
  selectedProject:state.projects.selectedProject
});

const mapDispatch = (dispatch) => {
  return {
    rerouteToSelectedProject(project){
      dispatch(rerouteToSelectedProject(project))
    }
  }
}


export default withRouter(connect(mapState, mapDispatch)(SingleProjectComponent));