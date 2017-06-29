import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Howl } from 'howler';
import { values, merge } from 'lodash';
import ShowProfileAside from './show_profile_aside';
import CommentFeed from '../comments/comment_feed';
import CommentForm from '../comments/comment_form';
import javascript_time_ago from 'javascript-time-ago'
javascript_time_ago.locale(require('javascript-time-ago/locales/en'));
import english from 'javascript-time-ago/locales/en'

class ShowProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.fetchUsers = this.props.fetchUsers.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleStopPreview = this.handleStopPreview.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleShow(this.props.showId)

    this.props.fetchComments(this.props.showId)

    this.props.fetchUsers(this.props.showId)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.showId !== newProps.showId ) {
      newProps.fetchSingleShow(newProps.showId)
    }

  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteShow(this.props.show.id)
      .then( () => this.props.history.push('/home') );
  }

  handleEditClick(e) {
    e.preventDefault();
    this.props.history.push('/edit/${this.props.show.id}');
  }

  handlePlayClick(e) {
    e.preventDefault();
    if (!this.props.player.player.length ||
      this.props.player.player[0]._sounds[0].show_id !== this.props.showId) {

      const queueItem = {
        show_id: this.props.showId,
        user_id: this.props.currentUser.id,
        seek: 0
      }
      this.props.createQueueItem(queueItem);

    } else {

      let current = this.props.player.player[0]._sounds[0];

      if (current._paused) {
        this.props.player.player[0].play();
      } else {
        this.props.player.player[0].pause();
      }
    }
  }

  handlePreview() {
    if (this.props.player.status !== 'playing' &&
        this.props.preview.status !== 'previewing') {
      this.props.startPreview(this.props.show.audio_url);
    }
  };

  handleStopPreview() {
    this.props.stopPreview(this.props.preview.howlPreview);
  }

  render() {
    if (!this.props.show) {
      return (
        <div>loading</div>
      )

    } else {

      const show = this.props.show;
      let userControls;
      let playDisplay;
      let timeAgoJS = new javascript_time_ago('en-US');
      let timeAgo = timeAgoJS.format(new Date(this.props.show.created_at));
      let showAside;

      if (values(this.props.users).length) {
        showAside = <ShowProfileAside show={ show } users={ this.props.users }/>;
      }

      if (this.props.player.player.length && this.props.queue[0].show_id === show.id) {
        if (this.props.player.status === 'playing') {
          playDisplay = (
            <svg className="play-circle-pause" viewBox="0 0 16 20">
              <path d="M3.89,0H1.5A1.5,1.5,0,0,0,0,1.5v17A1.5,1.5,0,0,0,1.5,20H3.89A1.6,1.6,0,0,0,5.5,18.5V1.5A1.6,1.6,0,0,0,3.89,0Zm10.5,0H12a1.5,1.5,0,0,0-1.5,1.5v17A1.5,1.5,0,0,0,12,20h2.39A1.6,1.6,0,0,0,16,18.5V1.5A1.6,1.6,0,0,0,14.39,0Z"/>
            </svg>
          );
        } else {
          playDisplay = (
            <svg className="play-circle-play" viewBox="0 0 16 20">
              <path d="M0,18V2C0,0.21,1.35-.51,3,0.38l11.73,8c1.66,0.89,1.66,2.33,0,3.21L3,19.61C1.36,20.49,0,19.77,0,18Z"/>
            </svg>
          );
        }
      } else {
        playDisplay = (
          <svg className="play-circle-play" viewBox="0 0 16 20">
            <path d="M0,18V2C0,0.21,1.35-.51,3,0.38l11.73,8c1.66,0.89,1.66,2.33,0,3.21L3,19.61C1.36,20.49,0,19.77,0,18Z"/>
          </svg>
        );
      }

      if (this.props.currentUser.id === show.author_id) {
        userControls = <div className="show-user-controls-container">
                        <Link to={`/edit/${show.id}`} className="s-u-c-b edit">
                          <i className="fa fa-toggle-on fa-lg" aria-hidden="true"></i>
                          <h2>Edit</h2>
                        </Link>

                        <div className="s-u-c-b embed">
                          <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                          <h2>Embed</h2>
                        </div>

                        <div className="s-u-c-b stats">
                          <i className="fa fa-trophy fa-lg" aria-hidden="true"></i>
                          <h2>Stats</h2>
                        </div>

                        <div className="s-u-c-b boost">
                          <i className="fa fa-bullhorn fa-lg" aria-hidden="true"></i>
                          <h2>Boost</h2>
                        </div>

                        <div className="s-u-c-b share">
                          <i className="fa fa-upload fa-lg" aria-hidden="true"></i>
                          <h2>Share</h2>
                        </div>

                        <div className="s-u-c-b delete" onClick={ this.handleDelete }>
                          <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                          <h2>Delete</h2>
                        </div>
                      </div>;
      }
      return (
        <section className="show-profile-container">
          <div className="show-profile-header">
            <img className="background-photo" src={ show.image_url } />
            <div className="s-p-head-base">
            </div>
          </div>

          <div className="header-overlap">
            <div className="s-p-inside-header-box">
              <div className="s-p-head-items-box">
                <div className="play-circle-box"
                    onClick={ this.handlePlayClick }
                    onMouseOver={ this.handlePreview }
                    onMouseLeave={ this.handleStopPreview}>

                    { playDisplay }

                </div>

                <div className="s-p-head-items-right">
                  <h1>{ show.title }</h1>

                  <div className="s-p-h-infobar">
                    <div className="s-p-h-foot-left">
                      <div className="s-p-author-credit">
                        <p>by</p>
                        <Link to={ `/user/${show.author_id}` }>{ show.author_username }</Link>
                      </div>
                      <button className="s-p-h-follow-b">Follow</button>
                    </div>

                    <div className="s-p-h-foot-right">
                      <div className="s-p-h-b-r hp">
                        <i className="fa fa-headphones fa-lg" aria-hidden="true"></i>
                        <p className="s-p-h-b-r-plays">{ show.plays }</p>
                      </div>
                      <div className="s-p-h-b-r clock">
                        <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                      </div>
                      <div className="s-p-h-b-r cal">
                        <i className="fa fa-calendar fa-lg" aria-hidden="true"></i>
                        <p className="s-p-h-b-r-time-ago">{ timeAgo }</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="s-p-h-overlap-footer">
                  <div className="s-p-h-b fav">
                    <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                    Favorite
                  </div>
                  <div className="s-p-h-b repost">
                    <i className="fa fa-retweet fa-lg" aria-hidden="true"></i>
                    Add to
                  </div>
                  <div className="s-p-h-b share">
                    <i className="fa fa-recycle fa-lg" aria-hidden="true"></i>
                    Repost
                  </div>
                  <div className="s-p-h-b add">
                    <i className="fa fa-music fa-lg" aria-hidden="true"></i>
                    Share
                  </div>
                </div>
              </div>

              <div className="show-image-box">
                <img src={ show.image_url } />
              </div>
            </div>



          </div>

          { userControls }

          <div className="s-p-main-container">
            <div className="s-p-about-container">
              <div className="s-p-about-head">
                <h2>About the show</h2>
              </div>

              <div className="s-p-about-head-under">

              </div>

              <div className="s-p-about">
                <div className="s-p-about-description">
                  <p>{ show.description }</p>
                </div>
              </div>

              <div className="s-p-comments-header">
                <h2>Comments</h2>
              </div>

              <CommentForm show={ show }
                currentUser={ this.props.currentUser }
                createComment={ this.props.createComment } />

              <CommentFeed show={ show }
                comments={ this.props.comments }
                users={ this.props.users }
                currentUser={ this.props.currentUser }
                deleteComment={ this.props.deleteComment } />

            </div>

              { showAside }
          </div>

          <div className="foot-filler"></div>
        </section>
      )
    }
  }
}

export default withRouter(ShowProfile);
