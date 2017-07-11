import * as APIUtil from '../util/following_util';
import { fetchUser } from './user_actions';

export const createFollowing = following => {
  return dispatch => {
    return APIUtil.createFollowing(following)
      .then(following => {
        dispatch(fetchUser(following.following_id));
        dispatch(fetchUser(following.follower_id))
      })
  }
}

export const deleteFollowing = following => {
  return dispatch => {
    return APIUtil.deleteFollowing(following)
      .then(following => {
        dispatch(fetchUser(following.following_id));
        dispatch(fetchUser(following.follower_id))
      })
  }
}
