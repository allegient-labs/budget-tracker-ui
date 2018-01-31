import axios from 'axios'
import history from './history'

export const SET_SELECTED_USER = 'SET_SELECTED_USER'
export const SET_SELECTED_PROJECT = 'SET_SELECTED_PROJECT'

export function setSelectedUser(user){
  return {
    type: SET_SELECTED_USER,
    user
  }
}

export function rerouteToSelectedUser(user){
  return (dispatch, getState) => {
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

// function shouldFetchPosts(state, subreddit) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }

// export function fetchPostsIfNeeded(subreddit) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }