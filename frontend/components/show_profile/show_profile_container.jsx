import { connect } from 'react-redux';
import ShowProfile from './show_profile';
import javascript_time_ago from 'javascript-time-ago'
import { fetchSingleShow, deleteShow } from '../../actions/show_actions';
import { fetchUser } from '../../actions/user_actions';
import { createQueueItem } from '../../actions/queue_actions';
import {
  createComment,
  deleteComment,
  fetchComments } from '../../actions/comment_actions';
import {
  updateCurrentPlay,
  updateHowlerPlayer
 } from '../../actions/player_actions';
import {
  selectShow,
  selectListeners,
  selectComments
} from '../../reducers/selecters';


const mapStateToProps = (state, { match }) => {
  const showId = parseInt(match.params.showId);
  const currentUser = state.session.currentUser;
  return {
    formType: "upload",
    show: selectShow(state, showId),
    showId,
    currentUser,
    queue: state.queue,
    player: state.player,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleShow: showId => dispatch(fetchSingleShow(showId)),
    deleteShow: showId => dispatch(deleteShow(showId)),
    createQueueItem: q => dispatch(createQueueItem(q)),
    updateHowlerPlayer: hp => dispatch(updateHowlerPlayer(hp)),
    fetchUser: id => dispatch(fetchUser(id)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    fetchComments: showId => dispatch(fetchComments(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProfile);
