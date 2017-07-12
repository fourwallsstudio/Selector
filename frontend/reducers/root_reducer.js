import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import showReducer from './show_reducer';
import queueReducer from './queue_reducer';
import playerReducer from './player_reducer';
import commentReducer from './comment_reducer';
import searchReducer from './search_reducer';
import previewReducer from './preview_reducer';
import filterReducer from './filter_reducer';
import tagReducer from './tag_reducer';
import errorReducer from './error_reducer';
import graphDataReducer from './graph_data_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  users: userReducer,
  shows: showReducer,
  queue: queueReducer,
  player: playerReducer,
  comments: commentReducer,
  search: searchReducer,
  preview: previewReducer,
  filter: filterReducer,
  tags: tagReducer,
  graphData: graphDataReducer
})

export default rootReducer;
