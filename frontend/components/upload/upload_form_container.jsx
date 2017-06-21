import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { uploadShow, clearErrors } from '../../actions/show_actions';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadShow: show => dispatch(uploadShow(show)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
