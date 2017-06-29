import { connect } from 'react-redux';
import Player from './player';
import { startPreview, stopPreview } from '../../actions/preview_actions';
import {
  deleteQueueItem,
  nextQueueItem
} from '../../actions/queue_actions';
import {
  updateHowlerPlayer,
  updatePlayStatus
 } from '../../actions/player_actions';



const mapStateToProps = state => {
  return {
    queue: state.queue,
    shows: state.shows.entities,
    player: state.player,
    preview: state.preview
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteQueueItem: () => dispatch(deleteQueueItem()),
    updateHowlerPlayer: (hp) => dispatch(updateHowlerPlayer(hp)),
    updatePlayStatus: (s) => dispatch(updatePlayStatus(s)),
    nextQueueItem: () => dispatch(nextQueueItem()),
    startPreview: src => dispatch(startPreview(src)),
    stopPreview: src => dispatch(startPreview(src))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
