import * as APIUtil from '../util/comment_util';
import { fetchSingleShow } from './show_actions';


export const CREATE_COMMENT = 'CREATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';



export const createComment = comment => {
  return dispatch => {
    return APIUtil.createComment(comment)
      .then( comment => {
        dispatch(fetchSingleShow(comment.show.id)) });
  };
}

export const deleteComment = id => {
  return dispatch => {
    return APIUtil.deleteComment(id)
      .then( comment  => {
        dispatch(fetchSingleShow(comment.show.id))
      });
  }
}
