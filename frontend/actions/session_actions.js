import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const signup = user => {
  return dispatch => {
    return (
      APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const login = user => {
  return dispatch => {
    return (
      APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const logout = () => {
  return dispatch => {
    return (
      APIUtil.logout()
        .then(user => dispatch(receiveCurrentUser(null)))
    )
  }
}

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}
