import React from 'react';
import ShowFeedItem from './show_feed_item';

class ShowFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="show-feed-container group">
        <div className="show-feed-head">
          <h2>Feed</h2>
          <button className="show-feed-play-all">Play all</button>
        </div>
        <ShowFeedItem />


        <div className="show-feed-foot"></div>
      </section>
    )
  }
}

export default ShowFeed;
