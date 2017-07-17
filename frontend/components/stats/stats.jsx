import React from 'react';
import { connect } from 'react-redux';
import Canvas from './canvas';
import { fetchShowData, removeShowData } from '../../actions/graph_data_actions';
import { values } from 'lodash';

class Stats extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchShowData(this.props.showId);
  }

  componentWillUnmount() {
    this.props.removeShowData();
  }


  render() {
    if (!this.props.graphData.plays_per_day) {
      return <div>loading</div>
    } else {
      let graphData = this.props.graphData;

      return (
        <section className="stats-container">
          <div className="stats-head">
            <h2>Stats</h2>
          </div>
          <div className="stats-graph">
            <div className="stats-graph-y-label">
              <h3>plays</h3>
            </div>
            <div className="stats-graph-y">
              <p>{graphData.max_plays}</p>
              <p>{Math.floor(graphData.max_plays / 2)}</p>
              <p>0</p>
            </div>
            <Canvas graphData={ graphData } />
            <div className="stats-graph-y-filler"></div>
            <div className="stats-graph-x-filler"></div>
            <div className="stats-graph-x">
              <p>{graphData.total_days} days ago</p>
              <p>{Math.floor(graphData.total_days / 2)} days ago</p>
              <p>today</p>
            </div>
            <div className="stats-graph-y-filler"></div>
            <div className="stats-graph-x-filler"></div>
            <div className="stats-graph-x-label">
              <h3>time since created</h3>
            </div>
          </div>
        </section>
      )
    }
  }
}


const mapStateToProps = (state, { match }) => {
  return {
    showId: match.params.showId,
    graphData: state.graphData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShowData: showId => dispatch(fetchShowData(showId)),
    removeShowData: () => dispatch(removeShowData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats)
