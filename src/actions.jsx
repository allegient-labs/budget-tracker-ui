import axios from 'axios'
import history from './history'
import {API_URL} from './commonVars'

export const SET_SELECTED_USER = 'SET_SELECTED_USER'
export const SET_SELECTED_PROJECT = 'SET_SELECTED_PROJECT'
export const SET_PROJECTS_LIST = 'SET_PROJECTS_LIST'
export const SET_SELECTED_CLIENT = 'SET_SELECTED_CLIENT'
export const SET_CLIENTS_LIST = 'SET_CLIENTS_LIST'
export const SET_SELECTED_PROJECT_CLIENT = 'SET_SELECTED_PROJECT_CLIENT'

export function setSelectedUser(user){
  return {
    type: SET_SELECTED_USER,
    user
  }
}

export function rerouteToSelectedUser(user){
  return (dispatch, getState) => {
    console.log(user)
    dispatch(setSelectedUser(user))
    history.push('/admin/users/singleuser')
  }
}


export function setSelectedProject(project){
  return {
    type: SET_SELECTED_PROJECT,
    project
  }
}

export function rerouteToSelectedProject(project){
  return (dispatch, getState) => {
    dispatch(setSelectedProject(project))
    history.push('/admin/projects/singleproject')
  }
}

export function setProjectsList(projects){
  return {
    type: SET_PROJECTS_LIST,
    projects
  }
}

export function getProjects(){
  return (dispatch, getState) => {
    axios.get(API_URL+'/projects')
    .then((projects)=>{
      console.log(projects.data._embedded.project)
      dispatch(setProjectsList(projects.data._embedded.project))
    })
  }
}


export function setSelectedClient(client){
  return {
    type: SET_SELECTED_CLIENT,
    client
  }
}

export function rerouteToSelectedClient(client){
  return (dispatch, getState) => {
    dispatch(setSelectedClient(client))
    history.push('/admin/clients/singleclient')
  }
}

export function setClientsList(clients){
  return {
    type: SET_CLIENTS_LIST,
    clients
  }
}

export function getClients(){
  return (dispatch, getState) => {
    axios.get(API_URL+'/clients')
    .then((clients)=>{
      console.log(clients.data._embedded.client)
      dispatch(setClientsList(clients.data._embedded.client))
    })
  }
}


