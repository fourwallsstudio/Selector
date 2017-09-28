import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Draggable from 'react-draggable';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
      email: "",
			password: ""
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleGuest = this.handleGuest.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { ...this.state }

    if (this.props.formType === 'login') {
      this.props.login(user)
				.then(() => this.props.history.push('/home'))
    } else {
      this.props.signup(user)
				.then(() => this.props.history.push('/home'));
    }
  }

	handleGuest(e) {
		e.preventDefault();

		const user = {
				username: 'guest',
				email: 'guest',
				password: '12345678'
			};

		this.props.login(user)
		.then(() => this.props.history.push('/home'));
	}

	handleClose(e) {
		e.preventDefault();
		this.props.history.push('/');
	}

	renderErrors() {
    return(
      <div className="auth-form-errors">{this.props.errors[0]}</div>
    );
  }

  update(stateKey) {
    return e => {
			this.setState({ [stateKey]: e.target.value });
			if (this.props.errors.length) this.props.clearErrors();
		}
  }

  render() {
    const formName = this.props.formType === 'login' ? 'Login' : "Sign up";
    let emailInput;

    if (this.props.formType === 'signup') {
      emailInput = <div className="a-m-input">
                      <input
                      type="text"
                      value={this.state.email}
                      placeholder="Enter your email"
                      className="a-m-input"
                      onChange={this.update('email')} />
                  </div>;
    } else {
      emailInput = "";
    }

    return (
      <section>
				<div className="home-mask"></div>
				<div className="home-img-box"></div>
				
          <div className="auth-modal-container">
            <div className="link-nav-box">
              <Link to={`/login`}>Login</Link>
              <Link to={`/signup`}>Sign up</Link>
							<div className="close-login-button" onClick={ this.handleClose }>
								<i className="fa fa-times" aria-hidden="true"></i>
							</div>
            </div>


						<div className="auth-form-errors-box">
							{ this.renderErrors() }
						</div>
						<div className="guest-login-button-box">
							<button className="guest-login-button" onClick={ this.handleGuest }>Login as guest</button>
						</div>
						<div className="guest-login">
							<p>or</p>
						</div>

            <form onSubmit={ this.handleSubmit }>
              <div className="a-m-input">
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Enter your username"
                  onChange={this.update('username')}
                  />
              </div>

              { emailInput }

              <div className="a-m-input">
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Enter your password"
                  className="a-m-input"
                  onChange={this.update('password')}
                  />
              </div>
              <button className="auth-modal-submit">{formName}</button>
            </form>
          </div>

        <div className="auth-modal-background">
        </div>
      </section>
    )
  }
}

export default withRouter(SessionForm);
