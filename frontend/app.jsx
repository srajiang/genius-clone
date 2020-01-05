import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import * as SessionAPIUtil from './util/session_api_util'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {

  const rootEl = document.getElementById('root');
  let store = configureStore();

  /* to remove after testing */

  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signup = SessionAPIUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch; 

  /* testing utils end */

  ReactDOM.render(<Root store={store}/>, rootEl);

})

