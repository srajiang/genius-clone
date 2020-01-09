import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store'

/* testing imports */
import * as SongAPIUtil from './util/song_api_util'
import { receiveAllSongs, receiveSong, receiveSongErrors, removeSong } from './actions/song_actions';

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
  
  window.testNewSong = { 
    title: "testsong",
    album: "testalbum",
    artist: 'bjork',
    body: ['lyrics', 'more lurics', 'extra extra lyrics'],
    genre: 'deathmetal',
    about: 'this is a song about life'
  }

  window.testUpdateSong = {
    title: "testsong",
    album: "testalbum",
    artist: 'bjork',
    body: ['lyrics', 'more lurics', 'extra extra lyrics', 'another luric'],
    genre: 'deathmetal',
    about: 'this is a song about friendship'
  }

  /* remove after testing */
  window.createSong = SongAPIUtil.createSong;
  window.updateSong = SongAPIUtil.updateSong;
  window.fetchSong = SongAPIUtil.fetchSong;
  window.fetchSongs = SongAPIUtil.fetchSongs;
  window.deleteSong = SongAPIUtil.deleteSong;

  window.dispatch = store.dispatch;

  window.receiveAllSongs = receiveAllSongs;
  window.receiveSong = receiveSong;
  window.receiveSongErrors = receiveSongErrors;
  window.removeSong = removeSong;

  /* remove after testing */

  ReactDOM.render(<Root store={store}/>, rootEl);

})


