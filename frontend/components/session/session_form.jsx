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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.formType === 'login') {
      this.props.login(user)
				.then(() => this.props.history.push('/home'))
    } else {
      this.props.signup(user)
				.then(() => this.props.history.push('/home'));
    }
  }

	renderErrors() {
    return(
      <div className="auth-form-errors">{this.props.errors}</div>
    );
  }

  update(stateKey) {
    return e => {
			this.setState({ [stateKey]: e.target.value });
			this.props.clearErrors();
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
          <div className="auth-modal-container">
            <div className="link-nav-box">
              <Link to={`/login`}>Login</Link>
              <Link to={`/signup`}>Sign up</Link>
            </div>

						{ this.renderErrors() }

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
              <button>{formName}</button>
            </form>
          </div>

        <div className="auth-modal-background">
        </div>
      </section>
    )
  }
}

export default withRouter(SessionForm);
