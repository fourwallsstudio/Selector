import React from 'react';
import UserWelcomeAsideItem from "./user_welcome_aside_item";
import ContactFooter from '../contact_footer/contact_footer';
import AdvertisementBox from '../advertisement/advertisement_box';

const UserWelcomeAside = ({ users, currentUser }) => {
  return (
     <section className="user-welcome-aside-container">
       <div className="u-w-a-head">
         <h2>People to follow</h2>
         <div className="u-w-a-follow-spinner">
           <i className="fa fa-refresh fa-lg" aria-hidden="true"></i>
         </div>
       </div>
       <div className="u-w-a-list">
         <UserWelcomeAsideItem users={ users }
           currentUser={ currentUser }/>
       </div>

       <ContactFooter />
       
       <AdvertisementBox ad={ "assets/pioneer-cdj-850-zilver.jpg" } />
       <AdvertisementBox ad={ "assets/2-Pioneer-CDJ2000-Nexus3.jpg" } />
     </section>
  )
}

export default UserWelcomeAside;
