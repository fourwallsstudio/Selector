import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { createShow } from '../../actions/show_actions';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createShow: show => dispatch(createShow(show))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
