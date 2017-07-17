import {
  ADD_HOWLER_PLAY,
  UPDATE_CURRENT_PLAY,
  UPDATE_HOWLER_PLAYER,
  UPDATE_PLAY_STATUS,
  REMOVE_HOWLER_PLAY,
  LOADING_HOWLER,
  RESTORED_PLAY_POSITION
} from '../actions/player_actions';
import { merge } from 'lodash';

const defaultState = {
  playerQueue: [],
  status: "",
  loading: false,
  restoredPlayPosition: false
}

const playerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let updatedState;
  let paused = action.status ? "paused" : "playing"

  switch (action.type) {

    case ADD_HOWLER_PLAY:
    newState = state;
    updatedState = {
      playerQueue: [action.howlPlay].concat(newState.playerQueue),
      status: "playing",
      loading: false
    };
    return merge({}, state, updatedState);

    case UPDATE_HOWLER_PLAYER:
      newState = state;
      updatedState = {
        playerQueue: [action.howlPlay],
        status: paused
      };
      return merge({}, state, updatedState);

    case UPDATE_PLAY_STATUS:
      return merge({}, state, { status: paused });

    case REMOVE_HOWLER_PLAY:
      newState = state;
      updatedState = {
        playerQueue: newState.playerQueue.slice(1),
        status: action.status
      };
      return updatedState;

    case LOADING_HOWLER:
      return merge({}, state, { loading: action.loadStatus });

    case RESTORED_PLAY_POSITION:
      return merge({}, state, { restoredPlayPosition: action.status });

    default:
      return state;
  }
}

export default playerReducer;
