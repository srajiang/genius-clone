import {
  RECEIVE_REFERENTS,
  RECEIVE_REFERENT
} from '../actions/referent_actions';

const ReferentsReducer = (state = {}, action) => {

  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_REFERENTS:
      return Object.assign({}, action.referents);
    case RECEIVE_REFERENT:
      return Object.assign({}, state, { [action.referent.id]: action.referent})
    default:
      return state;

  }
}

export default ReferentsReducer;
