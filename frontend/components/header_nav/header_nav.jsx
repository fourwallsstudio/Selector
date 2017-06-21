import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
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
      let user = this.props.currentUser;
      rightSideNav = <div className="head-nav-user">
                      <div className="header-nav-user-img-box">
                        <img src={user.avatar_url} onClick={() => this.props.history.push(`/user/${user.id}`)}/>
                      </div>
                      <Link to={`/user/${user.id}`}>{user.username}</Link>
                      <p className="user-dropdown-arrow">^</p>
                      <button onClick={() => this.props.logout()}>Logout</button>
                    </div>;
    }

    return (
      <header className="header-nav-container">
        <Link to="/" className="header-link">
          <h2>Selector</h2>
        </Link>
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

export default withRouter(HeaderNav);
