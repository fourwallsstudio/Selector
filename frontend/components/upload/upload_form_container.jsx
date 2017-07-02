import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { uploadShow } from '../../actions/show_actions';
import { clearErrors } from '../../actions/error_actions';
import { fetchAllTags } from '../../actions/tag_actions';


const mapStateToProps = state => {
  let session = state.session
  return {
    formType: "upload",
    loggedIn: Boolean(session.currentUser),
    errors: state.errors,
    currentUser: session.currentUser,
    tags: state.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadShow: show => dispatch(uploadShow(show)),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllTags: () => dispatch(fetchAllTags())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
