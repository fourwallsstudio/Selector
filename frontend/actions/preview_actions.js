import { previewPlayer } from '../util/preview_util';

export const CREATE_PREVIEW = 'CREATE_PREVIEW';
export const REMOVE_PREVIEW = 'REMOVE_PREVIEW';


export const startPreview = src => {
  return dispatch => {
    const howlPreview = previewPlayer(src);
    dispatch(createPreview(howlPreview));
  }
}

export const stopPreview = howl => {
  return dispatch => {
    if (howl) { howl.stop() }
    dispatch(removePreview());
  }
}

export const createPreview = howlPreview => {
  return {
    type: CREATE_PREVIEW,
    howlPreview
  }
}

export const removePreview = () => {
  return {
    type: REMOVE_PREVIEW
  }
}
