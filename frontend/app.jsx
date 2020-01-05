import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import Root from './components/root';

import {
    loginUser,
    logoutUser
} from './actions/session_actions'

//temp, to remove
import {
    login,
    logout,
    signup
} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const store = configStore();

    // temp for testing, need to remove
    window.store = store;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.dispatch = store.dispatch;
    window.loginUser = loginUser;
    window.logoutUser = logoutUser;
    //testing end

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})