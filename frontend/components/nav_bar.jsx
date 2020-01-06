
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  logoutUser() {

    this.props.logoutUser();

  }

  renderSession() {

    let { currentUserId } = this.props;

    if ( currentUserId !== null ) {
      return (
        <div>
          <a onClick={ currentUserId => this.logoutUser(currentUserId)}>Log Out</a>
          <Redirect to="/"/>
        </div>
      )
    }
    return <Link to="/signin">Sign In</Link>

  }

  render() {
    return (
      <header className="nav-bar">

        <div className="left-nav">LeftNav</div>
        <div className="center-nav">LogoPlaceholder</div>
        <div className="right-nav">{this.renderSession()}</div>

      </header>
    )
  }

}

export default NavBar;