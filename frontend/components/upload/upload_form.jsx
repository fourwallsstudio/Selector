import React from 'react';
import { values } from 'lodash';
import renderHTML from 'react-render-html';
import MustBeLoggedIn from '../errors_notices/must_be_logged_in';

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
    if (this.props.show) {
      this.imagePreviewUrl = this.props.show.image_url
      this.audioFileName = this.props.show.title;
      this.setState(
        {
          title: this.props.show.title,
          description: this.props.show.description,
          tagIds: this.props.show.tag_ids
        }
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length) this.setState({ uploadInProgress: false })
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({ uploadInProgress: true });
    window.scrollTo(0, 0);

    var file = this.state.imageFile;
    var formData = new FormData();
    formData.append("show[title]", this.state.title);
    formData.append("show[description]", this.state.description);

    if (this.state.tagIds.length) {
      this.state.tagIds.forEach(id => {
        formData.append("show[tag_ids][]", id);
      })
    } else {
      formData.append("show[tag_ids][]", "");
    }

    if (this.state.image) formData.append("show[image]", this.state.image)

    if (this.state.audio) formData.append("show[audio]", this.state.audio)

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
      <div className="upload-form-errors">{this.props.errors[0]}</div>
    );
  }

  update(stateKey) {
    return e => {
			this.setState({ [stateKey]: e.target.value });

      if (this.props.errors) this.props.clearErrors()
		}
  }

  updateAudio(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.audioFileName = file.name;
    this.setState({ audio: file });
    if (this.props.errors) this.props.clearErrors();
  }

  updateImage(e) {
    e.preventDefault();

    if (this.props.errors) this.props.clearErrors();

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
    if (this.state.tagIds.includes(parseInt(e.currentTarget.value))) {
      let i = this.state.tagIds.indexOf(parseInt(e.currentTarget.value))
      let newState = this.state.tagIds
      newState.splice(i, 1)

      this.setState({ tagIds: newState })

    } else {
      let nextState = this.state.tagIds
      nextState.push(parseInt(e.currentTarget.value))
      this.setState({ tagIds: nextState })
    }
  }

  render() {
    if (!this.props.currentUser) {
      return <MustBeLoggedIn type="upload" />;

    } else {
      let tagCheckboxes;
      let imagePreview = "";
      let deleteButton = "";
      let formName = 'Upload';
      let buttonAction = 'Choose ';
      let uploadInProgress = this.state.uploadInProgress ? "upload-in-progress" : "";

      // if (this.state.uploadInProgress) uploadInProgress = "upload-in-progress";

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
            <li key={ tag.id }
              className={`u-f-tag ${ this.state.tagIds.includes(tag.id) ? "checked" : "" }`}
              value={ tag.id }
              onClick={ this.handleCheckbox } >
              <p>{ tag.genre }</p>
            </li>
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

          { this.renderErrors() }

          <div className="upload-form-box">

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
                  <ul className="u-f-tags-box">
                    { tagCheckboxes }
                  </ul>
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
