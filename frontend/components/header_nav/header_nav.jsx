import React from 'react';
import { Link, Route } from 'react-router-dom';
import SearchContainer from '../search/search_container';


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
      rightSideNav = <div className="head-nav-user">
                      <div className="header-nav-user-img-box">
                      </div>
                      <h3>{this.props.currentUser.username}</h3>
                      <p className="user-dropdown-arrow">^</p>
                    </div>;
    }

    return (
      <header className="header-nav-container">
        <h2>Selector</h2>
        <SearchContainer />
        <div className='header-nav-links'>
          <div className='upload'>UPLOAD</div>
          <div className='categories'>CATEGORIES</div>
        </div>
        { rightSideNav }
      </header>
    )
  }
}

export default HeaderNav;
