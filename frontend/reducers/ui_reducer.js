import {
  UPDATE_SEARCH_STATE
} from '../actions/ui_actions';

const UIReducer = (state = false, action) => {

  switch(action.type) {

    case UPDATE_SEARCH_STATE:
      return action.isActive;
    default:
      return state;

  }

}

export default UIReducer;