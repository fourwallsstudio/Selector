import {
  CREATE_SHOW,
  RECEIVE_SHOWS,
  RECEIVE_SHOW,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/show_actions';
import { merge } from 'lodash';

const defaultState = {
  entities: {},
  currentShow: null,
  errors: []
};

const showReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CREATE_SHOW:
      return merge({}, state, {
        entities: { [action.show.id]: action.show },
        currentShow: action.show.id,
        errors: []
      });
    case RECEIVE_SHOWS:
      return merge({}, state, {
        entities: action.shows
      });
    case RECEIVE_ERRORS:
      return merge({}, state, {
        currentShow: null,
        errors: action.errors
      });
    case CLEAR_ERRORS:
      return merge({}, state, {
        errors: []
      });
    default:
      return state;
  }
}

export default showReducer;
