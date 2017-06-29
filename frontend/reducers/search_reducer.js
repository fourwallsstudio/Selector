import { SEARCH_USERS } from '../actions/search_actions';
import { SEARCH_SHOWS } from '../actions/search_actions';
import { merge } from 'lodash';

const defaultState = {
  userResults: {},
  showResults: {}
}

const searchReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SEARCH_USERS:
    return merge({}, state, { userResults: action.users })

    case SEARCH_SHOWS:
    return merge({}, state, { showResults: action.shows })

    default:
      return state;
  }
}

export default searchReducer;
