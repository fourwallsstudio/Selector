import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';


const mapStateToProps = (state, { location }) => {
  let session = state.session;
  return {
    loggedIn: Boolean(session.currentUser),
    errors: state.errors,
    formType: location.pathname === '/login' ? 'login' : 'signup'
  }
}

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
