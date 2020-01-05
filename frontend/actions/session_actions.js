import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

/* action creators  */
const receiveCurrentUser = user => {

  return (
    {
      type: RECEIVE_CURRENT_USER,
      user
    }
  )

}

const logoutCurrentUser = () => {

  return (
    {
      type: LOGOUT_CURRENT_USER  
    }
  )
}

export const receiveErrors = errors => {

  return (
    {
      type: RECEIVE_SESSION_ERRORS,
      errors
    }
  )
}

/* thunk action creators */

export const signupUser = user => dispatch => SessionAPIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))

export const loginUser = user => dispatch => SessionAPIUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logoutUser = () => dispatch => SessionAPIUtil.logout(user)
  .then(() => dispatch(logoutCurrentUser()));