import React from 'react';
import UserWelcomeAsideItem from "./user_welcome_aside_item";

const UserWelcomeAside = () => {
  return (
     <section className="user-welcome-aside-container">
       <div className="u-w-a-head">
         <h2>People to follow</h2>
         <div>O</div>
       </div>
       <div className="u-w-a-list">
         <UserWelcomeAsideItem />
       </div>
     </section>
  )
}

export default UserWelcomeAside;
