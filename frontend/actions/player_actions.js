export const UPDATE_CURRENT_PLAY = 'UPDATE_CURRENT_PLAY';

export const updateCurrentPlay = (currentPlay, paused) => {
  return {
    type: UPDATE_CURRENT_PLAY,
    currentPlay,
    paused
  }
}
