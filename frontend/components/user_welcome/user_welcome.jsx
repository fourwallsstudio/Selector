import React from 'react';
import InnerHeader from './inner_header';
import Notice from '../notice/notice';
import UserWelcomeAside from './user_welcome_aside';
import ShowFeedContainer from '../show_feed/show_feed_container';
import { values } from 'lodash';

class UserWelcome extends React.Component {

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchNonFollowings(this.props.currentUser.id)
    }
  }

  render() {
    let feedType;

    if (this.props.filter === 'most_recent') feedType = ' - New Shows';
    if (this.props.filter === 'trending') feedType = ' - Trending';
    if (this.props.filter === 'favorites') feedType = ' - Favorites';

    const message = this.props.filter === 'main_feed'
    ? "follow users to add to your feed -->"
    : "add shows to your favorites";

    let notice;

    if (values(this.props.shows).length === 0) {
      notice = <Notice message={ message } />;
    }

    return (
      <section className="user-welcome-container">
        <InnerHeader
          fetchAllShows={ this.props.fetchAllShows }
          updateFilter={ this.props.updateFilter } />
        <div className="inner-header-clear"></div>

        <div className="user-welcome-feed">
          <div className="user-welcome-feed-head">
            <h2>Feed{ feedType }</h2>
          </div>

          { notice }

          <ShowFeedContainer
            filter={ this.props.filter } />
        </div>


        <UserWelcomeAside users={ this.props.users }
          currentUser={ this.props.currentUser } />
        </section>
    )
  }
};

export default UserWelcome;
