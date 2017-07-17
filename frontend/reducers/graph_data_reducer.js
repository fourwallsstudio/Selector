import { RECEIEVE_GRAPH_DATA, REMOVE_SHOW_DATA } from '../actions/graph_data_actions';

const graphDataReducer = (store = {}, action) => {

  switch (action.type) {
    
    case RECEIEVE_GRAPH_DATA:
      return action.data

    case REMOVE_SHOW_DATA:
      return {}

    default:
      return store
  }
}

export default graphDataReducer;
