import {
  RECEIVE_ANNOTATIONS,
  RECEIVE_ANNOTATION,
  REMOVE_ANNOTATION
} from '../actions/annotation_actions';

const AnnotationsReducer = (state ={}, action) => {

  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_ANNOTATIONS: 
      return Object.assign({}, action.annotations);
    case RECEIVE_ANNOTATION:
      return Object.assign({}, state, { [action.annotation.id]: action.annotation})
    case REMOVE_ANNOTATION: 
      let newState = Object.assign({}, state);
      delete newState[action.annotationId];
      return newState;
    default:
      return state;

  }
}

export default AnnotationsReducer;
