import { connect } from 'react-redux';
import ShowFeed from './show_feed';
import { fetchAllShows } from '../../actions/show_actions';
import { selectAllShows } from '../../reducers/selecters';
import { createQueueItem } from '../../actions/queue_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    shows: selectAllShows(state),
    queue: state.queue,
    player: state.player,
    currentUser: state.session.currentUser,
    filter: ownProps.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllShows: filter => dispatch(fetchAllShows(filter)),
    createQueueItem: q => dispatch(createQueueItem(q))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFeed);
