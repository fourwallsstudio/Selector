import { connect } from 'react-redux';
import UserWelcome from './user_welcome';
import { fetchAllShows } from '../../actions/show_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    filter: state.filter,
    currentTag: state.tags.currentTag
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllShows: filter => { dispatch(fetchAllShows(filter))},
    updateFilter: filter => { dispatch(updateFilter(filter))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserWelcome);
