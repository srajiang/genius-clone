import { combineReducers } from "redux";

import SearchStateReducer from './search_state_reducer';
import SessionMenuStateReducer from './session_drop_down_reducer';

const UIReducer = combineReducers({
  searchState: SearchStateReducer,
  sessionMenuState: SessionMenuStateReducer
});

export default UIReducer;
