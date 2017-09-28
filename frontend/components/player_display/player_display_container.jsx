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
  restoredPlayPosition,
  changePlayerOrder,
  removePlayAtIndex
 } from '../../actions/player_actions';
 import { selectUser } from '../../reducers/selecters'



const mapStateToProps = state => {
  const { player, preview, shows, queue } = state

  return {
    currentUser: selectUser(state, state.session.currentUser),
    queue: queue.queue,
    shows: shows.entities,
    player,
    preview,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    queueDisabled: status => dispatch(queueDisabled(status)),
    removeQueueItem: id => dispatch(removeQueueItem(id)),
    updateHowlerPlayer: (hp) => dispatch(updateHowlerPlayer(hp)),
    updatePlayStatus: (s) => dispatch(updatePlayStatus(s)),
    removeHowlerPlay: () => dispatch(removeHowlerPlay()),
    restoredPlayPosition: status => dispatch(restoredPlayPosition(status)),
    changePlayerOrder: (queue, idx) => dispatch(changePlayerOrder(queue, idx)),
    nextQueueItem: () => dispatch(nextQueueItem()),
    startPreview: src => dispatch(startPreview(src)),
    stopPreview: src => dispatch(startPreview(src)),
    createQueueItem: q => dispatch(createQueueItem(q)),
    updateQueueItem: q => dispatch(updateQueueItem(q)),
    removePlayAtIndex: idx => dispatch(removePlayAtIndex(idx)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDisplay);
