import { connect } from 'react-redux';
import { fetchSong } from '../actions/song_actions';

import SongPage from './song_page';

const mSTP = (state, ownProps) => {
  
return ({

  song: state.entities.songs[ownProps.match.params.songId]

})

}

const mDTP = (dispatch) => ({

  fetchSong: (songId) => dispatch(fetchSong(songId))

})

export default connect(mSTP, mDTP)(SongPage);