import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selecters';

const mapStateToProps = (state, { match }) => {
  const userId = parseInt(match.params.userId);
  return {
    user: selectUser(state, userId),
    userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: user => { dispatch(fetchUser(user)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
