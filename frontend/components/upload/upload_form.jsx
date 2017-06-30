import React from 'react';
import MustBeLoggedIn from '../errors_notices/must_be_logged_in';
import renderHTML from 'react-render-html';
import { values } from 'lodash';

class UploadForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      audio: null,
      image: null,
      tagIds: [],
      uploadInProgress: false
    },

    this.audioFileName = "";
    this.imagePreviewUrl = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'edit') {
      this.props.fetchSingleShow(this.props.showId);
    }
    this.props.fetchAllTags();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.imagePreviewUrl = nextProps.show.image_url
      this.audioFileName = nextProps.show.title;
      this.setState({
        title: nextProps.show.title,
        description: nextProps.show.description,
        // audio: nextProps.show.audio_url,
        // image: nextProps.show.image_url,
        tagIds: nextProps.show.tag_ids
      });
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({ uploadInProgress: true });

    var file = this.state.imageFile;
    var formData = new FormData();
    formData.append("show[title]", this.state.title);
    formData.append("show[description]", this.state.description);
    formData.append("show[tag_ids][]", this.state.tagIds);

    if (this.state.image) {
      formData.append("show[image]", this.state.image);
    }

    if (this.state.audio) {
      formData.append("show[audio]", this.state.audio);
    }

    if (this.props.formType === 'upload') {
      this.props.uploadShow(formData)
        .then( result => this.props.history.push(`/show/${result.show.id}`));
    } else if (this.props.formType === 'edit') {
      this.props.updateShow(this.props.showId, formData)
        .then( result => this.props.history.push(`/show/${result.show.id}`));
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteShow(this.props.show.id)
      .then( () => this.props.history.push('/home') );
  }

  renderErrors() {
    return(
      <div className="upload-form-errors">{this.props.errors}</div>
    );
  }

  update(stateKey) {
    return e => {
			this.setState({ [stateKey]: e.target.value });

      if (this.props.errors) {
        this.props.clearErrors();
      }
		}
  }

  updateAudio(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.audioFileName = file.name;
    this.setState({ audio: file });
  }

  updateImage(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.imagePreviewUrl = reader.result;
      this.setState({ image: file });
    }

    reader.readAsDataURL(file);
  }

  handleCheckbox(e) {
    e.preventDefault();
    if (this.state.tagIds.includes(parseInt(e.target.value))) {
      let i = this.state.tagIds.indexOf(parseInt(e.target.value))
      let newState = this.state.tagIds
      newState.splice(i, 1)

      this.setState({
        tagIds: newState
      })
    } else {
      let nextState = this.state.tagIds
      nextState.push(parseInt(e.target.value))

      this.setState({
        tagIds: nextState
      })
    }

  }

  render() {
    if (!this.props.currentUser) {
      return <MustBeLoggedIn type="upload" />;

    } else {
      let imagePreview = "";
      let deleteButton = "";
      let formName = 'Upload';
      let buttonAction = 'Choose ';
      let uploadInProgress = "";
      let tagCheckboxes;

      if (this.state.uploadInProgress) { uploadInProgress = "upload-in-progress" };

      if (this.imagePreviewUrl !== "") {
        imagePreview = <img className="image-preview" src={this.imagePreviewUrl} />;
      }

      if (this.props.formType === 'edit') {
        deleteButton = <p onClick={ this.handleDelete } className="edit-form-delete-link">Delete</p>;
        formName = 'Update';
        buttonAction = 'Change ';
      }

      if (this.props.tags) {
        tagCheckboxes = values(this.props.tags).map( tag => {
          return (
            <div key={ tag.id }
              className={`u-f-tag ${ this.state.tagIds.includes(tag.id) ? "checked" : "" }`}>
              <input type="checkbox" value={ tag.id }
                  onChange={ this.handleCheckbox } />
              <p>{ tag.genre }</p>
            </div>
          )
        })
      }

      return (
        <section className="upload-form-container">
          <div className="upload-header">
            <h1>{formName}</h1>
          </div>

          <div className="upload-banners-container">
            <div className={`upload-spinner-box ${ uploadInProgress }`} >
              <i className="fa fa-refresh fa-5x" aria-hidden="true"></i>
            </div>
            <p className={`loading-marquee ${ uploadInProgress }`}>
              Loading, please wait...
            </p>
          </div>

          <div className="upload-form-box">

            { this.renderErrors() }

            <form onSubmit={ this.handleSubmit }>
              <div className="upload-input-audio">
                {buttonAction}File
                <input
                  type="file"
                  onChange={ this.updateAudio }
                  />
              </div>
              <div className="audio-file-name">{ this.audioFileName }</div>
              <p className="p-red">Please choose an audio file - MP3, AAC, M4A, MP4 audio or OGG types are accepted.</p>
              <p>Selector is for Radio Shows, DJ Mixes & Podcasts. Single tracks, mashups & full albums are not permitted</p>

              <div className="upload-input-lower-box">
                <div className="upload-image-preview-box">
                  <i className="fa fa-cloud-upload fa-5x" aria-hidden="true"></i>
                  <div className="upload-input-image">
                    {buttonAction}Image
                    <input
                      type="file"
                      onChange={ this.updateImage }
                      />
                  </div>
                  { imagePreview }
                </div>

                <div className="upload-input-lower-box-text-input-box">
                  <input
                    type="text"
                    value={this.state.title}
                    className="u-f-title"
                    placeholder="Choose a title for your upload"
                    onChange={this.update('title')}
                    />
                  <input
                    type="text"
                    value={this.state.description}
                    placeholder="Make a description for your upload"
                    className="u-f-descript"
                    onChange={this.update('description')}
                    />
                  <div className="u-f-tags-box">
                    { tagCheckboxes }
                  </div>
                </div>
              </div>

              <button>Publish</button>
            </form>
            { deleteButton }
          </div>

          <div className="foot-filler"></div>
        </section>
      )
    }
  }
}


export default UploadForm;
