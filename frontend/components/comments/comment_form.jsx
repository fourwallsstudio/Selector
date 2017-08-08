import React from 'react'
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { body: "" }

    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelChange = this.handelChange.bind(this);
  }

  handelSubmit(e) {
    e.preventDefault();

    this.props.createComment({
      body: this.state.body,
      show_id: this.props.show.id
    })

    this.setState({ body: "" })
  }

  handelChange(e) {
    e.preventDefault();

    this.setState({ body: e.target.value })
  }

  render() {
    if (!this.props.currentUser) {
      return <div></div>;
    } else {
      const { show, currentUser } = this.props

      return (
        <div className="comment-form-container">

          <div className="comment-form-img-box">
            <Link to={`/user/${currentUser.id}`}>
              <img src={ currentUser.avatar_url } />
            </Link>
          </div>

          <form className="comment-form-form"
            onSubmit={ this.handelSubmit }>
            <textarea className="comment-form-input"
              onChange={ this.handelChange }
              value={ this.state.body }
              placeholder={`What did you think of ${show.author_username}'s ${show.title}?`}>

            </textarea>
            <div className="comment-form-button-box" >
              <button>Post comment</button>
            </div>
          </form>

        </div>
      )
    }
  }

}

export default CommentForm;
