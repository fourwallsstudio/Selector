import {
  CREATE_QUEUE_ITEM,
  REMOVE_QUEUE_ITEM
} from '../actions/queue_actions';

const queueReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = state;
  let updatedState;

  switch (action.type) {
    case CREATE_QUEUE_ITEM:
      updatedState = [action.queueItem].concat(newState);
      return updatedState;
    case REMOVE_QUEUE_ITEM:
      updatedState = newState.slice(0, -1);
      return updatedState;
    default:
      return state;
  }
}

export default queueReducer;
