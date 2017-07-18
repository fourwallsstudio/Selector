import React from 'react';
import { values } from 'lodash';
import { selectPlayerQueue } from '../../reducers/selecters';
import QueueItem from './queue_item';
import Countdown from './countdown';

class PlayerDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownIsActive: false,
      volume: 0
    }

    this.dropdownHandle = this.dropdownHandle.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleShowOnEnd = this.handleShowOnEnd.bind(this);
    this.handleShowOnPause = this.handleShowOnPause.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.player.playerQueue.length) {

      if (nextProps.player.playerQueue[0].show._onend.length === 0) {
        this.handleShowOnEnd(nextProps.player.playerQueue, nextProps.currentUser);
      }

      if (nextProps.player.playerQueue[0].show._onpause.length === 0) {
        this.handleShowOnPause(nextProps.player.playerQueue, nextProps.currentUser);
      }
    } else {
      this.setState({
        dropdownIsActive: false
      })
    }
  }

  handleShowOnEnd(playerQueue, currentUser) {
    playerQueue[0].show.on('end', () => {
      let userId = currentUser.id
      let showId = playerQueue[0].show_id

      this.props.updateQueueItem({ user_id: userId, show_id: showId, seek: 0 });
      this.props.removeHowlerPlay();
    })
  }

  handleShowOnPause(playerQueue, currentUser) {
    playerQueue[0].show.on('pause', () => {
      let newSeek = playerQueue[0].show._sounds[0]._seek;
      let userId = currentUser.id
      let showId = playerQueue[0].show_id

      this.props.updateQueueItem({ user_id: userId, show_id: showId, seek: newSeek });
    })
  }

  dropdownHandle() {
    this.setState({
      dropdownIsActive: !this.state.dropdownIsActive
    })
  }

  handlePlayClick(e) {
    e.preventDefault();
    let current = this.props.player.playerQueue[0].show._sounds[0];

    if (current._paused) {
      this.props.player.playerQueue[0].show.play();
    } else {
      this.props.player.playerQueue[0].show.pause();
    }

    this.props.updatePlayStatus(current._paused);
  }

  handleVolume(e) {
    e.preventDefault();
    let current = this.props.player.playerQueue[0].show;

    this.setState({
        volume: parseInt(e.target.value)
    })

    current.volume(this.state.volume / 10);
  }


  render() {
    let playerQueue = this.props.player.playerQueue;

    if (!playerQueue.length) {

      return <div></div>;

    } else {

      let currentShow = this.props.shows[playerQueue[0].show_id];
      let counter;
      let dropdown;
      let firstPlayDisplay;
      let volume;

      // QUEUE REST
      let restOfQueue = playerQueue.slice(1).map( q => this.props.shows[q.show_id] );
      let rest = restOfQueue.map( show => {

        return <QueueItem key={ show.id }
                    player={ this.props.player } stopPreview={ this.props.stopPreview }
                    changePlayerOrder={ this.props.changePlayerOrder }
                    updatePlayStatus={ this.props.updatePlayStatus }
                    preview={ this.props.preview } show={ show }
                    currentUser={ this.props.currentUser.id } />;
      })


      // COUNTER & VOLUME
      if (playerQueue.length) {

        counter = <Countdown playerQueue={ playerQueue }
                      status={ this.props.player.status }
                      restoredPlayStatus={ this.props.player.restoredPlayPosition }
                      restoredPlayPosition={ this.props.restoredPlayPosition } />;

        volume = playerQueue[0].show._volume * 10;
      }

      // DROPDOWN
      if (this.state.dropdownIsActive) {

        dropdown = " dropdown-active";

      } else {

        dropdown = "";

      };

      // PLAY DISPLAY
        if (this.props.player.status === 'playing') {
          firstPlayDisplay = (
            <svg viewBox="0 0 21 24">
              <path d="M4.5,0h-3C0.7,0,0,0.7,0,1.6v20.8C0,23.3,0.7,24,1.5,24h3C5.3,24,6,23.3,6,22.4V1.6C6,0.7,5.3,0,4.5,0z M16.5,0h-3C12.7,0,12,0.7,12,1.6v20.8c0,0.9,0.7,1.6,1.5,1.6h3c0.8,0,1.5-0.7,1.5-1.6V1.6C18,0.7,17.3,0,16.5,0z"/>
            </svg>
          );
        } else {
          firstPlayDisplay = (
            <svg viewBox="0 0 21 24">
              <path d="M0,21.6V2.4c0-2.2,1.7-3,3.9-1.9l15.5,9.6c2.1,1.1,2.1,2.8,0,3.9L3.9,23.5C1.8,24.6,0,23.7,0,21.6z"/>
            </svg>
          );
        }


      return (
        <section className={"player-container" + dropdown }>

          <div className="player-container-top">
            <div className="player-container-left">
              <div className="first-queue-box">
                <div className="first-queue-image-box">
                  <img src={ currentShow.image_url } />
                </div>
                <div className="first-queue-play-button"
                  onClick={ this.handlePlayClick } >

                  { firstPlayDisplay }

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
            </div>

            { counter }

            <div className="player-container-right">
              <div className="first-queue-playback-vol-box">
                <i className="fa fa-volume-up fa-2x" aria-hidden="true"></i>
                <div className="f-q-vol-bar">
                  <input className="f-q-vol-slider"
                    type="range"
                    min="0"
                    max="10"
                    value={`${ volume }`}
                    onChange={ this.handleVolume }
                     />
                </div>
              </div>

              <div className={"playback-queue-dropdown" + dropdown}
                onClick={ this.dropdownHandle }>
                <h4>NEXT</h4>
                  <i className="fa fa-chevron-down"
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

export default PlayerDisplay;
