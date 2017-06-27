import { connect } from 'react-redux';
import ShowFeed from './show_feed';
import { fetchAllShows } from '../../actions/show_actions';
import { selectAllShows } from '../../reducers/selecters';
import { createQueueItem } from '../../actions/queue_actions';

const mapStateToProps = state => {
  return {
    shows: selectAllShows(state),
    queue: state.queue,
    player: state.player,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllShows: () => dispatch(fetchAllShows()),
    createQueueItem: q => dispatch(createQueueItem(q))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFeed);
