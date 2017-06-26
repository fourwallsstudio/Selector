import { UPDATE_CURRENT_PLAY } from '../actions/player_actions';
import { merge } from 'lodash';


const defaultState = {
  currentPlay: null,
  paused: true
}


const playerReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_CURRENT_PLAY:
      return merge({}, state, {
        currentPlay: action.currentPlay,
        paused: action.paused
      });
    default:
      return state;
  }
}

export default playerReducer;
