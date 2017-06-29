import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import showReducer from './show_reducer';
import queueReducer from './queue_reducer';
import playerReducer from './player_reducer';
import commentReducer from './comment_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: userReducer,
  shows: showReducer,
  queue: queueReducer,
  player: playerReducer,
  comments: commentReducer,
  search: searchReducer
})

export default rootReducer;
