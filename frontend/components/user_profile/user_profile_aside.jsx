import React from 'react';

const UserProfileAside = () => {

  return (
    <section className="user-profile-aside-container">
      <div className="u-p-a-stats-box">
        <div className="u-p-a-followers"></div>
        <div className="u-p-a-following"></div>
        <div className="u-p-a-shows"></div>
      </div>
      <div className="u-p-a-location"></div>
      <div className="u-p-a-bio"></div>
    </section>
  )
}

export default UserProfileAside;
