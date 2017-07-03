import {
  CREATE_QUEUE_ITEM,
  REMOVE_QUEUE_ITEM,
  NEXT_QUEUE_ITEM,
  UPDATE_QUEUE_ITEM
} from '../actions/queue_actions';
import { merge } from 'lodash';

const queueReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = state;
  let updatedState;

  switch (action.type) {

    case CREATE_QUEUE_ITEM:
      updatedState = [action.queueItem].concat(newState);
      return updatedState;

    case REMOVE_QUEUE_ITEM:
      updatedState = newState.slice(1);
      return updatedState;

    case NEXT_QUEUE_ITEM:
      updatedState = newState.slice(1);
      return updatedState;

    case UPDATE_QUEUE_ITEM:
      updatedState = Object.assign([], newState)
      updatedState[0] = action.queueItem;
      return updatedState;

    default:
      return state;
  }
}

export default queueReducer;
