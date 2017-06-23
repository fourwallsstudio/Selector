import { connect } from 'react-redux';
import ShowProfile from './show_profile';
import javascript_time_ago from 'javascript-time-ago'
import { fetchSingleShow, deleteShow } from '../../actions/show_actions';
import { selectShow } from '../../reducers/selecters';

const mapStateToProps = (state, { match }) => {
  const showId = parseInt(match.params.showId);
  const currentUser = state.session.currentUser;
  return {
    show: selectShow(state, showId),
    showId,
    currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleShow: showId => dispatch(fetchSingleShow(showId)),
    deleteShow: showId => dispatch(deleteShow(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProfile);
