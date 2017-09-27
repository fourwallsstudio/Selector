import * as APIUtil from '../util/comment_util';
import { fetchSingleShow } from './show_actions';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';



export const createComment = comment => {
  return dispatch => {
    return APIUtil.createComment(comment)
      .then( comment => {
        dispatch(receiveComment(comment)) });
  };
}

export const deleteComment = id => {
  return dispatch => {
    return APIUtil.deleteComment(id)
      .then( comment => {
        dispatch(removeComment(comment))
      })
  }
}

export const fetchComments = showId => {
  return dispatch => {
    return APIUtil.fetchComments(showId)
      .then( comments => {
        dispatch(receiveComments(comments))
      });
  }
}

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment
  }
}
