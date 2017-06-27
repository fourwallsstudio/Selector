import * as APIUtil from '../util/comment_util';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';



export const createComment = comment => {
  return dispatch => {
    return APIUtil.createComment(comment)
      // .then( comment => dispatch(makeComment(comment)) );
  };
}

export const deleteComment = id => {
  return dispatch => {
    return APIUtil.deleteComment(id)
      // .then( comment  => {
      //   dispatch(removeComment(comment))
      // });
  }
}


export const makeComment = comment => {
  return {
    type: CREATE_COMMENT,
    comment
  }
}

export const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment
  }
}
