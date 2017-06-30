import { RECEIVE_TAGS } from '../actions/tag_actions';

const defaultState = {

}

const tagReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TAGS:
      let tags = {}
      action.tags.forEach( tag => tags[tag.id] = tag )
      return tags;
    default:
      return state;
  }
}

export default tagReducer;
