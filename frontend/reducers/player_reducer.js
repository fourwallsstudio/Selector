import {
  UPDATE_CURRENT_PLAY,
  UPDATE_HOWLER_PLAYER,
  UPDATE_PLAY_STATUS
} from '../actions/player_actions';
import { merge } from 'lodash';

const defaultState = {
  player: [],
  status: ""
}

const playerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let paused = action.status ? "paused" : "playing"

  switch (action.type) {
    case UPDATE_HOWLER_PLAYER:
      // let newState = state;
      // let updateState = [action.howlPlay].concat(newState)
      let newState = state;
      let updateState = {
        player: [action.howlPlay].concat(newState.player),
        status: paused
      };
      return merge({}, state, updateState);
    case UPDATE_PLAY_STATUS:
      return merge({}, state, { status: paused });
    default:
      return state;
  }
}

export default playerReducer;
