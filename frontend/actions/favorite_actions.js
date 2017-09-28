import * as APIUtil from '../util/favorite_util';
import { fetchUser } from './user_actions';
import { fetchSingleShow } from './show_actions';


export const createFavorite = (favorite) => {
  return (dispatch) => {
    APIUtil.createFavorite(favorite)
      .then( favorite => {
        dispatch(fetchUser(favorite.user_id));
        dispatch(fetchSingleShow(favorite.show_id));
      })
  }
}

export const deleteFavorite = (favorite) => {
  return (dispatch) => {
    APIUtil.deleteFavorite(favorite)
      .then( favorite => {
        dispatch(fetchUser(favorite.user_id));
        dispatch(fetchSingleShow(favorite.show_id));
      })
  }
}
