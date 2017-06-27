import React from 'react';
import ShowFeedItem from './show_feed_item';

class ShowFeed extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchAllShows();
  }


  render() {

    if (!this.props.shows) {
      return (
        <div>no shows at this time</div>
      )
    } else {
      const showItems = this.props.shows.map( show => {
        return (
          <ShowFeedItem
            key={show.id}
            show={show}
            queue={ this.props.queue }
            player={ this.props.player}
            createQueueItem={ this.props.createQueueItem }
            currentUser={ this.props.currentUser }
            />
        )});
      return (
        <section className="show-feed-container group">
          <div className="show-feed-head">
            <h2>Feed</h2>
            <button className="show-feed-play-all"
              onClick={ this.playAllHandle }>
              <svg viewBox="0 0 11 12" >
                <path d="M1.003,0 C0.407,0 0,0.413 0,1.13 L0,10.871 C0,11.585 0.413,12 1.01,12 C1.254,12 1.529,11.931 1.819,11.784 L9.745,6.919 C10.744,6.413 10.744,5.593 9.745,5.087 L1.819,0.217 C1.525,0.07 1.248,0 1.003,0 M1.5,1.782 L8.37,6.003 L1.5,10.22 L1.5,1.782 M1.501,1.104 L1.504,1.104 L1.501,1.104"/>
              </svg>
              <p>Play all</p>
            </button>
          </div>
          <ul>
            { showItems }
          </ul>

          <div className="show-feed-foot">
            <div className="s-f-f-logo-box" >
              <div className="s-f-f-logo"></div>
            </div>
          </div>
          <div className="foot-filler"></div>
        </section>
      )
    }
  }
}

export default ShowFeed;
