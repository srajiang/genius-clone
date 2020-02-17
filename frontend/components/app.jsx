import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import NavBarContainer from './nav_bar_container';
import SignupContainer from './signup_container';
import SigninContainer from './signin_container';
import NavBarSub from './nav_bar_sub';
import Footer from './footer';
import ChartIndexContainer from './chart_index_container';
import SongPageContainer from './song_page_container';
import ErrorPage from './error_page';

export default () => {

  return (

    <>

      <section>
        <Route path="/" component={NavBarContainer}></Route>
        <Route path="/" component={NavBarSub}></Route>
        
        <Switch>
          <Route path="/songs/:songId" component={SongPageContainer}></Route>
          <AuthRoute path="/signin" component={SigninContainer}></AuthRoute>
          <AuthRoute path="/signup" component={SignupContainer}></AuthRoute>        
          <Route exact path="/" component={ChartIndexContainer}></Route>
          
          <Route exact path="/:anything_else" component={ErrorPage}></Route>

        </Switch>

      </section>
      <div class="push"></div>

      <Route path="/" component={Footer}></Route>

    </>

  )

}