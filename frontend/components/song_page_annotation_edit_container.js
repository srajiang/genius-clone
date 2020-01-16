import { connect } from 'react';
import { updateAnnotation } from '../actions/annotation_actions';
import SongPageAnnotationForm from './song_page_annotation_form';

const mSTP = (state) => ({
  
  currentUserId: state.session.session.currentUserId,
  formType: "Edit"

})

const mDTP = (dispatch) => ({

  updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation))

})

// export default connect(mSTP, mDTP)(SongPageAnnotationForm);
