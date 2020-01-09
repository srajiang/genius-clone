import * as SongAPIUtil from '../util/song_api_util';

/* constants for var name control */
export const RECEIVE_ALL_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const REMOVE_SONG = "REMOVE_SONG";

/* action creators */

export const receiveAllSongs = songs => {

  return (
    {
      type: RECEIVE_ALL_SONGS,
      songs
    }
  )
}

export const receiveSong = song => {
  return (
    {
      type: RECEIVE_SONG,
      song
    }
  )

}

export const receiveSongErrors = errors => {

  return (
    {
      type: RECEIVE_SONG_ERRORS,
      errors
    }
  )

}

export const removeSong = songId => {

  return (
    {
      type: REMOVE_SONG,
      songId
    }
  )
}

/* thunk action creators */

export const createSong = song => dispatch => SongAPIUtil.createSong(song)
  .then( 
    song => dispatch(receiveSong(song)),
    err => dispatch(receiveSongErrors(err))
  );

export const updateSong = song => dispatch => SongAPIUtil.updateSong(song)
  .then(
    song => dispatch(receiveSong(song)),
    err => dispatch(receiveSongErrors(err))
  );

export const fetchSongs = () => dispatch => SongAPIUtil.fetchSongs()
  .then(
    songs => dispatch(receiveAllSongs(songs)),
    err => dispatch(receiveSongErrors(err))
  );

export const fetchSong = songId => dispatch => SongAPIUtil.fetchSong(songId)
  .then(
    song => dispatch(receiveSong(song)),
    err => dispatch(receiveSongErrors(err))
  );

export const deleteSong = songId => dispatch => SongAPIUtil.deleteSong(songId)
  .then( () => dispatch(removeSong(songId)) )