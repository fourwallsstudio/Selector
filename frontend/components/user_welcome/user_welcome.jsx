import React from 'react';
import InnerHeader from './inner_header';
import UserWelcomeAside from './user_welcome_aside';
import ShowFeedContainer from '../show_feed/show_feed_container';

const UserWelcome = props => {
  return (
    <section className="user-welcome-container">
      <InnerHeader
        fetchAllShows={ props.fetchAllShows }
        updateFilter={ props.updateFilter} />
      <div className="inner-header-clear"></div>

      <div className="user-welcome-feed">
        <div className="user-welcome-feed-head">
          <h2>Feed</h2>
        </div>
        <ShowFeedContainer
          filter={ props.filter } />
      </div>


      <UserWelcomeAside users={ props.users }
        currentUser={ props.currentUser } />
    </section>
  )
};

export default UserWelcome;
