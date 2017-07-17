import { connect } from 'react-redux';
import PlayerDisplay from './player_display';
import { startPreview, stopPreview } from '../../actions/preview_actions';
import {
  queueDisabled,
  removeQueueItem,
  nextQueueItem,
  createQueueItem,
  updateQueueItem
} from '../../actions/queue_actions';
import {
  updateHowlerPlayer,
  updatePlayStatus,
  removeHowlerPlay,
  restoredPlayPosition
 } from '../../actions/player_actions';



const mapStateToProps = state => {
  return {
    queue: state.queue.queue,
    shows: state.shows.entities,
    player: state.player,
    preview: state.preview,
    currentUser: state.users[state.session.currentUser]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    queueDisabled: status => dispatch(queueDisabled(status)),
    removeQueueItem: id => dispatch(removeQueueItem(id)),
    updateHowlerPlayer: (hp) => dispatch(updateHowlerPlayer(hp)),
    updatePlayStatus: (s) => dispatch(updatePlayStatus(s)),
    removeHowlerPlay: q => dispatch(removeHowlerPlay(q)),
    restoredPlayPosition: status => dispatch(restoredPlayPosition(status)),
    nextQueueItem: () => dispatch(nextQueueItem()),
    startPreview: src => dispatch(startPreview(src)),
    stopPreview: src => dispatch(startPreview(src)),
    createQueueItem: q => dispatch(createQueueItem(q)),
    updateQueueItem: q => dispatch(updateQueueItem(q))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDisplay);
