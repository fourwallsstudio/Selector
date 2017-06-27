import UserForm from './user_form';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';


const mapStateToProps = ({ session }, { match }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser,
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
