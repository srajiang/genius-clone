import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import NavBarContainer from './nav/nav_bar_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavBarSub from './nav/nav_bar_sub';
import Footer from './footer';
import ChartIndexContainer from './chart/chart_index_container';
import SongPageContainer from './song_page/song_page_container';
import ErrorPage from './error_page';

import { updateSearchBarState } from "../actions/ui_actions";


export default () => {

  const handleClick = (e) => {

    if (
      typeof e.target.className === "string" &&
      (
        e.target.className.includes("search-item") ||
        e.target.className.includes("chart") ||
        e.target.className.includes("nav")
      )
    ) {
      dispatch(updateSearchBarState(false));
    }
        

  }

  return (

    <>
      <section onClick={handleClick}>
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
      <div className="push"></div>

      <Route path="/" component={Footer}></Route>

    </>

  )

}