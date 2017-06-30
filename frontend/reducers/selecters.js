import { values } from 'lodash';

export const selectUser = ({ users }, userId) => {
  return users[userId];
}

export const selectAllShows = ({ shows }) => {
  let ordered = values(shows.entities).sort((a,b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  });
  return ordered;
}

export const selectFilteredShows = (state, filter) => {

  if (filter === "most_recent") {
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
  let ordered = values(shows.entities).sort((a,b) => {
    return b.plays - a.plays
  });

  return ordered;
}



export const selectShow = ({ shows }, showId) => {
  return shows.entities[showId];
}


export const selectPlayerQueue = (shows, queue) => {
  let playerQueue = []
  let keys = Object.keys(shows);
  keys.length && queue.forEach( (queueItem) => {
    if (keys.includes(queueItem.show_id.toString())) {
      playerQueue.push({
        show: shows[queueItem.show_id],
        seek: queueItem.seek,
      })
    }
  })

  return playerQueue;
}

export const selectListeners = ({ users }, ids) => {
  let listeners = [];

  ids.length && ids.forEach( (id) => {
      listeners.push(users[id]);
    });

  return listeners;
}

export const selectComments = ({ comments }, ids) => {
  let allComments = {};

  ids.forEach( id => {
    allComments[id] = comments[id]
  })

  return allComments;
}
