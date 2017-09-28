import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';
import { scaleImg } from '../../util/img_util';

const UserWelcomeAsideItem = ({ users, currentUser }) => {

  let following_ids = currentUser.following_ids

  let whoToFollow = values(users).map( user => {
    if (user.id !== currentUser.id
      && !following_ids.includes(user.id)) {

      const newImgSize = scaleImg(50, user);

      return (
        <li className="who-to-follow-thumb" key={ user.id }>
          <Link to={ `/user/${ user.id }` }>
            <img
              src={ user.avatar_url }
              style={{ width: newImgSize['width'], height: newImgSize['height'] }} />
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
