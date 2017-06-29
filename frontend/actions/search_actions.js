import { searchUsers } from '../util/user_api_util';
import { searchShows } from '../util/show_util';

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_SHOWS = 'SEARCH_SHOWS';


export const searchForUsers = search => {
  return dispatch => {
    return (
      searchUsers(search)
        .then( result => dispatch(receiveUserSearch(result)) )
    )
  }
}

export const searchForShows = search => {
  return dispatch => {
    return (
      searchShows(search)
        .then( result => dispatch(receiveShowSearch(result)) )
    )
  }
}

export const receiveUserSearch = users => {
  return {
    type: SEARCH_USERS,
    users
  }
}

export const receiveShowSearch = shows => {
  return {
    type: SEARCH_SHOWS,
    shows
  }
}
