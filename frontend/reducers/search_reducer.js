import {
  RECEIVE_SEARCH_RESULTS
} from '../actions/search_actions'


const SearchReducer = (state = {}, action) => {

  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_SEARCH_RESULTS:
      return action.payload;
    
      default:
      return state;

  }


}

export default SearchReducer