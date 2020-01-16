import { connect } from 'react';
import { createAnnotation, deleteAnnotation } from '../actions/annotation_actions';
import { createReferent } from '../actions/referent_actions';

import SongPageAnnotationForm from './song_page_annotation_form';

const mSTP = (state) => ({

  currentUserId: state.session.session.currentUserId,
  formType: "Create"

})

const mDTP = (dispatch) => ({

  createReferent: (referent) => dispatch(createReferent(referent)),
  createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
  deleteAnnotation: (annotationId) => dispatch(deleteAnnotation(annotationId))

})

export default connect(mSTP, mDTP)(SongPageAnnotationForm);
