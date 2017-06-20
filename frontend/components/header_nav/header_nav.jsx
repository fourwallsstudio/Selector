import React from 'react';
import { Link, Route } from 'react-router-dom';



class HeaderNav extends React.Component {

  render() {
    let rightSideNav;
    if (!this.props.loggedIn) {
      rightSideNav = <div className="head-nav-right">
                      <Link to={`/login`}
                        className="head-nav-button-login">Log in</Link>
                      <p>or</p>
                      <Link to={`/signup`}
                        className="head-nav-button-signin">Sign up</Link>
                    </div>;
    } else {
      debugger
      rightSideNav = <div className="head-nav-right">
                      <h2>{this.props.currentUser.username}</h2>
                    </div>;
    }

    return (
      <header className="header-nav-container">
        <h2>Selector</h2>

        { rightSideNav }
      </header>
    )
  }
}

export default HeaderNav;
