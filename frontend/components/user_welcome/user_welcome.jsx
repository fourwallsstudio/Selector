import React from 'react';
import ShowFeedContainer from '../show_feed/show_feed_container';
import UserWelcomeAside from './user_welcome_aside';
import InnerHeader from './inner_header';

const UserWelcome = props => {
  return (
    <section className="user-welcome-container">
      <InnerHeader
        fetchAllShows={ props.fetchAllShows }
        updateFilter={ props.updateFilter} />
      <div className="inner-header-clear"></div>

      <ShowFeedContainer
        filter={ props.filter } />

      <UserWelcomeAside users={ props.users }
        currentUser={ props.currentUser} />
    </section>
  )
};

export default UserWelcome;
