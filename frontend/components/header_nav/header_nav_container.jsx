import React from 'react';
import { connect } from 'react-redux';
import HeaderNav from './header_nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
      loggedIn: Boolean(state.session.currentUser),
      currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout())
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
