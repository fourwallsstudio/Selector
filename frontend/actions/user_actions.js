import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER = 'UPDATE_USER';

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

export const editUser = (id, formData) => {
  return dispatch => {
    return (
      APIUtil.editUser(id, formData)
      .then(user => dispatch(updateUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

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
