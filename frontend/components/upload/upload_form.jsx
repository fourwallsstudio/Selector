import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      audio: null,
      image: null,
    },
    this.audioFileName = "";
    this.imagePreviewUrl = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'edit') {
      this.props.fetchSingleShow(this.props.showId);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.imagePreviewUrl = nextProps.show.image_url
    this.audioFileName = nextProps.show.title;

    this.setState({
      title: nextProps.show.title,
      description: nextProps.show.description,
      audio: nextProps.show.audio_url,
      image: nextProps.show.image_url
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    var file = this.state.imageFile;
    var formData = new FormData();
    formData.append("show[title]", this.state.title);
    formData.append("show[description]", this.state.description);
    formData.append("show[image]", this.state.image);
    formData.append("show[audio]", this.state.audio);

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

  render() {
    if (!this.props.currentUser) {
      return (
        <div>must be logged in to upload</div>
      )
    } else {
      let imagePreview = "";
      let deleteButton = "";
      let formName = 'Upload';
      let buttonAction = 'Choose ';

      if (this.imagePreviewUrl !== "") {
        imagePreview = <img className="image-preview" src={this.imagePreviewUrl} />;
      }

      if (this.props.formType === 'edit') {
        deleteButton = <p onClick={ this.handleDelete } className="edit-form-delete-link">Delete</p>;
        formName = 'Update';
        buttonAction = 'Change ';
      }

      return (
        <section className="upload-form-container">
          <div className="upload-header">
            <h1>{formName}</h1>
          </div>

          <div className="upload-banners-container">
            <div className="upload-spinner-box">
              <i className="fa fa-refresh fa-5x" aria-hidden="true"></i>
            </div>
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
                    placeholder="Choose a tilte for your upload"
                    onChange={this.update('title')}
                    />
                  <input
                    type="text"
                    value={this.state.description}
                    placeholder="Make a description for your upload"
                    className="u-f-descript"
                    onChange={this.update('description')}
                    />
                </div>
              </div>

              <button>Publish</button>
            </form>
            { deleteButton }
          </div>

        </section>
      )
    }
  }
}


export default UploadForm;
