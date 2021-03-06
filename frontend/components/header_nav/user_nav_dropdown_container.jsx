import React from 'react';
import { connect } from 'react-redux';
import UserNavDropdown from './user_nav_dropdown';
import { logout } from '../../actions/session_actions';
import { selectUser } from '../../reducers/selecters';

const mapStateToProps = state => {
    return {
      currentUser: state.users[state.session.currentUser]
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
)(UserNavDropdown);
