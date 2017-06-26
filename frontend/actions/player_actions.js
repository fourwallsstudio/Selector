export const UPDATE_CURRENT_PLAY = 'UPDATE_CURRENT_PLAY';
export const UPDATE_HOWLER_PLAYER = 'UPDATE_HOWLER_PLAYER';
export const UPDATE_PLAY_STATUS = 'UPDATE_PLAY_STATUS';

export const updateCurrentPlay = (currentPlay, paused) => {
  return {
    type: UPDATE_CURRENT_PLAY,
    currentPlay,
    paused
  }
}

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
