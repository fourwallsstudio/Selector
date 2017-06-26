import React from 'react';
import { values } from 'lodash';
import { selectPlayerQueue } from '../../reducers/selecters';
import QueueItem from './queue_item';

class Player extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerQueue: []
    }

    this.howlerPlayer = this.howlerPlayer.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      playerQueue: selectPlayerQueue(nextProps.shows, nextProps.queue)
    });
  }


  shouldComponentUpdate(nextProps) {
    if (nextProps.queue.length &&
      this.props.queue.length !== nextProps.queue.length) {

      return true;
    } else {

      if (!this.props.player.length ||
        this.props.player[0].paused !== nextProps.player[0].paused) {
        return true;
      }

      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.playerQueue.length !== this.state.playerQueue.length) {
      if (this.props.player.player.length) { prevProps.player.player[0].pause() }
      this.howlerPlayer();
    }
  }


  howlerPlayer() {
    const q = this.state.playerQueue[0];
    const source = q.show.audio_url;

    const howlPlay = new Howl({
      src: source,
      onload: () => {
          howlPlay._sounds[0].show_id = q.show.id;
      },
      onplay: () => {
        this.props.updateHowlerPlayer(
          howlPlay,
        );
      },
      onpause: () => {
        this.props.updatePlayStatus(
          howlPlay._sounds[0]._paused
        );
      },
      onend: () => { console.log("onend") },
      onstop: () => { console.log("onstop") }
    });

    howlPlay.play();
  };



  render() {
    if (!this.state.playerQueue.length) {
      return <div></div>;
    } else {
      let currentShow = this.state.playerQueue[0].show;

      let rest = this.state.playerQueue.slice(1).map( queueItem => {
        return <QueueItem key={ queueItem.show_id } queueItem={ queueItem } />;
      })

      return (
        <section className="player-container">

          <div className="player-container-top">
            <div className="player-container-left">
              <div className="first-queue-box">
                <div className="first-queue-image-box">
                  <img src={ currentShow.image_url } />
                </div>
                <div className="first-queue-play-button"
                  onClick={ this.playClick }>
                  <svg viewBox="0 0 21 24">
                    <path d="M0,21.6V2.4c0-2.2,1.7-3,3.9-1.9l15.5,9.6c2.1,1.1,2.1,2.8,0,3.9L3.9,23.5C1.8,24.6,0,23.7,0,21.6z"/>
                  </svg>
                </div>
                <div className="first-queue-play-detail">
                  <h2>{currentShow.title}</h2>
                  <p>by</p>
                  <h4>{currentShow.author_username}</h4>
                  <button>FOLLOW</button>
                </div>
              </div>

              <div className="first-queue-bottons-box">

              </div>
              <div className="first-queue-playback-countdown">

              </div>
            </div>

            <div className="first-queue-playback-slider"></div>

            <div className="player-container-right">
              <div className="first-queue-playback-countup">

              </div>
              <div className="first-queue-playback-vol-box">

              </div>

              <div className="playback-queue-dropdown">
                <h4>NEXT</h4>
                  <i className="fa fa-chevron-down fa-lg"
                    aria-hidden="true"
                    ></i>
              </div>
            </div>
          </div>

          <ul className="player-container-bottom">
            { rest }
          </ul>
        </section>
      )
    }
  }
}

export default Player;
