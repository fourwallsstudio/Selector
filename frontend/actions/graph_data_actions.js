import * as APIUtil from '../util/graph_data_util';

export const RECEIEVE_GRAPH_DATA = 'RECEIEVE_GRAPH_DATA';
export const REMOVE_SHOW_DATA = 'REMOVE_SHOW_DATA';


export const fetchShowData = showId => {
  return dispatch => {
    APIUtil.fetchShowData(showId)
      .then( data => {
        return dispatch(receiveShowData(data))
      })
  }
}

export const receiveShowData = data => {
  return {
    type: RECEIEVE_GRAPH_DATA,
    data
  }
}

export const removeShowData = () => {
  return {
    type: REMOVE_SHOW_DATA
  }
}
