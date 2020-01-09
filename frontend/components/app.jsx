import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import NavBarContainer from './nav_bar_container';
import SignupContainer from './signup_container';
import SigninContainer from './signin_container';
import NavBarSub from './nav_bar_sub';
import ChartIndexContainer from './chart_index_container';

export default () => {

  return (

    <div>
      <Route path="/" component={NavBarContainer}></Route>
      <AuthRoute path="/signin" component={SigninContainer}></AuthRoute>
      <AuthRoute path="/signup" component={SignupContainer}></AuthRoute>
      <Route path="/" component={NavBarSub}></Route>
      <Route path="/" component={ChartIndexContainer}></Route>
    </div>

  )

}