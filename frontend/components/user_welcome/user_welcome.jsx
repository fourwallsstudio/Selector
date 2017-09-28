import React from 'react';
import InnerHeader from './inner_header';
import Notice from '../notice/notice';
import UserWelcomeAside from './user_welcome_aside';
import ShowFeedContainer from '../show_feed/show_feed_container';
import * as _ from 'lodash';

const UserWelcome = props => {

  let feedType;

  if (props.filter === 'most_recent') feedType = ' - New Shows';
  if (props.filter === 'trending') feedType = ' - Trending';
  if (props.filter === 'favorites') feedType = ' - Favorites';

  const message = props.filter === 'main_feed'
    ? "follow users to add to your feed -->"
    : "add shows to your favorites";

  let notice;

  if (_.values(props.shows).length === 0) {
    notice = <Notice message={ message } />;
  }

  return (
    <section className="user-welcome-container">
      <InnerHeader
        fetchAllShows={ props.fetchAllShows }
        updateFilter={ props.updateFilter } />
      <div className="inner-header-clear"></div>

      <div className="user-welcome-feed">
        <div className="user-welcome-feed-head">
          <h2>Feed{ feedType }</h2>
        </div>

        { notice }

        <ShowFeedContainer
          filter={ props.filter } />
      </div>


      <UserWelcomeAside users={ props.users }
        currentUser={ props.currentUser } />
    </section>
  )
};

export default UserWelcome;
