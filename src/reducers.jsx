import { combineReducers } from 'redux'
import {
  SET_SELECTED_USER
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

const rootReducer = combineReducers({
  users
})

export default rootReducer