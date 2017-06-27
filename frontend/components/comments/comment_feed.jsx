import React from 'react';
import { Link } from 'react-router-dom';
import javascript_time_ago from 'javascript-time-ago';
javascript_time_ago.locale(require('javascript-time-ago/locales/en'));
import english from 'javascript-time-ago/locales/en';

class CommentFeed extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      users: {}
    }
  }


  componentDidMount() {
    this.props.show.comments.forEach(comment => {
      this.setState({
        comments: this.state.comments.concat([comment])
      })

      this.props.fetchUser(comment.user_id)
        .then( result => {
          this.setState({
            users: {
              [result.user.id]: {
              username: result.user.username,
              avatar: result.user.avatar_url
              }
            }
          })
        })
    })
  }


  render() {
    let timeAgoJS = new javascript_time_ago('en-US');
    let that = this;

    let comments = this.state.comments.map(comment => {
      let timeAgo = timeAgoJS.format(new Date(comment.created_at));
      let user = that.state.users[comment.user_id];


      return (
        <li className="comment-feed-item" key={ comment.id }>

          <div className="comment-feed-item-img-box">
            <Link to={`/user/${comment.user_id}`}>
              <img src={ user.avatar_url } />
            </Link>
          </div>

          <div className="comment-feed-item-content">
            <div className="comment-feed-item-head">
              <h4>{ user.username }</h4>
              <p>{ timeAgo }</p>
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

export default CommentFeed;
