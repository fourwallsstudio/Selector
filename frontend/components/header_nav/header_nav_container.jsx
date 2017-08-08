import React from 'react';
import { connect } from 'react-redux';
import HeaderNav from './header_nav';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchNonFollowings } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selecters';
import { fetchAllTags } from '../../actions/tag_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser

  return {
    loggedIn: Boolean(currentUser),
    currentUser: selectUser(state, currentUser),
    currentUserId: currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchAllTags: () => dispatch(fetchAllTags()),
    fetchNonFollowings: id => dispatch(fetchNonFollowings(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
