import { connect } from 'react-redux';
import { deleteQueueItem } from '../../actions/queue_actions';
import {
  updateCurrentPlay,
  updateHowlerPlayer,
  updatePlayStatus
 } from '../../actions/player_actions';
import Player from './player';


const mapStateToProps = state => {
  return {
    queue: state.queue,
    shows: state.shows.entities,
    player: state.player
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteQueueItem: id => dispatch(deleteQueueItem(id)),
    updateCurrentPlay: (cp, p) => dispatch(updateCurrentPlay(cp, p)),
    updateHowlerPlayer: (hp) => dispatch(updateHowlerPlayer(hp)),
    updatePlayStatus: (s) => dispatch(updatePlayStatus(s))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
