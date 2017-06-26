import React from 'react';
import { connect } from 'react-redux';
import UserNavDropdown from './user_nav_dropdown';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
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
