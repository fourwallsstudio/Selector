import UserForm from './user_form';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';


const mapStateToProps = (state, { match }) => {
  let session = state.session;
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: state.users[session.currentUser],
    userId: match.params.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    editUser: (id, formData) => dispatch(editUser(id, formData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
