import { connect } from 'react-redux';
import Search from './search';
import {
  searchForUsers,
  searchForShows,
  searchForTags,
  clearSearch
} from '../../actions/search_actions';
import { fetchAllTags } from '../../actions/tag_actions';



const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchForUsers: search => dispatch(searchForUsers(search)),
    searchForShows: search => dispatch(searchForShows(search)),
    searchForTags: search => dispatch(searchForTags(search)),
    fetchAllTags: () => dispatch(fetchAllTags())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
