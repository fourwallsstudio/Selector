import { connect } from 'react-redux';
import Search from './search';
import {
  searchForUsers,
  searchForShows
} from '../../actions/search_actions';



const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchForUsers: search => dispatch(searchForUsers(search)),
    searchForShows: search => dispatch(searchForShows(search))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
