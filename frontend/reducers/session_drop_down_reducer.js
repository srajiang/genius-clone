import { UPDATE_SESSION_MENU_STATE } from "../actions/ui_actions";

const SessionMenuStateReducer = (state = false, action) => {
  switch (action.type) {
    case UPDATE_SESSION_MENU_STATE:
      return action.isActive;
    default:
      return state;
  }
};

export default SessionMenuStateReducer;
