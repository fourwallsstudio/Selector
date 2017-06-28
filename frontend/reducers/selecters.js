import { values } from 'lodash';

export const selectUser = ({ users }, userId) => {
  return users[userId];
}

export const selectAllShows = ({ shows }) => {
  return values(shows.entities);
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
