import { CREATE_SHOW, RECEIVE_ERRORS } from '../actions/show_actions';
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
    case RECEIVE_ERRORS:
      return merge({}, state, {
        entities: {},
        currentShow: null,
        errors: action.errors
      });
    default:
      return state;
  }
}

export default showReducer;
