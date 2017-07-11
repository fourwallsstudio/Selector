import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, fetchUserFollowings } from '../../actions/user_actions';
import { selectUser, selectFollowings } from '../../reducers/selecters';
import { createFollowing, deleteFollowing } from '../../actions/following_actions';

const mapStateToProps = (state, { match }) => {
  const userId = parseInt(match.params.userId);
  return {
    user: selectUser(state, userId),
    userId,
    followings: selectFollowings(state, userId),
    users: state.users,
    currentUser: selectUser(state, state.session.currentUser),
    currentUserId: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: user => dispatch(fetchUser(user)),
    fetchUserFollowings: userId => dispatch(fetchUserFollowings(userId)),
    createFollowing: f => dispatch(createFollowing(f)),
    deleteFollowing: f => dispatch(deleteFollowing(f))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
