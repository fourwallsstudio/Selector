import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import UserNavDropdownContainer from './user_nav_dropdown_container';


class HeaderNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownActive: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllTags();
  }


  componentWillReceiveProps(nextProps) {
    this.state.dropdownActive = false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dropdownActive !== this.state.dropdownActive) true;
    if (!this.props.currentUser || !nextProps.currentUser) true;

    return false
  }

  handleClick() {
    if (this.state.dropdownActive) {
      this.setState(
        {
          dropdownActive: false
        }
      );
    } else {
      this.setState(
        {
          dropdownActive: true
        }
      );
    }
  }

  isActive() {
    if (this.state.dropdownActive) {
      return <UserNavDropdownContainer />;
    } else {
      return "";
    }
  }

  render() {
    let rightSideNav;
    let dropdownActive = this.state.dropdownActive ? " dropdown-active" : ""

    if (!this.props.loggedIn && !this.props.currentUser) {
      rightSideNav = <div className="head-nav-right-login">
                      <Link to={`/login`}
                        className="head-nav-button-login">Log in</Link>
                      <p>or</p>
                      <Link to={`/signup`}
                        className="head-nav-button-signin">Sign up</Link>
                    </div>;
    } else {
        let user = this.props.currentUser;
        let logout = this.props.logout;

        rightSideNav = <div className="head-nav-user">
          <div className="header-nav-user-img-box">
            <img src={user.avatar_url} onClick={() => this.props.history.push(`/user/${user.id}`)}/>
          </div>
          <Link to={`/user/${user.id}`}>{user.username}</Link>
          <div className="user-dropdown-arrow"
            onClick={ this.handleClick }
            >
            <i className={"fa fa-chevron-down" + dropdownActive}
              aria-hidden="true"
              ></i>
            { this.isActive() }
          </div>
        </div>;
    }

    return (
      <header className="header-nav-container">
        <div className="header-nav-inside-box">
          <div className="header-nav-left-box">
            <Link to="/home" className="header-link">
              <h2>Selector</h2>
            </Link>
            <SearchContainer />
            <div className='header-nav-links'>
              <Link to={'/upload'} className='upload'>
                <i className="fa fa-level-up fa-lg" aria-hidden="true"></i>
                <h4>UPLOAD</h4>
              </Link>
              <Link to={'/categories'} className='categories'>
                <i className="fa fa-th-large fa-lg" aria-hidden="true"></i>
                <h4>CATEGORIES</h4>
              </Link>
            </div>
          </div>

          <div className="head-nav-right">
            { rightSideNav }
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderNav);
