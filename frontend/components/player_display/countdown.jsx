import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 0,
      countup: 0
    }

    this.counter = this.counter.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
  }

  componentDidMount() {
    let end = this.props.playerQueue[0].show._sounds[0]._stop;
    let seek = this.props.playerQueue[0].show._sounds[0]._seek;

    this.setState(
      {
        countdown: Math.round( end - seek ),
        countup: Math.round( seek ),
      }
    );

    this.currentInterval = setInterval(this.counter, 1000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restoredPlayStatus) {
      setTimeout(() => this.props.restoredPlayPosition(false), 5000)
    }

    if (this.props.status !== nextProps.status ||
      this.props.playerQueue[0].show_id !== nextProps.playerQueue[0].show_id) {

      let end = nextProps.playerQueue[0].show._sounds[0]._stop;
      let seek = nextProps.playerQueue[0].show._sounds[0]._seek;

      this.setState(
        {
          countdown: Math.round( end - seek ),
          countup: Math.round( seek )
        }
      );

      clearInterval(this.currentInterval);

      if (!nextProps.playerQueue[0].show._sounds[0]._paused) {
        this.currentInterval = setInterval(this.counter, 1000);
      }
    }
  }



  componentDidUpdate(prevProps) {
    if (this.state.countdown === 0) {
      clearInterval(this.currentInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.currentInterval);
  }

  counter() {
    this.setState(
      {
        countdown: this.state.countdown - 1,
        countup: this.state.countup + 1,
      }
    );
  }

  stringify(n) {
    const sec = (n % 60).toString();
    const min = (Math.floor(n / 60) % 60).toString();
    const hour = (Math.floor(n / 3600)).toString();

    const secStr = (sec.length === 1) ? '0' + sec : sec;
    const minStr = (min.length === 1) ? '0' + min : min;
    const hourStr = (hour.length === 1) ? '0' + hour : hour;

    const display = hour > 0
      ? [hourStr, minStr, secStr].join(":")
      : [minStr, secStr].join(":")

    return display;
  }

  handleSeek(e) {
    e.preventDefault();
    let end = this.props.playerQueue[0].show._sounds[0]._stop;
    let seek = Math.floor(parseInt(e.target.value));

    this.setState(
      {
        countdown: Math.round(end - seek),
        countup: seek,
      }
    )

    this.props.playerQueue[0].show.seek(this.state.countup);
  }

  render() {
    const restorePlayPopUp = <div className="retore-play-pop-box">
                                <p>restored play position</p>
                                <div className="retore-play-pop-box-pointer"></div>
                              </div>;

    return (
      <div className="first-queue-playback">

        { this.props.restoredPlayStatus && restorePlayPopUp }

        <div className="first-queue-playback-countup">
          <p>{ this.stringify(this.state.countup) }</p>
        </div>
        <input type="range"
          min="0"
          max={`${ this.props.playerQueue[0].show._sounds[0]._stop }`}
          value={ `${ this.state.countup }`}
          onChange={ this.handleSeek }
          className="first-queue-playback-slider" />

        <div className="first-queue-playback-countdown">
          <p>{ "-" + this.stringify(this.state.countdown) }</p>
        </div>
      </div>
    )
  }
}

export default Countdown;
