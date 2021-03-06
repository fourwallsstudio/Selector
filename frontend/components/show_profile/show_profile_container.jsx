import { connect } from 'react-redux';
import {
  updateCurrentPlay,
  updateHowlerPlayer,
  updatePlayStatus,
  createNewPlay,
  removeHowlerPlay,
  changePlayerOrder
 } from '../../actions/player_actions';
 import ShowProfile from './show_profile';
import javascript_time_ago from 'javascript-time-ago'
import { selectShow } from '../../reducers/selecters';
import {
  createComment,
  deleteComment,
  fetchComments } from '../../actions/comment_actions';
import { updateFilter } from '../../actions/filter_actions';
import { updateCurrentTag } from '../../actions/tag_actions';
import { createQueueItem } from '../../actions/queue_actions';
import { startPreview, stopPreview } from '../../actions/preview_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';
import { fetchSingleShow, deleteShow, fetchShowsByTag } from '../../actions/show_actions';



const mapStateToProps = (state, { match }) => {
  const showId = parseInt(match.params.showId);
  const currentUser = state.users[state.session.currentUser];
  const { queue, player, comments, preview, tags } = state

  return {
    show: selectShow(state, showId),
    tags: tags.entities,
    formType: "upload",
    currentUser,
    comments,
    preview,
    showId,
    player,
    queue,
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
    changePlayerOrder: (queue, idx) => dispatch(changePlayerOrder(queue, idx)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    fetchComments: showId => dispatch(fetchComments(showId)),
    startPreview: src => dispatch(startPreview(src)),
    stopPreview: src => dispatch(stopPreview(src)),
    fetchShowsByTag: (filter, tagId) => dispatch(fetchShowsByTag(filter, tagId)),
    updateCurrentTag: tagId => dispatch(updateCurrentTag(tagId)),
    updateFilter: filter => dispatch(updateFilter(filter)),
    createFavorite: fav => dispatch(createFavorite(fav)),
    deleteFavorite: fav => dispatch(deleteFavorite(fav)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProfile);
