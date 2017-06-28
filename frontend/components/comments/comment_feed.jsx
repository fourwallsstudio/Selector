import React from 'react';
import { Link } from 'react-router-dom';
import { merge, values } from 'lodash';
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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      comments: merge({}, this.state.comments, nextProps.show.comments),
      users: merge({}, this.state.users, nextProps.listenersData)
    })
  }


  render() {
    console.log("state", this.state)
    let timeAgoJS = new javascript_time_ago('en-US');
    let that = this;
    let comments = values(this.state.comments).sort((a,b) => {
      return b.id - a.id;
    }).map(comment => {
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
