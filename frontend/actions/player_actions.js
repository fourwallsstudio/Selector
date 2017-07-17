import { howlerPlayer } from '../util/player_util';

export const ADD_HOWLER_PLAY = 'ADD_HOWLER_PLAY';
export const UPDATE_HOWLER_PLAYER = 'UPDATE_HOWLER_PLAYER';
export const UPDATE_PLAY_STATUS = 'UPDATE_PLAY_STATUS';
export const REMOVE_HOWLER_PLAY = 'REMOVE_HOWLER_PLAY';
export const LOADING_HOWLER = 'LOADING_HOWLER';


export const createNewPlay = show => {
  return dispatch => {
    dispatch(loadingHowler(true));

    const howlPlay = howlerPlayer(show);

    // check if src loaded, refactor into checkIfLoaded util
    const howlPromise = new Promise((resolve, reject) => {
      if (howlPlay.show._state === 'loaded') {
        return resolve(howlPlay);
      }

      howlPlay.show.on("load", () => {
        return resolve(howlPlay);
      })

      howlPlay.show.on("loaderror", (id, err) => {
        console.log(err);
        return reject(id, err);
      })
    })

    howlPromise.then(result => {
      result.show.play();
      dispatch(addHowlerPlay(result));
    }).catch(() => {
      dispatch(loadingHowler(false))
    })
  }
}



export const removeHowlerPlay = queue => {
  return dispatch => {
    let status = "paused";
    if (queue.length > 1) {
      queue[1].show.play();
      status = "playing";
    }
    dispatch(removeHowlerPlayFromQueue(status))
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

export const removeHowlerPlayFromQueue = status => {
  return {
    type: REMOVE_HOWLER_PLAY,
    status
  }
}

export const loadingHowler = loadStatus => {
  return {
    type: LOADING_HOWLER,
    loadStatus
  }
}
