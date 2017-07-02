export const UPDATE_HOWLER_PLAYER = 'UPDATE_HOWLER_PLAYER';
export const UPDATE_PLAY_STATUS = 'UPDATE_PLAY_STATUS';
export const REMOVE_HOWLER_PLAY = 'REMOVE_HOWLER_PLAY';

export const updateHowlerPlayer = (howlPlay) => {
  return {
    type: UPDATE_HOWLER_PLAYER,
    howlPlay
  }
}

export const updatePlayStatus = (status) => {
  return {
    type: UPDATE_PLAY_STATUS,
    status
  }
}

export const removeHowlerPlay = () => {
  return {
    type: REMOVE_HOWLER_PLAY
  }
}
