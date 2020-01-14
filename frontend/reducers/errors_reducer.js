import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import SongErrorsReducer from './song_errors_reducer';
import ReferentsErrorsReducer from './referents_errors_reducer';
import AnnotationsErrorsReducer from './annotations_errors_reducer';

const ErrorsReducer = combineReducers({

  session: SessionErrorsReducer,
  songs: SongErrorsReducer, 
  referents: ReferentsErrorsReducer,
  annotations: AnnotationsErrorsReducer

})

export default ErrorsReducer;