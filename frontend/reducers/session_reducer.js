import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} from "../actions/session_actions";

/* default state at start is no current user */
const _nullSession = {
    currentUserId: null
}

const SessionReducer = (state = _nullSession, action) => {


  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUserId: action.user.id });
    case LOGOUT_CURRENT_USER:
      return { currentUserId: null };
    default: 
      return _nullSession;

  }
}

export default SessionReducer;