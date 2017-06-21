import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER = 'UPDATE_USER';


export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    user
  }
}


export const fetchUser = id => {
  
  return dispatch => {
    return (
      APIUtil.fetchUser(id)
      .then(user => dispatch(receiveUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const fetchUsers = users => {
  return dispatch => {
    return (
      APIUtil.fetchUsers(users)
        .then(users => dispatch(receiveUsers(users)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const editUser = user => {
  return dispatch => {
    return (
      APIUtil.editUser(user)
        .then(users => dispatch(updateUser(user)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}
