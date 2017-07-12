import { RECEIEVE_GRAPH_DATA } from '../actions/graph_data_actions';

const graphDataReducer = (store = {}, action) => {
  
  switch (action.type) {
    case RECEIEVE_GRAPH_DATA:
      return action.data
    default:
      return store
  }
}

export default graphDataReducer;
