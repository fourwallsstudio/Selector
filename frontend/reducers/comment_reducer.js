import {
  CREATE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT
} from '../actions/comment_actions';
import { values } from 'lodash';


const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = state;

  switch (action.type) {
    case CREATE_COMMENT:
      newState[action.comment.id] = action.comment
      return newState;

    case RECEIVE_COMMENT:
      updatedState = Object.assign({}, newState);
      updatedState[action.comment.id] = action.comment;
      return updatedState;

    case REMOVE_COMMENT:
      updatedState = Object.assign({}, newState);
      delete updatedState[action.comment.id]
      return updatedState;

    case RECEIVE_COMMENTS:
      let updatedState = {}
      values(action.comments).forEach( comment => {
        updatedState[comment.id] = comment
      })
      return updatedState;
    default:
      return state;
  }
}

export default commentReducer;
