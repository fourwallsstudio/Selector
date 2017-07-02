import React from 'react';
import { Link } from 'react-router-dom';
import { merge, values } from 'lodash';
import { selectComments } from '../../reducers/selecters';
import javascript_time_ago from 'javascript-time-ago';
javascript_time_ago.locale(require('javascript-time-ago/locales/en'));
import english from 'javascript-time-ago/locales/en';

class CommentFeed extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: {},
      users: {}
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      comments: nextProps.comments,
      users: nextProps.users
    })
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(e.target.id)
  }


  render() {
    if (!this.state.comments.length &&
      !values(this.state.users).length) {

      return <div></div>;

    } else {
      let timeAgoJS = new javascript_time_ago('en-US');

      let comments = values(this.state.comments).sort((a,b) => {
        return b.id - a.id;
      }).map(comment => {
        let timeAgo = timeAgoJS.format(new Date(comment.created_at));
        let user = this.state.users[comment.user_id];
        let deleteButton = "";

        if (this.props.currentUser &&
          user.id === this.props.currentUser.id) {

          deleteButton =  <div className="comment-delete-button" onClick={ this.handleDelete }>
            <i className="fa fa-times" aria-hidden="true" id={comment.id} ></i>
          </div>;
        }

        return (
          <li className="comment-feed-item" key={ comment.id }>

            <div className="comment-feed-item-img-box">
              <Link to={`/user/${comment.user_id}`}>
                <img src={ user.avatar_url } />
              </Link>
            </div>

            <div className="comment-feed-item-content">
              <div className="comment-feed-item-head">
                <Link to={`/user/${comment.user_id}`}>
                  <h4>{ user.username }</h4>
                </Link>
                <p>{ timeAgo }</p>
                { deleteButton }
              </div>

              <p className="comment-feed-item-body">
                { comment.body }
              </p>
            </div>

          </li>
        )
      })

      return (
        <ul className="comment-feed-container">
          { comments }
        </ul>
      )
    }

  }
}

export default CommentFeed;
