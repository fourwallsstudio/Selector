import { connect } from 'react-redux';
import ShowFeed from './show_feed';
import { fetchAllShows } from '../../actions/show_actions';
import { selectFilteredShows, selectShowsByTag } from '../../reducers/selecters';
import { createQueueItem } from '../../actions/queue_actions';
import { startPreview, stopPreview } from '../../actions/preview_actions';
import { createNewPlay, updatePlayStatus, changePlayerOrder } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    shows: ownProps.filter === 'tag' ?
      selectShowsByTag(state, state.tags.currentTag) : selectFilteredShows(state, ownProps.filter),
    queue: state.queue,
    player: state.player,
    currentUser: state.users[state.session.currentUser],
    filter: ownProps.filter,
    preview: state.preview,
    tags: state.tags.entities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllShows: filter => dispatch(fetchAllShows(filter)),
    createQueueItem: q => dispatch(createQueueItem(q)),
    startPreview: src => dispatch(startPreview(src)),
    stopPreview: src => dispatch(stopPreview(src)),
    createNewPlay: (show, currentUser) => dispatch(createNewPlay(show, currentUser)),
    updatePlayStatus: status => dispatch(updatePlayStatus(status)),
    changePlayerOrder: (queue, idx) => dispatch(changePlayerOrder(queue, idx))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFeed);
