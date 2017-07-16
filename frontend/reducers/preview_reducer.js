import {
  CREATE_PREVIEW,
  REMOVE_PREVIEW
} from '../actions/preview_actions';

const defaultState = {
  howlPreview: null,
  status: "off"
}


const previewReducer = (state = defaultState, action) => {

  switch (action.type) {
    
    case CREATE_PREVIEW:
      return {
        howlPreview: action.howlPreview,
        status: "previewing"
      }

    case REMOVE_PREVIEW:
      return defaultState;

    default:
      return state
  }
}

export default previewReducer;
