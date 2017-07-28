import React from 'react';


class Canvas extends React.Component {
  constructor(props) {
    super(props)

    this.updateCanvas = this.updateCanvas.bind(this)
  }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ppd = this.props.graphData.plays_per_day;
    const maxPlays = parseInt(this.props.graphData.max_plays);
    const totalDays = parseInt(this.props.graphData.total_days);

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const yUnit = 300 / maxPlays;
    const xUnit = 500 / totalDays;
    ctx.beginPath();

    for (let i = 0; i <= totalDays; i ++) {
      ppd[i] ? ctx.lineTo(xUnit * i, yUnit * ppd[i]) : ctx.lineTo(xUnit * i, 0)

      // if (ppd[i]) {
      //   ctx.lineTo(xUnit * i, yUnit * ppd[i]);
      // } else {
      //   ctx.lineTo(xUnit * i, 0);
      // }
    }

    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  render() {
    return <canvas id="canvas" width="500" height="300"/>;
  }

}


export default Canvas;
