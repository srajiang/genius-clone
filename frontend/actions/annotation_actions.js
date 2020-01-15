import * as AnnotationAPIUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";
export const RECEIVE_ANNOTATION_ERRORS = "RECEIVE_ANNOTATION_ERRORS";

/* action creators */
const receiveAnnotations = annotations => (
  {
    type: RECEIVE_ANNOTATIONS,
    annotations
  }
)

const receiveAnnotation = annotation => (
  {
    type: RECEIVE_ANNOTATION,
    annotation
  }
)

const receiveAnnotationErrors = errors => (
  {
    type: RECEIVE_ANNOTATION_ERRORS,
    errors
  }
)

const removeAnnotation = annotationId => (
  {
    type: REMOVE_ANNOTATION,
    annotationId
  }
)

/* thunk action creators */
export const fetchAnnotations = songId => dispatch => AnnotationAPIUtil.fetchAnnotations(songId)
  .then( 
    annotations => dispatch(receiveAnnotations(annotations)),
    response => dispatch(receiveAnnotationErrors(response.responseJSON))
  );

export const createAnnotation = annotation => dispatch => AnnotationAPIUtil.createAnnotation(annotation)
  .then(
    annotation => dispatch(receiveAnnotation(annotaqtion)),
    response => dispatch(receiveAnnotationErrors(response.responseJSON))
  );

export const deleteAnnotation = annotationId => dispatch => AnnotationAPIUtil.deleteAnnotation(annotationId)
  .then( () => dispatch(removeAnnotation(annotationId) ));

