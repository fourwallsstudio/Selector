import {
  RECEIVE_USER,
  RECEIVE_USERS,
  UPDATE_USER
} from '../actions/user_actions';
import { values } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      let newState = { ...state, [action.user.id]: action.user }
      newState[action.user.id].follower_ids = action.user.follower_ids
      newState[action.user.id].following_ids = action.user.following_ids
      return newState

    case RECEIVE_USERS:
      let updatedState = {}
      action.users.forEach( user => {
        updatedState[user.id] = user
      })
    return { ...state, ...updatedState }

    case UPDATE_USER:
    return { ...state, [action.user.id]: action.user }

    default:
      return state;
  }
}

export default userReducer;
