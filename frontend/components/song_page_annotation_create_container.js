import { connect } from 'react-redux';
import { createAnnotation, deleteAnnotation } from '../actions/annotation_actions';
import { createReferent, deleteReferent, fetchReferents } from '../actions/referent_actions';

import SongPageAnnotationForm from './song_page_annotation_form';

const mSTP = (state) => ({

  currentUserId: state.session.currentUserId,
  formType: "Create"

})

const mDTP = (dispatch) => ({

  createReferent: (referent) => dispatch(createReferent(referent)),
  createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
  deleteAnnotation: (annotationId) => dispatch(deleteAnnotation(annotationId)),
  deleteReferent: (referentId) => dispatch(deleteReferent(referentId)),
  fetchReferents: (songId) => dispatch(fetchReferents(songId))
})

export default connect(mSTP, mDTP)(SongPageAnnotationForm);
