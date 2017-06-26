import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import showReducer from './show_reducer';
import queueReducer from './queue_reducer';
import playerReducer from './player_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: userReducer,
  shows: showReducer,
  queue: queueReducer,
  player: playerReducer
})

export default rootReducer;
