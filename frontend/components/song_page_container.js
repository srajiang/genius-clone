import { connect } from 'react-redux';
import { fetchSong } from '../actions/song_actions';
import { fetchAnnotations, createAnnotation, deleteAnnotation } from '../actions/annotation_actions';
import { fetchReferents, createReferent } from '../actions/referent_actions';

import SongPage from './song_page';

const mSTP = (state, ownProps) => {

  return ({
    song: state.entities.songs[ownProps.match.params.songId],
    referents: Object.values(state.entities.referents)
  })
}

const mDTP = (dispatch) => ({

  fetchSong: (songId) => dispatch(fetchSong(songId)),
  fetchAnnotations: (songId) => dispatch(fetchAnnotations(songId)), 
  createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
  deleteAnnotation: (annotationId) => dispatch(deleteAnnotation(annotationId)),
  fetchReferents: (songId) => dispatch(fetchReferents(songId)),
  createReferent: (referent) => dispatch(createReferent(referent))

})

export default connect(mSTP, mDTP)(SongPage);