import { UPDATE_FILTER } from '../actions/filter_actions';

const filterReducer = (state = "most_recent", action) => {

  switch (action.type) {

    case UPDATE_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default filterReducer;
