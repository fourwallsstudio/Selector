import { uploadShow,
  fetchSingleShow,
  deleteShow,
  updateShow
} from '../../actions/show_actions';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { selectShow } from '../../reducers/selecters';
import { fetchAllTags } from '../../actions/tag_actions';
import { clearErrors } from '../../actions/error_actions';


const mapStateToProps = (state, { match, location }) => {
  const showId = parseInt(match.params.showId);
  const { errors, tags, session } = state

  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    show: selectShow(state, showId),
    tags: tags.entities,
    formType: "edit",
    errors,
    showId,
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
