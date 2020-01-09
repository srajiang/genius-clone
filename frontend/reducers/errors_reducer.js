import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import SongErrorsReducer from './song_errors_reducer';

const ErrorsReducer = combineReducers({

  session: SessionErrorsReducer,
  songs: SongErrorsReducer

})

export default ErrorsReducer;