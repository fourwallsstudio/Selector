import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const UserNavDropdown = (props) => {
  return (
    <div className="user-nav-dropdown-container">
      <div className="user-nav-dropdown-arrow-up"></div>
      <ul className="user-nav-dropdown">
        <li className="user-nav-dropdown-row" onClick={() => props.logout()} >
          Logout
        </li>
        <li className="user-nav-dropdown-row"
            onClick={() => props.history.push(`/user/${props.currentUser.id}/settings`)}>
          Settings
        </li>
      </ul>
    </div>
  )
}

export default withRouter(UserNavDropdown);
