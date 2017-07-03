import { connect } from 'react-redux';
import Player from './player';
import { startPreview, stopPreview } from '../../actions/preview_actions';
import {
  removeQueueItem,
  nextQueueItem,
  createQueueItem,
  updateQueueItem
} from '../../actions/queue_actions';
import {
  updateHowlerPlayer,
  updatePlayStatus,
  removeHowlerPlay
 } from '../../actions/player_actions';



const mapStateToProps = state => {
  return {
    queue: state.queue,
    shows: state.shows.entities,
    player: state.player,
    preview: state.preview,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQueueItem: id => dispatch(removeQueueItem(id)),
    updateHowlerPlayer: (hp) => dispatch(updateHowlerPlayer(hp)),
    updatePlayStatus: (s) => dispatch(updatePlayStatus(s)),
    removeHowlerPlay: () => dispatch(removeHowlerPlay()),
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
)(Player);
