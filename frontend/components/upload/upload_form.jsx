import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      audio: "",
      image: "",
    }

    this.handleSubmit = this.handleSubmit();
  }

  handleSubmit() {

  }

  update(stateKey) {
    return e => {
			this.setState({ [stateKey]: e.target.value });
			this.props.clearErrors();
		}
  }


  render() {
    return (
      <section className="upload-form-container">
        <div className="upload-header">
          <h1>Upload</h1>
        </div>

        <div className="upload-banners-container">
        </div>

        <div className="upload-form-box">
          <form onSubmit={ this.handleSubmit }>
            <div className="upload-input-audio">
              Choose File
              <input
                type="file"
                />
            </div>
            <p>Please choose an audio file - MP3, AAC, M4A, MP4 audio or OGG types are accepted.</p>
            <p>Selector is for Radio Shows, DJ Mixes & Podcasts. Single tracks, mashups & full albums are not permitted</p>
            <div className="upload-input-image">
              Choose Image
              <input
                type="file"
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


export default UploadForm;
