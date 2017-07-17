import {
  QUEUE_DISABLED,
  CREATE_QUEUE_ITEM,
  REMOVE_QUEUE_ITEM,
  NEXT_QUEUE_ITEM,
  UPDATE_QUEUE_ITEM,
  RECEIVE_ERRORS
} from '../actions/queue_actions';
import { merge } from 'lodash';

const defaultState = {
  queue: []
}

const queueReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = state;
  let updatedQueue;

  switch (action.type) {

    case QUEUE_DISABLED:
      return merge({}, state, { queueDisabled: action.status });

    case CREATE_QUEUE_ITEM:
      updatedQueue = [action.queueItem].concat(newState["queue"]);
      return merge({}, state, { queue: updatedQueue });

    case REMOVE_QUEUE_ITEM:
      newState.queue.splice(action.idx, 1);
      updatedQueue = newState;
      return { queue: updatedQueue }

    case NEXT_QUEUE_ITEM:
      updatedQueue = newState.queue.slice(1);
      return { queue: updatedQueue }

    case UPDATE_QUEUE_ITEM:
      updatedQueue = Object.assign([], newState.queue)
      updatedQueue[0] = action.queueItem;
      return { queue: updatedQueue }

    case RECEIVE_ERRORS:
      return merge({}, state, { queueDisabled: false });

    default:
      return state;
  }
}

export default queueReducer;
