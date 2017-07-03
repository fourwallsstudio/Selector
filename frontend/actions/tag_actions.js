export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const UPDATE_CURRENT_TAG = 'UPDATE_CURRENT_TAG';


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

export const updateCurrentTag = tagId => {
  return {
    type: UPDATE_CURRENT_TAG,
    tagId
  }
}
