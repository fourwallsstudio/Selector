import React from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';
import ContactFooter from '../contact_footer/contact_footer';

const UserProfileAside = ({ user, followings }) => {
  let followingUsers;

  if (!values(followings).length) {
    followingUsers = <div></div>;

  } else {
    let followingUsers = user.followings_ids.map( id => {
      let following = followings[id];

      return (
        <li className="followings-thumb" key={ id }>
          <Link to={ `/user/${id}` }>
            <img src={ following.avatar_url } />
          </Link>
        </li>
      )
    })
  }

  return (
    <section className="user-profile-aside-container">
      <div className="u-p-a-stats-box">
        <div className="u-p-a-followers">
          <h3>{ user.followers_ids.length }</h3>
          <p>Followers</p>
        </div>
        <div className="u-p-a-following">
          <h3>{ user.followings_ids.length }</h3>
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
        <div className="u-p-a-bio-head">
          <h2>Bio</h2>
        </div>
        <p>{user.bio}</p>
      </div>

      <ContactFooter />
    </section>
  )
}

export default UserProfileAside;


// <div className="u-p-a-following-display">
//   <div className="u-p-a-following-display-head">
//     <h2>Following</h2>
//   </div>
//   <ul className="u-p-a-following-box">
//     { followingUsers }
//   </ul>
// </div>
