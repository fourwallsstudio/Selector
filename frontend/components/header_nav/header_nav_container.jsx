import React from 'react';
import { connect } from 'react-redux';
import HeaderNav from './header_nav';

const mapStateToProps = state => {
    return {
      loggedIn: Boolean(state.session.currentUser),
      currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
