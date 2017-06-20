import React from 'react';
import UserProfileAside from './user_profile_aside';
import UserShowFeed from './user_show_feed';


class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <section className="user-profile-container">
        <div className="user-profile-header">
          <div className="u-p-head-items-box">
            <div className="avatar-box">
            </div>
            <div className="u-p-title-box">
              <h1>User</h1>
              <button className="user-profile-feed-play-all">Play all</button>
              <button>Update cover image</button>
            </div>
          </div>
        </div>
        <div className="u-p-head-base">

        </div>

        <div className="u-p-main-container">
          <UserProfileAside />

          <UserShowFeed />
        </div>

      </section>
    )
  }
}

export default UserProfile;
