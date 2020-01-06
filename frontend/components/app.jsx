import React from 'react';
import { Route } from 'react-router-dom';

import NavBarContainer from './nav_bar_container';
import SignupContainer from './signup_container';
import SigninContainer from './signin_container';

export default () => {

  return (

    <div>
      <Route path="/" component={NavBarContainer}></Route>
      <Route path="/signin" component={SigninContainer}></Route>
      <Route path="/signup" component={SignupContainer}></Route>
    </div>

  )

}