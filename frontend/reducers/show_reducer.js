import {
  CREATE_SHOW,
  RECEIVE_SHOWS,
  RECEIVE_SHOW,
  REMOVE_SHOW,
} from '../actions/show_actions';

const defaultState = {
  entities: {}
};

const showReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = state;

  switch (action.type) {

    case CREATE_SHOW:
      return { ...state, entities: { [action.show.id]: action.show } };

    case RECEIVE_SHOWS: {
      let newEntities = {}
      action.shows.forEach((show) => { newEntities[show.id] = show } )

      return { ...state, entities: newEntities };
    }

    case RECEIVE_SHOW:
    newState.entities[action.show.id] = action.show;
    return { ...newState }

    case REMOVE_SHOW:
      delete newState.entities[action.show.id]
      return newState;

    default:
      return state;
  }
}

export default showReducer;
