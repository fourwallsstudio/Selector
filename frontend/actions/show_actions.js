export const CREATE_SHOW = 'CREATE_SHOW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/show_util';

export const makeShow = show => {
  return dispatch => {
    return (
      APIUtil.makeShow(show)
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
