import { 
  RECEIVE_SONG_ERRORS,
  RECEIVE_SONG,
  RECEIVE_ALL_SONGS
 } from '../actions/song_actions';

const SongErrorsReducer = (state = [], action) => {

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_SONG_ERRORS:
      return action.errors;
    
    case RECEIVE_SONG:
      return [];

    case RECEIVE_ALL_SONGS: 
      return [];

    default: 
      return state;

  }

}

export default SongErrorsReducer;