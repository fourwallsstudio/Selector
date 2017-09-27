import { UPDATE_FILTER } from '../actions/filter_actions';

const filterReducer = (state = "main_feed", action) => {

  switch (action.type) {

    case UPDATE_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default filterReducer;
