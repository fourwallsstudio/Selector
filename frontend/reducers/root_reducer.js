import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: userReducer
})

export default rootReducer;
