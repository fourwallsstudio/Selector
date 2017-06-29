import { merge } from 'lodash';
import {
  SEARCH_USERS,
  SEARCH_SHOWS,
  CLEAR_SEARCH
} from '../actions/search_actions';


const defaultState = {
  userResults: {},
  showResults: {},
}

const searchReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SEARCH_USERS:
    return merge({}, state, { userResults: action.users })

    case SEARCH_SHOWS:
    return merge({}, state, { showResults: action.shows })

    case CLEAR_SEARCH:
    return defaultState;

    default:
      return state;
  }
}

export default searchReducer;
