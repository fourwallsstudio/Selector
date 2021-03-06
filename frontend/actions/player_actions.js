import { howlerPlayer } from '../util/player_util';
import { createQueueItem, updateQueueItem } from './queue_actions';

export const ADD_HOWLER_PLAY = 'ADD_HOWLER_PLAY';
export const UPDATE_HOWLER_PLAYER = 'UPDATE_HOWLER_PLAYER';
export const UPDATE_PLAY_STATUS = 'UPDATE_PLAY_STATUS';
export const REMOVE_HOWLER_PLAY = 'REMOVE_HOWLER_PLAY';
export const LOADING_HOWLER = 'LOADING_HOWLER';
export const RESTORED_PLAY_POSITION = 'RESTORED_PLAY_POSITION';
export const CHANGE_PLAYER_ORDER = 'CHANGE_PLAYER_ORDER';
export const REMOVE_PLAY_AT_INDEX = 'REMOVE_PLAY_AT_INDEX';


export const createNewPlay = (show, currentUser) => {
  return dispatch => {
    dispatch(loadingHowler(true));

    let seek = currentUser.play_history[show.id]
      ? currentUser.play_history[show.id].seek : 0

    const queueItem = {
      show_id: show.id,
      user_id: currentUser.id,
      seek: seek
    }

    const howlPlay = howlerPlayer(show);

    // check if src loaded
    // TODO: refactor into checkIfLoaded util
    const howlPromise = new Promise((resolve, reject) => {
      if (howlPlay.show._state === 'loaded') {
        return resolve([howlPlay, queueItem]);
      }

      howlPlay.show.on("load", () => {
        return resolve([howlPlay, queueItem]);
      })

      howlPlay.show.on("loaderror", (id, err) => {
        return reject(id, err);
      })
    })

    howlPromise.then(result => {
      let newShow = result[0];
      let queueParams = result[1];

      if (queueParams.seek !== 0) dispatch(restoredPlayPosition(true));

      newShow.show.play();
      newShow.show.seek(queueParams.seek);

      dispatch(addHowlerPlay(newShow));
      dispatch(createQueueItem(queueParams))
    })
      .catch( () => dispatch(loadingHowler(false)) )
  }
}





export const changePlayerOrder = (queue, idx) => {
  queue[0].show.pause();
  queue[idx].show.play();

  return {
    type: CHANGE_PLAYER_ORDER,
    idx
  }
}

export const removePlayAtIndex = (idx) => {
  return {
    type: REMOVE_PLAY_AT_INDEX,
    idx
  }
}

export const addHowlerPlay = howlPlay => {
  return {
    type: ADD_HOWLER_PLAY,
    howlPlay
  }
}

export const updateHowlerPlayer = howlPlay => {
  return {
    type: UPDATE_HOWLER_PLAYER,
    howlPlay
  }
}

export const updatePlayStatus = status => {
  return {
    type: UPDATE_PLAY_STATUS,
    status
  }
}

export const removeHowlerPlay = () => {
  return {
    type: REMOVE_HOWLER_PLAY,
    status: 'paused'
  }
}

export const loadingHowler = loadStatus => {
  return {
    type: LOADING_HOWLER,
    loadStatus
  }
}

export const restoredPlayPosition = status => {
  return {
    type: RESTORED_PLAY_POSITION,
    status
  }
}
