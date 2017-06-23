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
