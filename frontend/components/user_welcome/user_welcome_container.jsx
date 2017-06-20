import { connect } from 'react-redux';
import UserWelcome from './user_welcome';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserWelcome);
