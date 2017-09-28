import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';
import ContactFooter from '../contact_footer/contact_footer';
import AdvertisementBox from '../advertisement/advertisement_box';

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
        <div className="s-p-a-listeners">
          <h2>Listeners</h2>
          <ul className="s-p-a-listeners-box">
            { listeners }
          </ul>
        </div>
        <div className="s-p-a-footer">

        </div>
        <ContactFooter />

        <AdvertisementBox ad={ "assets/pioneer-cdj-850-zilver.jpg" } />
        <AdvertisementBox ad={ "assets/2-Pioneer-CDJ2000-Nexus3.jpg" } />
      </section>
    )

  }
}

export default ShowProfileAside;
