import {
  RECEIVE_ANNOTATION_ERRORS,
  RECEIVE_ANNOTATIONS,
  RECEIVE_ANNOTATION
} from '../actions/annotation_actions';

const AnnotationsErrorsReducer = (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_ANNOTATION_ERRORS:
      return action.errors;
    case RECEIVE_ANNOTATIONS:
      return [];
    case RECEIVE_ANNOTATION:
      return [];
    default: 
      return state;
  }
}

export default AnnotationsErrorsReducer;

