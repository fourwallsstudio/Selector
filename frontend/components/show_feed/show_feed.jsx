import React from 'react';
import ShowFeedItem from './show_feed_item';
import { values } from 'lodash';

class ShowFeed extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    if (this.props.filter !== 'tag') this.props.fetchAllShows(this.props.filter);
  }

  shouldComponentUpdate(nextProps) {
    if (Object.keys(this.props.shows) !== Object.keys(nextProps.shows)) {
      return true;
    } else {
      return false;
    }
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
            key={ show.id }
            show={ show }
            tags={ this.props.tags }
            queue={ this.props.queue }
            player={ this.props.player}
            createNewPlay={ this.props.createNewPlay }
            updatePlayStatus={ this.props.updatePlayStatus }
            changePlayerOrder={ this.props.changePlayerOrder }
            createQueueItem={ this.props.createQueueItem }
            currentUser={ this.props.currentUser }
            startPreview={ this.props.startPreview }
            stopPreview={ this.props.stopPreview }
            preview={ this.props.preview }
            />
        )});
      return (
        <section className="show-feed-container group">
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
