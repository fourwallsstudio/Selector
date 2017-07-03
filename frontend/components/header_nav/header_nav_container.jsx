import React from 'react';
import { connect } from 'react-redux';
import HeaderNav from './header_nav';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selecters';

const mapStateToProps = state => {
    return {
      loggedIn: Boolean(state.session.currentUser),
      currentUser: selectUser(state, state.session.currentUser),
      currentUserId: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout()),
      fetchUser: id => dispatch(fetchUser(id))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
