import React from 'react'
import { connect } from 'react-redux'
import AdminManageUsersComponent from './AdminManageUsersComponent'
import {rerouteToSelectedUser} from '../actions'
import {withRouter} from 'react-router-dom'

const mapState = (state) => ({
  selectedUser:state.selectedUser
});

const mapDispatch = (dispatch) => {
  return {
    rerouteToSelectedUser(user){
      dispatch(rerouteToSelectedUser(user))
    }
  }
}


export default withRouter(connect(mapState, mapDispatch)(AdminManageUsersComponent));