import * as APIUtil from '../util/queue_util';

export const CREATE_QUEUE_ITEM = 'CREATE_QUEUE_ITEM';
export const REMOVE_QUEUE_ITEM = 'REMOVE_QUEUE_ITEM';
export const NEXT_QUEUE_ITEM = 'NEXT_QUEUE_ITEM';


export const createQueueItem = queueItem => {
  return dispatch => {
    return APIUtil.createQueueItem(queueItem)
      .then( queueItem => dispatch(makeQueueItem(queueItem)) );
  };
}

export const deleteQueueItem = id => {
  return dispatch => {
    return APIUtil.deleteQueueItem(id)
      .then( queueItem  => {
        dispatch(removeQueueItem(queueItem))
      });
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

export const removeQueueItem = queueItem => {
  return {
    type: REMOVE_QUEUE_ITEM,
    queueItem
  }
}
