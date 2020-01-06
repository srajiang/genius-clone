import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import * as SessionAPIUtil from './util/session_api_util'
import configureStore from './store/store'
import { receiveCurrentUser, logoutCurrentUser, receiveSessionErrors } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {

  const rootEl = document.getElementById('root');
  let store = configureStore();

  /* to remove after testing */

  // window.login = SessionAPIUtil.login;
  // window.logout = SessionAPIUtil.logout;
  // window.signup = SessionAPIUtil.signup;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; 
  window.store = store;
  // window.receiveCurrentUser = receiveCurrentUser;
  // window.logoutCurrentUser = logoutCurrentUser;
  // window.receiveSessionErrors = receiveSessionErrors;

  /* testing utils end */

  ReactDOM.render(<Root store={store}/>, rootEl);

})

