import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { uploadShow,
  fetchSingleShow,
  deleteShow,
  updateShow
} from '../../actions/show_actions';
import { clearErrors } from '../../actions/error_actions';
import { selectShow } from '../../reducers/selecters';
import { fetchAllTags } from '../../actions/tag_actions';


const mapStateToProps = (state, { match, location }) => {
  const showId = parseInt(match.params.showId);
  
  return {
    formType: "edit",
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    currentUser: state.session.currentUser,
    show: selectShow(state, showId),
    showId,
    tags: state.tags.entities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateShow: (id, formData) => dispatch(updateShow(id, formData)),
    fetchSingleShow: showId => dispatch(fetchSingleShow(showId)),
    deleteShow: showId => dispatch(deleteShow(showId)),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllTags: () => dispatch(fetchAllTags())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
