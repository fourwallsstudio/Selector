import React from 'react';

const UserProfileAside = ({ user }) => {
  return (
    <section className="user-profile-aside-container">
      <div className="u-p-a-stats-box">
        <div className="u-p-a-followers">
          <h3>{ user.show_ids.length }</h3>
          <p>Followers</p>
        </div>
        <div className="u-p-a-following">
          <h3>{ user.show_ids.length }</h3>
          <p>Following</p>
        </div>
        <div className="u-p-a-shows">
          <h3>{ user.show_ids.length }</h3>
          <p>Shows</p>
        </div>
      </div>
      <div className="u-p-a-location">
        <p>{ user.city }, { user.country }</p>
      </div>
      <div className="u-p-a-bio">
        <h2>Bio</h2>
        <p>{user.bio}</p>
      </div>

      <div className="u-p-a-following-display">
        <div className="u-p-a-following-display-head">
          <h2>Following</h2>
        </div>
      </div>
    </section>
  )
}

export default UserProfileAside;
