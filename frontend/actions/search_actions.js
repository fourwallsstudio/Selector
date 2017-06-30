import { searchUsers } from '../util/user_api_util';
import { searchShows } from '../util/show_util';
import { searchTags } from '../util/tag_util';

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_SHOWS = 'SEARCH_SHOWS';
export const SEARCH_TAGS = 'SEARCH_TAGS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';


export const searchForTags = search => {
  return dispatch => {
    return (
      searchTags(search)
        .then( result => dispatch(receiveTagSearch(result)) )
    )
  }
}


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

export const receiveTagSearch = tags => {
  return {
    type: SEARCH_TAGS,
    tags
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

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}
