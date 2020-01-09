import { 
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG,
  REMOVE_SONG
} from '../actions/song_actions'

const SongsReducer = (state ={}, action) => {

  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_ALL_SONGS: 
      return Object.assign({}, action.songs);

    case RECEIVE_SONG:
      return Object.assign({}, state, { [action.song.id]: action.song });

    case REMOVE_SONG:
      let newState = Object.assign({}, state);
      delete newState[action.songId]
      return newState;
      
    default: 
      return state;
  }
}

export default SongsReducer