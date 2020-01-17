import {
  RECEIVE_REFERENTS,
  RECEIVE_REFERENT,
  REMOVE_REFERENT
} from '../actions/referent_actions';

const ReferentsReducer = (state = {}, action) => {

  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_REFERENTS:
      return Object.assign({}, action.referents);
    case RECEIVE_REFERENT:
      return Object.assign({}, state, { [action.referent.id]: action.referent})
    case REMOVE_REFERENT:
      let newState = Object.assign({}, state)
      delete newState[action.referentId]

      return newState;
    default:
      return state;

  }
}

export default ReferentsReducer;
