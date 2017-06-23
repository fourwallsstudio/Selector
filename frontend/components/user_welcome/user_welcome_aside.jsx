import React from 'react';
import UserWelcomeAsideItem from "./user_welcome_aside_item";

const UserWelcomeAside = () => {
  return (
     <section className="user-welcome-aside-container">
       <div className="u-w-a-head">
         <h2>People to follow</h2>
         <div className="u-w-a-follow-spinner">
           <i className="fa fa-refresh fa-lg" aria-hidden="true"></i>
         </div>
       </div>
       <div className="u-w-a-list">
         <UserWelcomeAsideItem />
       </div>
     </section>
  )
}

export default UserWelcomeAside;
