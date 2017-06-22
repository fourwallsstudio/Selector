import React from 'react';
import FileUploadProgress  from 'react-fileupload-progress';

class UploadForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      audio: "",
      image: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.uploadShow(this.state);
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
    this.setState({ audio: file });
  }

  updateImage(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.setState({ image: file });
  }


  render() {
    if (!this.props.currentUser) {
      return (
        <div>must be logged in to upload</div>
      )
    } else {
      return (
        <section className="upload-form-container">
          <div className="upload-header">
            <h1>Upload</h1>
          </div>

          <div className="upload-banners-container">
          </div>

          <div className="upload-form-box">

            { this.renderErrors() }

            <form onSubmit={ this.handleSubmit }>
              <div className="upload-input-audio">
                Choose File
                <input
                  type="file"
                  onChange={ this.updateAudio }
                  />
              </div>
              <p>Please choose an audio file - MP3, AAC, M4A, MP4 audio or OGG types are accepted.</p>
              <p>Selector is for Radio Shows, DJ Mixes & Podcasts. Single tracks, mashups & full albums are not permitted</p>
              <div className="upload-input-image">
                Choose Image
                <input
                  type="file"
                  onChange={ this.updateImage }
                  />
              </div>
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
              <button>Upload</button>
            </form>
          </div>

        </section>
      )
    }
  }
}


export default UploadForm;
