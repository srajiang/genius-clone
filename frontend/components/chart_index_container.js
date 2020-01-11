import { connect } from 'react-redux';
import ChartIndex from './chart_index';
import { fetchSongs } from '../actions/song_actions';

const mSTP = (state) => ({
  songs: Object.values(state.entities.songs)
})

const mDTP = dispatch => ({

  fetchSongs: (genre) => dispatch(fetchSongs(genre))

});

export default connect(mSTP, mDTP)(ChartIndex);