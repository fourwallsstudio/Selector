import React from 'react';
import ShowFeedContainer from '../show_feed/show_feed_container';
import UserWelcomeAside from './user_welcome_aside';
import InnerHeader from './inner_header';

const UserWelcome = () => {
  return (
    <section className="user-welcome-container">
      <InnerHeader />
      <div className="inner-header-clear"></div>

      <ShowFeedContainer filter={ "most_recent" }/>
      <UserWelcomeAside />
    </section>
  )
};

export default UserWelcome;
