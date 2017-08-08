import React from 'react';
import MustBeLoggedIn from '../errors_notices/must_be_logged_in';

class UserForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bio: "",
      city: "",
      country: "",
      avatar: null,
    },

    this.avatarPreviewUrl = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  componentDidMount() {
    const currentUser = this.props.currentUser
    this.avatarPreviewUrl = currentUser.avatar_url

    this.setState(
      {
        bio: currentUser.bio || "",
        city: currentUser.city || "",
        country: currentUser.country || ""
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let file = this.state.imageFile;
    let formData = new FormData();
    formData.append("user[bio]", this.state.bio);
    formData.append("user[city]", this.state.city);
    formData.append("user[country]", this.state.country);

    if (this.state.avatar) {
      formData.append("user[avatar]", this.state.avatar);
    }


    this.props.editUser(this.props.currentUser.id, formData)
      .then( result => this.props.history.push(`/user/${result.user.id}`));
  }

  renderErrors() {
    return(
      <div className="upload-form-errors">{this.props.errors}</div>
    );
  }

  update(stateKey) {
    return e => {
			this.setState({ [stateKey]: e.target.value });
      if (this.props.errors) this.props.clearErrors();
		}
  }

  updateImage(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.avatarPreviewUrl = reader.result;
      this.setState({ avatar: file });
    }

    reader.readAsDataURL(file);
  }


  render() {
    if (!this.props.currentUser || this.props.currentUser.id !== parseInt(this.props.userId)) {
      return (
        <MustBeLoggedIn type="edit" />
      )
    } else {
      let avatarPreview = "";

      if (this.avatarPreviewUrl !== "") {
        avatarPreview = <img className="avatar-preview" src={this.avatarPreviewUrl} />;
      }

      return (
        <section className="user-form-container">
          <div className="user-header">
            <h1>Your Profile Settings</h1>
          </div>

          <div className="user-form-box">

            { this.renderErrors() }

            <form onSubmit={ this.handleSubmit }>

              <div className="user-input-box">
                <div className="user-image-preview-box">
                  <i className="fa fa-cloud-upload fa-5x" aria-hidden="true"></i>
                  <div className="user-input-image">
                    Change Image
                    <input
                      type="file"
                      onChange={ this.updateImage }
                      />
                  </div>
                  { avatarPreview }
                </div>

                <div className="user-input-lower-box-text-input-box">
                  <textarea
                    type="text"
                    value={this.state.bio}
                    className="u-f-bio"
                    placeholder="Enter a bio"
                    onChange={this.update('bio')}
                    />
                  <input
                    type="text"
                    value={this.state.city}
                    placeholder="Enter city"
                    className="u-f-city"
                    onChange={this.update('city')}
                    />
                    <input
                      type="text"
                      value={this.state.country}
                      placeholder="Enter country"
                      className="u-f-country"
                      onChange={this.update('country')}
                      />
                </div>
              </div>

              <div className="user-form-button-box">
                <button>Save</button>
              </div>
            </form>
          </div>

          <div className="foot-filler"></div>
        </section>
      )
    }
  }
}


export default UserForm;
