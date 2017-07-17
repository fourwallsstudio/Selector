import React from 'react';
import { Link } from 'react-router-dom';
import javascript_time_ago from 'javascript-time-ago';
javascript_time_ago.locale(require('javascript-time-ago/locales/en'));

class ShowFeedItem extends React.Component {
  constructor(props) {
    super(props)

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleStopPreview = this.handleStopPreview.bind(this);
  }

  handlePlayClick(e) {
    e.preventDefault();
    if (this.props.preview.status !== 'off') {
      this.props.stopPreview(this.props.preview.howlPreview);
    }

    let playerQueue = this.props.player.playerQueue;

    if (!this.props.player.loading) {

      if (!playerQueue.length ||
        playerQueue[0].show_id !== this.props.show.id) {

          if (playerQueue.length) {
            playerQueue[0].show.pause();
            this.props.updatePlayStatus(playerQueue[0].show._sounds[0]._paused);
          }

          this.props.createNewPlay(this.props.show, this.props.currentUser);

        } else {

          let current = playerQueue[0].show._sounds[0];

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
    if (!this.props.player.loading &&
        this.props.player.status !== 'playing' &&
        this.props.preview.status !== 'previewing') {
      this.props.startPreview(this.props.show.audio_url);
    }
  };

  handleStopPreview() {
    if (this.props.preview.status !== "off") {
      this.props.stopPreview(this.props.preview.howlPreview);
    }
  }

  render() {
    let show = this.props.show;
    let playerQueue = this.props.player.playerQueue;
    let playDisplay;
    let timeAgoJS = new javascript_time_ago('en-US');
    let timeAgo = timeAgoJS.format(new Date(this.props.show.created_at));

    if (playerQueue.length && playerQueue[0].show_id === show.id) {
      if (this.props.player.status === 'playing') {
        playDisplay = (
          <svg className="show-feed-play-circle-pause">
            <path d="M3.89,0H1.5A1.5,1.5,0,0,0,0,1.5v17A1.5,1.5,0,0,0,1.5,20H3.89A1.6,1.6,0,0,0,5.5,18.5V1.5A1.6,1.6,0,0,0,3.89,0Zm10.5,0H12a1.5,1.5,0,0,0-1.5,1.5v17A1.5,1.5,0,0,0,12,20h2.39A1.6,1.6,0,0,0,16,18.5V1.5A1.6,1.6,0,0,0,14.39,0Z"/>
          </svg>
        );
      } else {
        playDisplay = (
          <svg className="show-feed-play-circle-play">
            <path d="M0,18V2C0,0.21,1.35-.51,3,0.38l11.73,8c1.66,0.89,1.66,2.33,0,3.21L3,19.61C1.36,20.49,0,19.77,0,18Z"/>
          </svg>
        );
      }
    } else {
      playDisplay = (
        <svg className="show-feed-play-circle-play">
          <path d="M0,18V2C0,0.21,1.35-.51,3,0.38l11.73,8c1.66,0.89,1.66,2.33,0,3.21L3,19.61C1.36,20.49,0,19.77,0,18Z"/>
        </svg>
      );
    }

    return (
      <li id={ show.id } className="show-feed-item-container group">
        <div className="s-f-i-head">
        </div>

        <div className="s-f-i-main">
          <div className="img-box">
            <Link to={`/show/${show.id}`} className="play-title">
              <img src={ show.image_url } />
            </Link>

          </div>
          <div className="play-box" >
            <div className="play-arrow"
              onClick={ this.handlePlayClick }
              onMouseOver={ this.handlePreview }
              onMouseLeave={ this.handleStopPreview} >

              { playDisplay }

            </div>


            <div className="play-head">
              <Link to={`/show/${show.id}`} className="play-title">{ show.title }</Link>
              <div className="play-tag">{
                  show.tag_ids.length ? this.props.tags[show.tag_ids[0].toString()].genre : "tag"
                }</div>
              <div className="author_credit">by
                <Link to={`/user/${show.author_id}`}>{ show.author_username }</Link>
              </div>
            </div>

            <div className="play-wave"></div>

            <div className="s-f-i-foot">
              <div className="s-f-i-foot-left">
                <div className="s-f-i-b fav">
                  <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                </div>
                <div className="s-f-i-b repost">
                  <i className="fa fa-retweet fa-lg" aria-hidden="true"></i>
                </div>
                <div className="s-f-i-b share">
                  <i className="fa fa-recycle fa-lg" aria-hidden="true"></i>
                </div>
                <div className="s-f-i-b add">
                  <i className="fa fa-music fa-lg" aria-hidden="true"></i>
                </div>
              </div>

              <div className="s-f-i-foot-right">
                <div className="s-f-i-b-r hp">
                  <i className="fa fa-headphones" aria-hidden="true"></i>
                  <p>{ show.plays }</p>
                </div>
                <div className="s-f-i-b-r cal">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <p>{timeAgo}</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </li>
    )
  }

};

export default ShowFeedItem;
