export const CREATE_SHOW = 'CREATE_SHOW';
export const RECEIVE_SHOWS = 'RECEIVE_SHOWS';
export const RECEIVE_SHOW = 'RECEIVE_SHOW';
export const REMOVE_SHOW = 'REMOVE_SHOW';
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

export const fetchAllShows = () => {
  return dipatch => {
    return (
      APIUtil.fetchAllShows()
        .then(shows => dispatch(receiveAllShows(shows)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const fetchSingleShow = showId => {
  return dipatch => {
    return (
      APIUtil.fetchSingleShow(showId)
        .then(show => dispatch(receiveSingleShow(show)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const deleteShow = showId => {
  return dipatch => {
    return (
      APIUtil.deleteShow(showId)
        .then(show => dispatch(removeShow(show)),
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

export const receiveAllShows = shows => {
  return {
    type: RECEIVE_SHOWS,
    shows
  }
}

export const receiveSingleShow = show => {
  return {
    type: RECEIVE_SHOW,
    show
  }
}

export const removeShow = show => {
  return {
    type: REMOVE_SHOW,
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
