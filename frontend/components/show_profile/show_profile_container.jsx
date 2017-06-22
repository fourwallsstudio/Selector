import { connect } from 'react-redux';
import ShowProfile from './show_profile';
import { fetchShow } from '../../actions/show_actions';

const mapStateToProps = (state, { match }) => {
  debugger
  const showId = parseInt(match.params.showId);
  return {
    showId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShow: show => { dispatch(fetchShow(show)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProfile);
