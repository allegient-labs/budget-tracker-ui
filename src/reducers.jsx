import { combineReducers } from 'redux'
import {
  SET_SELECTED_USER,
  SET_SELECTED_PROJECT
} from './actions'


function users(
  state = {
    selectedUser:{}
  },
  action
  ) {
  switch (action.type) {
    case SET_SELECTED_USER:
      return action.user
    default:
      return state
  }
}


function projects(
  state = {
    selectedProject:{}
  },
  action
  ) {
  switch (action.type) {
    case SET_SELECTED_PROJECT:
      return action.project
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users,
  projects
})

export default rootReducer