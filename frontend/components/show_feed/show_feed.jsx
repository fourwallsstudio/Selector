import React from 'react';
import ShowFeedItem from './show_feed_item';

class ShowFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllShows();
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.shows !== newProps.shows) {
  //     this.props.fetchAllShows();
  //   }
  // }

  render() {

    if (!this.props.shows) {
      return (
        <div>no shows at this time</div>
      )
    } else {
      const showItems = this.props.shows.map( show => <ShowFeedItem id={show.id} show={show}/> )
      return (
        <section className="show-feed-container group">
          <div className="show-feed-head">
            <h2>Feed</h2>
            <button className="show-feed-play-all">Play all</button>
          </div>
          <ul>
            { showItems }
          </ul>

          <div className="show-feed-foot">
            <div className="s-f-f-logo-box" >
              <div className="s-f-f-logo"></div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default ShowFeed;
