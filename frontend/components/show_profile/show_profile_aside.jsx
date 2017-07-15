import React from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';
import ContactFooter from '../contact_footer/contact_footer';

const ShowProfileAside = ({ show }) => {
  if (!show) {
    return <div>loading...</div>

  } else {
    const listeners = values(show.listeners).map( listener => {
      return (
        <li className="listeners-thumb" key={ listener.id }>
          <Link to={ `/user/${listener.id}` }>
            <img src={ listener.user_avatar } />
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
        <div className="s-p-a-footer">

        </div>
        <ContactFooter />
      </section>
    )

  }
}

export default ShowProfileAside;
