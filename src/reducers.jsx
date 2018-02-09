import { combineReducers } from "redux";
import {
  SET_SELECTED_USER,
  SET_SELECTED_PROJECT,
  SET_PROJECTS_LIST,
  SET_SELECTED_CLIENT,
  SET_CLIENTS_LIST,
  SET_SELECTED_PROJECT_CLIENT
} from "./actions";

function users(
  state = {
    selectedUser: {}
  },
  action
) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_SELECTED_USER:
      newState.selectedUser = action.user;
      return newState;
    default:
      return newState;
  }
}

function projects(
  state = {
    selectedProject: {},
    selectedProjectClient: {},
    projectsList: []
  },
  action
) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_SELECTED_PROJECT:
      newState.selectedProject = action.project;
      return newState;
    case SET_SELECTED_PROJECT_CLIENT:
      newState.selectedProject = action.project;
      return newState;
    case SET_PROJECTS_LIST:
      newState.projectsList = action.projects;
      return newState;
    default:
      return newState;
  }
}

function clients(
  state = {
    selectedClient: {},
    ClientsList: []
  },
  action
) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_SELECTED_CLIENT:
      newState.selectedClient = action.client;
      return newState;
    case SET_CLIENTS_LIST:
      newState.clientsList = action.clients;
      return newState;
    default:
      return newState;
  }
}

const rootReducer = combineReducers({
  users,
  projects,
  clients
});

export default rootReducer;
