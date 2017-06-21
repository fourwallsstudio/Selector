import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import showReducer from './show_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: userReducer,
  shows: showReducer
})

export default rootReducer;
