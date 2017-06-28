import React from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';

const ShowProfileAside = ({ show, users }) => {
  if (!values(users).length) {
    return <div>loading...</div>

  } else {
    const listeners = values(users).map( user => {

      return (
        <li className="listeners-thumb" key={ user.id }>
          <Link to={ `/user/${user.id}` }>
            <img src={ user.avatar_url } />
          </Link>
        </li>
      )
    })

    return (
      <section className="show-profile-aside-container">
        <div className="s-p-a-favorited">
          <h2>Favorited by</h2>
        </div>
        <div className="s-p-a-listeners">
          <h2>Listeners</h2>
          <ul className="s-p-a-listeners-box">
            { listeners }
          </ul>
        </div>
        <div className="s-p-a-beatport">
          <h2>More from Beatport</h2>
        </div>
        <div className="s-p-a-footer">

        </div>
      </section>
    )

  }
}

export default ShowProfileAside;
