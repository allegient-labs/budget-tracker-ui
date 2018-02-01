import React from 'react'
import { connect } from 'react-redux'
import SingleUserComponent from '../SingleUserComponent'
import {setSelectedUser} from '../../actions'
import {withRouter} from 'react-router-dom'

const mapState = (state) => ({
  selectedUser:state.users
});

const mapDispatch = (dispatch) => {
  return {
    setSelectedUser(user){
      dispatch(setSelectedUser(user))
    }
  }
}


export default withRouter(connect(mapState, mapDispatch)(SingleUserComponent));