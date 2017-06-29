import React from 'react';
import ShowFeedItem from '../show_feed/show_feed_item';

class UserShowFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllShows(this.props.filter);
  }

  render() {

    return(
      <section className="user-show-feed-container group">
        <div className="user-show-head">
          <h2>Shows</h2>
          <button className="user-show-feed-play-all">Play all</button>
        </div>
        <ShowFeedItem />


        <div className="show-feed-foot"></div>
      </section>
    )
  }
}

export default UserShowFeed;
