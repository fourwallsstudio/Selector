import React from 'react'
import { Howl } from 'howler'
import { values, merge } from 'lodash'
import { withRouter, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group';

// UTIL
import { scaleImg } from '../../util/img_util';
import { renderLog, nextPropsLog, fired } from '../../util/debugging_util';

// COMPONENTS
import UserControls from './user_controls'
import CommentFeed from '../comments/comment_feed'
import CommentForm from '../comments/comment_form'
import ShowProfileAside from './show_profile_aside'

// TIME AGO
import english from 'javascript-time-ago/locales/en'
import javascript_time_ago from 'javascript-time-ago'
javascript_time_ago.locale(require('javascript-time-ago/locales/en'))


class ShowProfile extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleStopPreview = this.handleStopPreview.bind(this);
    this.handleClickTag = this.handleClickTag.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleShow(this.props.showId)
    this.props.fetchComments(this.props.showId)
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.showId !== nextProps.showId ) {
      nextProps.fetchSingleShow(nextProps.showId)
    }
  }

  handleDelete(e) {
    e.preventDefault();

    if (this.props.player.playerQueue.length &&
      this.props.player.playerQueue[0].show_id === this.props.showId) {

      this.props.player.playerQueue[0].show.pause();
      this.props.removeHowlerPlay(this.props.player.playerQueue);
    }

    this.props.deleteShow(this.props.show.id)
      .then( () => this.props.history.push('/home') );
  }

  handleEditClick(e) {
    e.preventDefault();
    this.props.history.push('/edit/${this.props.show.id}');
  }

  handlePlayClick(e) {
    e.preventDefault();
    this.props.stopPreview(this.props.preview.howlPreview);
    const playerQueue = this.props.player.playerQueue;

    if (!this.props.player.loading) {

      if (
        !playerQueue.length ||
        playerQueue[0].show_id !== this.props.show.id
      ) {

          if (playerQueue.length) {
            playerQueue[0].show.pause();
            this.props.updatePlayStatus(playerQueue[0].show._sounds[0]._paused);
          }

          let showQueue = playerQueue.map( q => q.show_id )

          if (showQueue.includes(this.props.show.id)) {
            playerQueue[0].show.pause()
            this.props.updatePlayStatus(true);
            this.props.changePlayerOrder(
              playerQueue,
              showQueue.indexOf(this.props.show.id),
            )
          } else {
            this.props.createNewPlay(this.props.show, this.props.currentUser);
          }

        } else {

          const current = playerQueue[0].show._sounds[0];

          if (current._paused) {
            playerQueue[0].show.play();
          } else {
            playerQueue[0].show.pause();
          }

          this.props.updatePlayStatus(current._paused);
        }
    }
  }

  handlePreview() {
    if (
      this.props.player.status !== 'playing' &&
      this.props.preview.status !== 'previewing'
    ) {
      this.props.startPreview(this.props.show.audio_url);
    }
  };

  handleStopPreview() {
    this.props.stopPreview(this.props.preview.howlPreview);
  }

  handleClickTag(e) {
    e.preventDefault();
    this.props.updateCurrentTag(e.currentTarget.value)
    this.props.fetchShowsByTag(e.currentTarget.value)
      .then( () => {
        this.props.updateFilter('tag')
        this.props.history.push('/home')
      })
  }

  handleFavorite() {
    if (this.props.currentUser) {

      const favorite = {
        user_id: this.props.currentUser.id,
        show_id: this.props.showId
      };

      if (this.props.currentUser.favorite_ids.includes(this.props.showId)) {
        this.props.deleteFavorite(favorite);
      } else {
        this.props.createFavorite(favorite);
      }
    }
  }

  _getTags() {
    return (
      this.props.show.tag_ids.map( id => {
        let tag = this.props.tags[id]
        return (
          <li key={ tag.id }
            value={ tag.id }
            className="s-p-tag"
            onClick={ this.handleClickTag }>
            <p>{ tag.genre }</p>
          </li>
        )
      })
    )
  }

  _timeAgo() {
    const timeAgoJS = new javascript_time_ago('en-US');
    return timeAgoJS.format(new Date(this.props.show.created_at));
  }


  render() {
    if (!this.props.show) {
      return <div>loading...</div>;

    } else {

      const show = this.props.show;
      const newImgSize = scaleImg(300, show)
      const timeAgo = this._timeAgo();
      const playerQueue = this.props.player.playerQueue;
      const previewActive = this.props.preview.status === 'previewing' ? "preview-active" : "";
      let playDisplay;


      if (playerQueue.length && playerQueue[0].show_id === show.id) {
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


                <CSSTransitionGroup
                  transitionName="tgroup-play-circle-box"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false} >

                  <div className="play-circle-box"
                      onClick={ this.handlePlayClick }
                      onMouseOver={ this.handlePreview }
                      onMouseLeave={ this.handleStopPreview} >

                      { playDisplay }

                      <div className={`play-circle-preview-backfill ${previewActive}`}></div>
                  </div>
                  <p className={`play-circle-preview-notice ${previewActive}`}>preview</p>
                </CSSTransitionGroup>

                <CSSTransitionGroup
                  transitionName="tgroup-s-p-head-items"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false} >

                  <div className="s-p-head-items-right">
                    <h1>{ show.title }</h1>

                    <div className="s-p-h-infobar">
                      <div className="s-p-h-foot-left">
                        <div className="s-p-author-credit">
                          <p>by</p>
                          <Link to={ `/user/${show.author_id}` }>{ show.author_username }</Link>
                        </div>
                      </div>

                      <div className="s-p-h-foot-right">
                        <div className="s-p-h-b-r hp">
                          <i className="fa fa-headphones fa-lg" aria-hidden="true"></i>
                          <p>{ show.plays }</p>
                        </div>
                        <div className="s-p-h-b-r cal">
                          <i className="fa fa-calendar fa-lg" aria-hidden="true"></i>
                          <p>{ timeAgo }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransitionGroup>


                <div className="s-p-h-overlap-footer">
                  <div
                    className="s-p-h-b fav"
                    onClick={ this.handleFavorite } >
                    <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                    {
                      this.props.currentUser.favorite_ids.includes(show.id)
                      ? 'Unfavorite'
                      : 'Favorite'
                    }
                  </div>
                  <div className="s-p-h-b repost inactive">
                    <i className="fa fa-retweet fa-lg" aria-hidden="true"></i>
                    Add to
                  </div>
                  <div className="s-p-h-b share inactive">
                    <i className="fa fa-recycle fa-lg" aria-hidden="true"></i>
                    Repost
                  </div>
                  <div className="s-p-h-b add inactive">
                    <i className="fa fa-music fa-lg" aria-hidden="true"></i>
                    Share
                  </div>
                </div>
              </div>


              <CSSTransitionGroup
                transitionName="tgroup-show-img"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false} >
                <div className="show-image-box">
                  <img
                    src={ show.image_url }
                    style={{ width: newImgSize['width'], height: newImgSize['height'] }}
                    />
                </div>
              </CSSTransitionGroup>
            </div>
          </div>

          {
            this.props.currentUser
              && this.props.currentUser.id === show.author_id
              && <UserControls show={ show } handleDelete={ this.handleDelete } />
          }

          <div className="s-p-main-container">
            <div className="s-p-about-container">
              <div className="s-p-about-head">
                <h2>About the show</h2>
              </div>

              <ul className="s-p-about-head-under">
                {
                  show.tag_ids.length
                    && this.props.tags
                    && this._getTags()
                }
              </ul>

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
                currentUser={ this.props.currentUser }
                deleteComment={ this.props.deleteComment } />

            </div>

            <ShowProfileAside show={ show } />
          </div>

          <div className="foot-filler"></div>
        </section>
      )
    }
  }
}

export default withRouter(ShowProfile);
