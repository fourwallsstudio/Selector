import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';
import ContactFooter from '../contact_footer/contact_footer';

const UserProfileAside = ({ user, users, followings }) => {
  let followingUsers;

  if (!values(followings).length === user.followings_ids.length) {
    followingUsers = <div></div>;

    } else {

      followingUsers = followings.map( following => {
        return (
          <li className="followings-thumb" key={ following.id }>
            <Link to={ `/user/${following.id}` }>
              <img src={ following.avatar_url } />
            </Link>
          </li>
        )
      })
    }

  if (!user) {
    return <div>Loading...</div>
    
  } else {

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
        <div className="u-p-a-following-display">
          <div className="u-p-a-following-display-head">
            <h2>Following</h2>
          </div>
          <ul className="u-p-a-following-box">
            { followingUsers }
          </ul>
        </div>

        <ContactFooter />
      </section>
    )
  }

}

export default UserProfileAside;
