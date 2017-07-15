import * as APIUtil from '../util/queue_util';

export const QUEUE_DISABLED = 'QUEUE_DISABLED';
export const CREATE_QUEUE_ITEM = 'CREATE_QUEUE_ITEM';
export const REMOVE_QUEUE_ITEM = 'REMOVE_QUEUE_ITEM';
export const NEXT_QUEUE_ITEM = 'NEXT_QUEUE_ITEM';
export const UPDATE_QUEUE_ITEM = 'UPDATE_QUEUE_ITEM';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const createQueueItem = queueItem => {
  return dispatch => {
    dispatch(queueDisabled(true));
    return APIUtil.createQueueItem(queueItem)
      .then( queueItem => dispatch(makeQueueItem(queueItem)),
      err => dispatch({ type: RECEIVE_ERRORS }) );
  };
}

export const updateQueueItem = queueItem => {
  return dispatch => {
    return APIUtil.updateQueueItem(queueItem)
      .then( queueItem => dispatch(receiveQueueItem(queueItem)))
  }
}

export const deleteQueueItem = id => {
  return dispatch => {
    return APIUtil.deleteQueueItem(id)
      .then( ()  => {
        dispatch(removeQueueItem())
      });
  }
}

export const queueDisabled = status => {
  return {
    type: QUEUE_DISABLED,
    status
  }
}

export const nextQueueItem = () => {
  return {
    type: NEXT_QUEUE_ITEM
  }
}

export const makeQueueItem = queueItem => {
  return {
    type: CREATE_QUEUE_ITEM,
    queueItem
  }
}

export const receiveQueueItem = queueItem => {
  return {
    type: UPDATE_QUEUE_ITEM,
    queueItem
  }
}

export const removeQueueItem = () => {
  return {
    type: REMOVE_QUEUE_ITEM
  }
}
