import { connect } from 'react-redux';
import ShowProfile from './show_profile';
import javascript_time_ago from 'javascript-time-ago'
import { fetchSingleShow, deleteShow, fetchShowsByTag } from '../../actions/show_actions';
import { createQueueItem } from '../../actions/queue_actions';
import { startPreview, stopPreview } from '../../actions/preview_actions';
import { updateCurrentTag } from '../../actions/tag_actions';
import { updateFilter } from '../../actions/filter_actions';
import {
  createComment,
  deleteComment,
  fetchComments } from '../../actions/comment_actions';
import {
  updateCurrentPlay,
  updateHowlerPlayer,
  updatePlayStatus,
  createNewPlay,
  removeHowlerPlay
 } from '../../actions/player_actions';
import {
  selectShow,
  selectComments
} from '../../reducers/selecters';



const mapStateToProps = (state, { match }) => {
  const showId = parseInt(match.params.showId);
  const currentUser = state.users[state.session.currentUser];
  return {
    formType: "upload",
    show: selectShow(state, showId),
    showId,
    currentUser,
    queue: state.queue,
    player: state.player,
    comments: state.comments,
    preview: state.preview,
    tags: state.tags.entities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleShow: showId => dispatch(fetchSingleShow(showId)),
    deleteShow: showId => dispatch(deleteShow(showId)),
    createQueueItem: q => dispatch(createQueueItem(q)),
    createNewPlay: (show, currentUser) => dispatch(createNewPlay(show, currentUser)),
    removeHowlerPlay: queue => dispatch(removeHowlerPlay(queue)),
    updatePlayStatus: status => dispatch(updatePlayStatus(status)),
    updateHowlerPlayer: hp => dispatch(updateHowlerPlayer(hp)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    fetchComments: showId => dispatch(fetchComments(showId)),
    startPreview: src => dispatch(startPreview(src)),
    stopPreview: src => dispatch(stopPreview(src)),
    fetchShowsByTag: (filter, tagId) => dispatch(fetchShowsByTag(filter, tagId)),
    updateCurrentTag: tagId => dispatch(updateCurrentTag(tagId)),
    updateFilter: filter => dispatch(updateFilter(filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProfile);
