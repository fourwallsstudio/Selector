import React from 'react';
import ShowFeedItem from './show_feed_item';
import Notice from '../notice/notice';
import { renderLog } from '../../util/debugging_util';

class ShowFeed extends React.Component {

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

  _getShowItems() {
    return this.props.shows.map( show => (
        <ShowFeedItem
          key={ show.id }
          show={ show }
          tags={ this.props.tags }
          queue={ this.props.queue }
          player={ this.props.player }
          createNewPlay={ this.props.createNewPlay }
          updatePlayStatus={ this.props.updatePlayStatus }
          changePlayerOrder={ this.props.changePlayerOrder }
          createQueueItem={ this.props.createQueueItem }
          createFavorite={ this.props.createFavorite }
          deleteFavorite={ this.props.deleteFavorite }
          currentUser={ this.props.currentUser }
          startPreview={ this.props.startPreview }
          stopPreview={ this.props.stopPreview }
          preview={ this.props.preview }
          />
        )
      )
  }

  render() {
    if (!this.props.shows) {
      return <div>no shows at this time</div>;

    } else {
      const showItems = this._getShowItems()

      return (
        <section className="show-feed-container group">
          <ul>
            { showItems }

            {
              this.props.currentUser.id === this.props.filter
              && !this.props.shows.length
              && <Notice message="upload shows to your profile" />
            }

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
