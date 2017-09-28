import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectUser, selectFollowings } from '../../reducers/selecters';
import { fetchUserFollowings, fetchUser } from '../../actions/user_actions'
import { createFollowing, deleteFollowing } from '../../actions/following_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);

  return {
    user: selectUser(state, userId),
    followings: selectFollowings(state, ownProps),
    users: state.users,
    currentUser: state.users[state.session.currentUser],
    currentUserId: state.session.currentUser, 
    userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createFollowing: f => dispatch(createFollowing(f)),
    deleteFollowing: f => dispatch(deleteFollowing(f)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchUserFollowings: id => dispatch(fetchUserFollowings(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
