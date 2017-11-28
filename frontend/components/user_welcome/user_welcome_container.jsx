import { connect } from 'react-redux';
import UserWelcome from './user_welcome';
import { fetchAllShows } from '../../actions/show_actions';
import { updateFilter } from '../../actions/filter_actions';
import { fetchNonFollowings } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    filter: state.filter,
    currentTag: state.tags.currentTag,
    users: state.users,
    shows: state.shows.entities,
    currentUser: state.users[state.session.currentUser]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllShows: filter => dispatch(fetchAllShows(filter)),
    updateFilter: filter => dispatch(updateFilter(filter)),
    fetchNonFollowings: id => dispatch(fetchNonFollowings(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserWelcome);
