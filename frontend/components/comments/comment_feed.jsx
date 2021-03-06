import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group';
import javascript_time_ago from 'javascript-time-ago';
javascript_time_ago.locale(require('javascript-time-ago/locales/en'));
import english from 'javascript-time-ago/locales/en';

class CommentFeed extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }


  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(e.target.id)
  }


  render() {
    if (!values(this.props.comments).length) {
      return <div></div>;

    } else {
      let timeAgoJS = new javascript_time_ago('en-US');

      let comments = values(this.props.comments).sort((a,b) => b.id - a.id)
        .map(comment => {
          const timeAgo = timeAgoJS.format(new Date(comment.created_at));
          let deleteButton = "";


          if (this.props.currentUser &&
            comment.user_id === this.props.currentUser.id) {

            deleteButton =  <div className="comment-delete-button" onClick={ this.handleDelete }>
              <i className="fa fa-times" aria-hidden="true" id={comment.id} ></i>
            </div>;
          }

          return (
            <li className="comment-feed-item" key={ comment.id }>

              <div className="comment-feed-item-img-box">
                <Link to={`/user/${comment.user_id}`}>
                  <img src={ comment.user_avatar } />
                </Link>
              </div>

              <div className="comment-feed-item-content">
                <div className="comment-feed-item-head">
                  <Link to={`/user/${comment.user_id}`}>
                    <h4>{ comment.user_name }</h4>
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
          <CSSTransitionGroup
            transitionName="tgroup-comments"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300} >

            { comments }
          </CSSTransitionGroup>
        </ul>
      )
    }

  }
}

export default CommentFeed;
