import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { uploadShow, clearErrors } from '../../actions/show_actions';
import { fetchAllTags } from '../../actions/tag_actions';


const mapStateToProps = state => {
  let session = state.session
  return {
    formType: "upload",
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
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
