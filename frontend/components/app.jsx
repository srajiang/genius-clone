import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import NavBarContainer from './nav_bar_container';
import SignupContainer from './signup_container';
import SigninContainer from './signin_container';

export default () => {

  return (

    <div>
      <Route path="/" component={NavBarContainer}></Route>
      <AuthRoute path="/signin" component={SigninContainer}></AuthRoute>
      <AuthRoute path="/signup" component={SignupContainer}></AuthRoute>
    </div>

  )

}