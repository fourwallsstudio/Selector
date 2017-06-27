import {
  CREATE_COMMENT,
  REMOVE_COMMENT
} from '../comments/comments';

const commentReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = state;
  let updatedState;

  switch (action.type) {
    case CREATE_COMMENT:
      updatedState = newState.concat([action.comment]);
      return updatedState;
    case REMOVE_COMMENT:
      let i = newState.indexOf(action.comment);
      updatedState = newState.splice(i,1);
      return updatedState;
    default:
      return state;
  }
}

export default commentReducer;
