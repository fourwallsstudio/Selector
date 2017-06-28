import {
  CREATE_SHOW,
  RECEIVE_SHOWS,
  RECEIVE_SHOW,
  REMOVE_SHOW,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/show_actions';
import { merge } from 'lodash';

const defaultState = {
  entities: {},
  errors: []
};

const showReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = state;

  switch (action.type) {

    case CREATE_SHOW:
      return merge({}, state, {
        entities: { [action.show.id]: action.show },
        errors: []
      });

    case RECEIVE_SHOWS:
      let newEntities = {}
      action.shows.forEach((show) => { newEntities[show.id] = show } )
      return merge({}, {
        entities: newEntities
      });

    case RECEIVE_SHOW:
    newState.entities[action.show.id] = action.show;
    debugger
    return merge({}, newState)

    case REMOVE_SHOW:
      delete newState.entities[action.show.id]
      return newState;

    case RECEIVE_ERRORS:
      return merge({}, state, {
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
