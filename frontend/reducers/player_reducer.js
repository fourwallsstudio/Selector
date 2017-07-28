import {
  ADD_HOWLER_PLAY,
  UPDATE_CURRENT_PLAY,
  UPDATE_HOWLER_PLAYER,
  UPDATE_PLAY_STATUS,
  REMOVE_HOWLER_PLAY,
  LOADING_HOWLER,
  RESTORED_PLAY_POSITION,
  CHANGE_PLAYER_ORDER
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
  let newPlayerQueue = Object.assign([], state.playerQueue);

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

    case REMOVE_HOWLER_PLAY: {
      let newStatus = action.status;

      if (state.playerQueue.length > 1) {
        state.playerQueue[1].show.play();
        newStatus = "playing";
      }
      let removedPlay = newPlayerQueue[0];
      removedPlay.show._onend = [];

      newPlayerQueue = newPlayerQueue.slice(1);

      newState = {
        playerQueue: newPlayerQueue,
        status: newStatus,
        loading: state.loading,
        restoredPlayPosition: state.restoredPlayPosition
      };
      return newState;
    }

    case LOADING_HOWLER:
      return merge({}, state, { loading: action.loadStatus });

    case RESTORED_PLAY_POSITION:
      return merge({}, state, { restoredPlayPosition: action.status });

    case CHANGE_PLAYER_ORDER: {
      let newFirstPos = newPlayerQueue[action.idx]
      newPlayerQueue.splice(action.idx, 1);
      newPlayerQueue.unshift(newFirstPos);
      return merge({}, state, { status: "playing", playerQueue: newPlayerQueue })
    }

    default:
      return state;
  }
}

export default playerReducer;
