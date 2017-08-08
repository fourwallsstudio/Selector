import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { uploadShow } from '../../actions/show_actions';
import { fetchAllTags } from '../../actions/tag_actions';
import { clearErrors } from '../../actions/error_actions';


const mapStateToProps = state => {
  const { errors, session, tags } = state

  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    tags: tags.entities,
    formType: "upload",
    errors,
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
