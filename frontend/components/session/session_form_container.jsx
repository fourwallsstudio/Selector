import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';


const mapStateToProps = ({ session }, { location }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    formType: location.pathname === '/login' ? 'login' : 'signup'
  }
}

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
