export const CREATE_SHOW = 'CREATE_SHOW';
export const RECEIVE_SHOWS = 'RECEIVE_SHOWS';
export const RECEIVE_SHOW = 'RECEIVE_SHOW';
export const REMOVE_SHOW = 'REMOVE_SHOW';
import * as APIUtil from '../util/show_util';
import { receiveErrors } from './error_actions';


export const uploadShow = show => {
  return dispatch => {
    return (
      APIUtil.uploadShow(show)
        .then(show => dispatch(createShow(show)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const fetchAllShows = filter => {
  return dispatch => {
    return (
      APIUtil.fetchAllShows(filter)
        .then(shows => dispatch(receiveAllShows(shows)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const fetchShowsByTag = (tagId) => {
  return dispatch => {
    return (
      APIUtil.fetchShowsByTag(tagId)
        .then(shows => dispatch(receiveAllShows(shows)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const fetchSingleShow = showId => {
  return dispatch => {
    return (
      APIUtil.fetchSingleShow(showId)
        .then(show => dispatch(receiveSingleShow(show)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const updateShow = (showId, formData) => {
  return dispatch => {
    return (
      APIUtil.updateShow(showId, formData)
        .then(show => dispatch(receiveSingleShow(show)),
          err => dispatch(receiveErrors(err.responseJSON)))
    )
  }
}

export const deleteShow = showId => {
  return dispatch => {
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
