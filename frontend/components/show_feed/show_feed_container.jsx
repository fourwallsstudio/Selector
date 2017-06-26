import { connect } from 'react-redux';
import ShowFeed from './show_feed';
import { fetchAllShows } from '../../actions/show_actions';
import { selectAllShows } from '../../reducers/selecters';

const mapStateToProps = state => {
  return {
    shows: selectAllShows(state)
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
