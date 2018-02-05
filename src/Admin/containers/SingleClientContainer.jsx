import { connect } from 'react-redux'
import SingleClientComponent from '../SingleClientComponent'
import {rerouteToSelectedClient, setSelectedClient} from '../../actions'
import {withRouter} from 'react-router-dom'

const mapState = (state) => ({
  selectedClient:state.clients.selectedClient
});

const mapDispatch = (dispatch) => {
  return {
    rerouteToSelectedClient(client){
      dispatch(rerouteToSelectedClient(client))
    },
    setSelectedClient(client){
      dispatch(setSelectedClient(client))
    }
  }
}


export default withRouter(connect(mapState, mapDispatch)(SingleClientComponent));