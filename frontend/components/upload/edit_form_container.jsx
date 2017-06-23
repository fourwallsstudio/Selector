import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { uploadShow,
  fetchSingleShow,
  deleteShow,
  updateShow,
  clearErrors
} from '../../actions/show_actions';
import { selectShow } from '../../reducers/selecters';


const mapStateToProps = (state, { match, location }) => {
  const showId = parseInt(match.params.showId);
  return {
    formType: "edit",
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    currentUser: state.session.currentUser,
    show: selectShow(state, showId),
    showId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateShow: (id, formData) => dispatch(updateShow(id, formData)),
    fetchSingleShow: showId => dispatch(fetchSingleShow(showId)),
    deleteShow: showId => dispatch(deleteShow(showId)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
