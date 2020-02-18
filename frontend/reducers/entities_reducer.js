import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import SongsReducer from './songs_reducer';
import AnnotationsReducer from './annotations_reducer';
import ReferentsReducer from './referents_reducer';
import SearchReducer from './search_reducer';

const EntitiesReducer = combineReducers({

  users: UsersReducer,
  songs: SongsReducer,
  annotations: AnnotationsReducer,
  referents: ReferentsReducer,
  search_results: SearchReducer

})

export default EntitiesReducer;