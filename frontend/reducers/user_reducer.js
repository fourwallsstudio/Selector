import {
  RECEIVE_USER,
  RECEIVE_USERS,
  UPDATE_USER
} from '../actions/user_actions';
import { merge, values } from 'lodash';



const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user })

    case RECEIVE_USERS:
      let updatedState = {}
      action.users.forEach( user => {
        updatedState[user.id] = user
      })
    return updatedState;

    case UPDATE_USER:
    return merge({}, state, { [action.user.id]: action.user })

    default:
      return state;
  }
}

export default userReducer;
