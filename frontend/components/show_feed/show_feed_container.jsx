import { connect } from 'react-redux';
import ShowFeed from './show_feed';
import { fetchAllShows } from '../../actions/show_actions';
import { selectFilteredShows } from '../../reducers/selecters';
import { createQueueItem } from '../../actions/queue_actions';
import { startPreview, stopPreview } from '../../actions/preview_actions';
import { fetchAllTags } from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    shows: selectFilteredShows(state, ownProps.filter),
    queue: state.queue,
    player: state.player,
    currentUser: state.session.currentUser,
    filter: ownProps.filter,
    preview: state.preview,
    tags: state.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllShows: filter => dispatch(fetchAllShows(filter)),
    fetchAllTags: () => dispatch(fetchAllTags()),
    createQueueItem: q => dispatch(createQueueItem(q)),
    startPreview: src => dispatch(startPreview(src)),
    stopPreview: src => dispatch(stopPreview(src))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFeed);
