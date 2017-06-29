import { connect } from 'react-redux';
import Player from './player';
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
    player: state.player
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteQueueItem: () => dispatch(deleteQueueItem()),
    updateHowlerPlayer: (hp) => dispatch(updateHowlerPlayer(hp)),
    updatePlayStatus: (s) => dispatch(updatePlayStatus(s)),
    nextQueueItem: () => dispatch(nextQueueItem()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
