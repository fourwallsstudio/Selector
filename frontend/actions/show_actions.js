export const CREATE_SHOW = 'CREATE_SHOW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
import * as APIUtil from '../util/show_util';

export const uploadShow = show => {
  return dispatch => {
    return (
      APIUtil.uploadShow(show)
        .then(show => dispatch(createShow(show)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const createShow = show => {
  return {
    type: CREATE_SHOW,
    show
  }
}

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const clearErrors = errors => {
  return {
    type: CLEAR_ERRORS
  }
}
