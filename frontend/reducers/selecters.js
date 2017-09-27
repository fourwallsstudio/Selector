import { createSelector } from 'reselect';
import { values } from 'lodash';

export const selectUser = ({ users }, userId) => {
  return users[userId];
}

const getUsers = state => state.users
const getUserId = (state, props) => parseInt(props.match.params.userId)

export const selectFollowings = createSelector(
  [ getUsers, getUserId ],
  (users, userId) => {
    if (users[userId]) {
      return users[userId].following_ids.filter( id => users[id] ).map(id => users[id])
    } else {
      return []
    }
  }
)


const getShows = state => state.shows

export const selectAllShows = createSelector(
  getShows,
  shows => {
    return values(shows.entities).sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
  }
)


export const selectFilteredShows = (state, props) => {
  const filter = props.filter

  if (filter === "main_feed"
    || filter === "most_recent") {

    return selectAllShows(state);

  } else if (filter === 'trending') {

    return trendingFilter(state);

  } else {
    let userShows = state.users[parseInt(filter)].show_ids;
    let filteredShows = [];

    userShows.forEach( id => {
      if (Object.keys(state.shows.entities).includes(id.toString())) {
        filteredShows.push(state.shows.entities[id]);
      }
    })

    let ordered = filteredShows.sort((a,b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    });

    return ordered;
  }
}



const trendingFilter = ({ shows }) => {
  let ordered = values(shows.entities).sort((a,b) => b.plays - a.plays);

  return ordered;
}


export const selectShowsByTag = state => {
  const tagId = state.tags.currentTag
  let filteredShows = [];

  let tagShows = state.tags.entities[tagId].show_ids;
  tagShows.forEach( id => {
    if(Object.keys(state.shows.entities).includes(id.toString())) {
      filteredShows.push(state.shows.entities[id]);
    }
  })

  let ordered = filteredShows.sort((a,b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  });

  return ordered;
}



export const selectShow = ({ shows }, showId) => {
  return shows.entities[showId];
}
