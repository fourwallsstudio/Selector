import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 0,
      countup: 0
    }

    this.counter = this.counter.bind(this);
  }

  componentDidMount() {
    let end = this.props.player._sounds[0]._stop;

    this.setState({ countdown: Math.round( end ) });

    this.currentInterval = setInterval(this.counter, 1000);
  }

  componentWillReceiveProps(nextProps) {
    let end = nextProps.player._sounds[0]._stop;
    let seek = nextProps.player._sounds[0]._seek;
    this.setState({
      countdown: Math.round( end - seek ),
      countup: Math.round( seek )
     });

    if (nextProps.player._sounds[0]._paused) {
      clearInterval(this.currentInterval);
    } else {
      clearInterval(this.currentInterval);
      this.currentInterval = setInterval(this.counter, 1000);
    }
  }



  componentDidUpdate() {
    if (this.state.countdown === 0) {
      clearInterval(this.currentInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.currentInterval);
  }

  counter() {
    this.setState({
      countdown: this.state.countdown - 1,
      countup: this.state.countup + 1,
    });
  }

  stringify(n) {
    let sec = (n % 60).toString();
    let min = (Math.floor(n / 60)).toString();

    sec = (sec.length === 1) ? '0' + sec : sec;
    return min + ":" + sec;
  }

  render() {
    return (
      <div className="first-queue-playback">
        <div className="first-queue-playback-countup">
          <p>{ this.stringify(this.state.countup) }</p>
        </div>

        <input type="range"
          min="0"
          max={`${ this.props.player._sounds[0]._stop }`}
          value={ `${ this.state.countup }`}
          className="first-queue-playback-slider" />

        <div className="first-queue-playback-countdown">
          <p>{ "-" + this.stringify(this.state.countdown) }</p>
        </div>
      </div>
    )
  }
}

export default Countdown;
