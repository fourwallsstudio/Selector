import {
  UPDATE_CURRENT_PLAY,
  UPDATE_HOWLER_PLAYER,
  UPDATE_PLAY_STATUS,
  REMOVE_HOWLER_PLAY
} from '../actions/player_actions';
import { merge } from 'lodash';

const defaultState = {
  player: [],
  status: ""
}

const playerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let updatedState;
  let paused = action.status ? "paused" : "playing"

  switch (action.type) {
    case UPDATE_HOWLER_PLAYER:
      newState = state;
      updatedState = {
        player: [action.howlPlay].concat(newState.player),
        status: paused
      };
      return merge({}, state, updatedState);

    case UPDATE_PLAY_STATUS:
      return merge({}, state, { status: paused });

    case REMOVE_HOWLER_PLAY:
      newState = state;
      updatedState = {
        player: newState.player.slice(1),
        status: "paused"
      };
      return updatedState;

    default:
      return state;
  }
}

export default playerReducer;
