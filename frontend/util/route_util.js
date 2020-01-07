import { Component } from "react";
import React from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (

  <Route 
    path={path}
    exact={exact}
    render={ props => 
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />

);

const mapStateToProps = state => {

  return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)

)