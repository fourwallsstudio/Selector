import React from 'react';
import { values } from 'lodash';
import { selectPlayerQueue } from '../../reducers/selecters';
import QueueItem from './queue_item';
import Countdown from './countdown';

class Player extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerQueue: [],
      dropdownIsActive: false,
      volume: 0
    }

    this.howlerPlayer = this.howlerPlayer.bind(this);
    this.dropdownHandle = this.dropdownHandle.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      playerQueue: selectPlayerQueue(nextProps.shows, nextProps.queue)
    });
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.dropdownIsActive !== nextState.dropdownIsActive) {
      return true;
    }

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

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerQueue.length &&
      prevState.playerQueue.length !== this.state.playerQueue.length) {

      if (this.props.player.player.length) {
        prevProps.player.player[0].pause();
        prevProps.removeHowlerPlay();
      }

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
        if (this.props.preview.status === 'previewing') {
          this.props.stopPreview(this.props.preview.howlPreview)
        }
        this.props.updateHowlerPlayer(
          howlPlay,
        );
      },

      onpause: () => {
        this.props.updatePlayStatus(
          howlPlay._sounds[0]._paused
        );
      },

      onend: () => {
        if (this.props.queue.length > 1) {
          this.props.removeHowlerPlay();
          this.props.nextQueueItem();
        } else {
          this.props.removeHowlerPlay();
          this.props.deleteQueueItem(this.props.queue[0].id);
          this.setState({
            dropdownIsActive: false
          })
        }
      }
    });

    howlPlay.play();
  };

  dropdownHandle() {
    this.setState({
      dropdownIsActive: !this.state.dropdownIsActive
    })
  }

  handlePlayClick(e) {
    e.preventDefault();
    let current = this.props.player.player[0]._sounds[0];

    if (current._paused) {
      this.props.player.player[0].play();
    } else {
      this.props.player.player[0].pause();
    }
  }

  handleVolume(e) {
    e.preventDefault();
    let current = this.props.player.player[0];

    this.setState({
        volume: parseInt(e.target.value)
    })

    current.volume(this.state.volume / 10);
  }


  render() {
    if (!this.state.playerQueue.length) {
      return <div></div>;

    } else {

      let currentShow = this.state.playerQueue[0].show;
      let counter;
      let dropdown;
      let firstPlayDisplay;
      let volume;

      // QUEUE REST
      let rest = this.state.playerQueue.slice(1).map( queueItem => {
        return <QueueItem key={ queueItem.show_id } queueItem={ queueItem }
                    player={ this.props.player } stopPreview={ this.props.stopPreview }
                    createQueueItem={ this.props.createQueueItem }
                    preview={ this.props.preview } show={ this.props.show }
                    currentUser={ this.props.currentUser } />;
      })

      // COUNTER & VOLUME
      if (this.props.player.player.length) {
        counter = <Countdown player={ this.props.player.player[0] } status={ this.props.player.status } />;
        volume = this.props.player.player[0]._volume * 10;
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
                    value={`${volume}`}
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

export default Player;
