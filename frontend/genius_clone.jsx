import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store'

/* to remove after testing */

document.addEventListener('DOMContentLoaded', () => {

  const rootEl = document.getElementById('root');
  let store = null; 

  /* checks for current user and assigns preloaded state accordingly */
  if (window.currentUser) {
    const preloadedState = {
      
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        session: { currentUserId: window.currentUser.id }
      }
    }
    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  /* to remove after testing */

  window.store = store;
  
  /* testing utils end */



  ReactDOM.render(<Root store={store}/>, rootEl);

})


