import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';

const UserWelcomeAsideItem = ({ users, currentUser }) => {

  let following_ids = currentUser.following_ids

  let whoToFollow = values(users).map( user => {
    if (user.id !== currentUser.id
      && !following_ids.includes(user.id)) {

      return (
        <li className="who-to-follow-thumb" key={ user.id }>
          <Link to={ `/user/${ user.id }` }>
            <img src={ user.avatar_url } />
          </Link>
        </li>
      )
    }
  })

  return (
    <ul className="u-w-a-who-to-follow-box">
      { whoToFollow }
    </ul>
  );
};

export default UserWelcomeAsideItem;
