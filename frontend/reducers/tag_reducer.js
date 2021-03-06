import {
  RECEIVE_TAGS,
  UPDATE_CURRENT_TAG
} from '../actions/tag_actions';

const defaultState = {
  entities: {},
  currentTag: null
}

const tagReducer = (state = {}, action) => {
  switch (action.type) {

    case RECEIVE_TAGS:
      let tags = {}
      action.tags.forEach( tag => tags[tag.id] = tag )
      return { ...state, entities: tags }

    case UPDATE_CURRENT_TAG:
      return { ...state, currentTag: action.tagId }

    default:
      return state;
  }
}

export default tagReducer;
