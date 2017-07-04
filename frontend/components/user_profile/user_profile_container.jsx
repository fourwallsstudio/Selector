import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, fetchUserFollowings } from '../../actions/user_actions';
import { selectUser, selectFollowings } from '../../reducers/selecters';

const mapStateToProps = (state, { match }) => {
  const userId = parseInt(match.params.userId);
  return {
    user: selectUser(state, userId),
    userId,
    followings: selectFollowings(state, userId),
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: user => dispatch(fetchUser(user)),
    fetchUserFollowings: userId => dispatch(fetchUserFollowings(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
