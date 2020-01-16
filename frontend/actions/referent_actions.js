import * as ReferentAPIUtil from '../util/referents_api_util';

export const RECEIVE_REFERENTS = "RECEIVE_REFERENTS";
export const RECEIVE_REFERENT = "RECEIVE_REFERENT";
export const RECEIVE_REFERENT_ERRORS = "RECEIVE_REFERENT_ERRORS";
export const REMOVE_REFERENT = "REMOVE_REFERENT";

/* action creators */

export const receiveReferents = referents => {

  return (
    {
      type: RECEIVE_REFERENTS,
      referents
    }
  )
}

export const receiveReferent = referent => {

  return (
    {
      type: RECEIVE_REFERENT,
      referent
    }
  )
}

export const receiveReferentErrors = errors => {

  return (
    {
      type: RECEIVE_REFERENT_ERRORS,
      errors
    }
  )
}

export const removeReferent = referentId => {
  
  return (

    {
      type: REMOVE_REFERENT,
      referentId
    }

  )
}

/* thunk action creators */

export const createReferent = referent => dispatch => ReferentAPIUtil.createReferent(referent)
  .then(
    referent => dispatch(receiveReferent(referent)),
    response => dispatch(receiveReferentErrors(response.responseJSON))
  );

export const fetchReferents = songId => dispatch => ReferentAPIUtil.fetchReferents(songId)
  .then(
    referents => dispatch(receiveReferents(referents)),
    response => dispatch(receiveReferentErrors(response.responseJSON))
  )

export const deleteReferent = referentId => dispatch => ReferentAPIUtil.deleteReferent(referentId)
  .then(() => dispatch(removeReferent(referentId)));
