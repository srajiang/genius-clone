import {
  RECEIVE_REFERENTS,
  RECEIVE_REFERENT,
  RECEIVE_REFERENT_ERRORS
} from '../actions/referent_actions';

const ReferentsErrorsReducer = (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {
    
    case RECEIVE_REFERENT_ERRORS:
      return action.errors;
    case RECEIVE_REFERENTS:
      return [];
    case RECEIVE_REFERENT:
      return [];
    default: 
      return state;
  }

}

export default ReferentsErrorsReducer;