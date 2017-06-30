export const RECEIVE_TAGS = 'RECEIVE_TAGS';

import * as APIUtil from '../util/tag_util';

export const fetchAllTags = () => {
  return dispatch => {
    APIUtil.fetchAllTags()
      .then(tags => dispatch(receiveTags(tags)))
    }
}

export const receiveTags = tags => {
  return {
    type: RECEIVE_TAGS,
    tags
  }
}
