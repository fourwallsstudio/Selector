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
      let newEntities = {}
      action.shows.forEach((show) => { newEntities[show.id] = show } )
      return merge({}, state, {
        entities: newEntities
      });

    case RECEIVE_SHOW:
      return merge({}, state, {
        entities: { [action.show.id]: action.show }
      })

    case REMOVE_SHOW:
      const newState = state;
      delete newState.entities[action.show.id]
      return merge({}, state, { newState });

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
